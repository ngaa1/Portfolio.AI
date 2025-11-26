
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;
let currentApiKey: string | null = null;

export const setApiKey = (key: string) => {
  currentApiKey = key;
  // Reset session when key changes
  chatSession = null;
};

const getAiClient = () => {
  if (!currentApiKey) {
    // Graceful fallback if no key is present
    return null;
  }
  return new GoogleGenAI({ apiKey: currentApiKey });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    yield "请先配置 API Key 以启用 AI 助手功能。";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "抱歉，连接服务时出现错误，请检查网络或 API Key 设置。";
  }
};
