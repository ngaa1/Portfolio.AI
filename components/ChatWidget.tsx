
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Key } from 'lucide-react';
import { sendMessageToGemini, setApiKey } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [isKeySet, setIsKeySet] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "您好！我是李楚龙的智能助手。您可以问我关于他的结构设计经验、T-STARS专利软件，或是在欧洲的求学经历。" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isKeySet]);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKeyInput.trim()) {
        setApiKey(apiKeyInput.trim());
        setIsKeySet(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    let fullResponse = "";
    
    setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

    const stream = sendMessageToGemini(userMsg);

    try {
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          if (lastMsg.role === 'model' && lastMsg.isStreaming) {
            lastMsg.text = fullResponse;
          }
          return newHistory;
        });
      }
    } finally {
      setIsTyping(false);
      setMessages(prev => {
        const newHistory = [...prev];
        const lastMsg = newHistory[newHistory.length - 1];
        if (lastMsg.role === 'model') {
            lastMsg.isStreaming = false;
        }
        return newHistory;
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[550px] bg-white border border-slate-200 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 ring-1 ring-slate-900/5">
          {/* Header */}
          <div className="bg-brand-900 p-4 border-b border-brand-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-brand-700 rounded-lg border border-brand-600">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">AI Resume Assistant</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                   <p className="text-[10px] text-brand-200 font-mono uppercase">Online | Gemini 2.5</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-300 hover:text-white transition-colors p-1 hover:bg-brand-800 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isKeySet ? (
            // API Key Input View
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-slate-200">
                    <Key className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="text-slate-900 font-bold mb-2">启用 AI 对话功能</h4>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    为了在静态网页演示 AI 功能，请输入您的 Google Gemini API Key。<br/>Key 仅保存在当前会话中。
                </p>
                <form onSubmit={handleKeySubmit} className="w-full">
                    <input 
                        type="password" 
                        placeholder="Paste API Key here..."
                        value={apiKeyInput}
                        onChange={(e) => setApiKeyInput(e.target.value)}
                        className="w-full p-3 rounded-lg border border-slate-300 mb-3 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
                    />
                    <button 
                        type="submit"
                        disabled={!apiKeyInput}
                        className="w-full py-2.5 bg-brand-700 text-white text-sm font-bold rounded-lg hover:bg-brand-800 disabled:opacity-50 transition-colors"
                    >
                        开始对话
                    </button>
                </form>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="mt-4 text-[10px] text-brand-600 hover:underline">
                    获取 Gemini API Key &rarr;
                </a>
            </div>
          ) : (
            // Chat Interface
            <>
                <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50/50">
                    {messages.map((msg, idx) => (
                    <div 
                        key={idx} 
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm
                        ${msg.role === 'user' ? 'bg-white border-slate-200' : 'bg-brand-50 border-brand-100'}
                        `}>
                        {msg.role === 'user' ? <User className="w-4 h-4 text-slate-600" /> : <Sparkles className="w-4 h-4 text-brand-600" />}
                        </div>
                        <div className={`
                        p-3.5 rounded-2xl text-sm max-w-[85%] leading-relaxed shadow-sm
                        ${msg.role === 'user' 
                            ? 'bg-brand-700 text-white rounded-tr-sm' 
                            : 'bg-white text-slate-700 border border-slate-200 rounded-tl-sm'}
                        `}>
                        {msg.text}
                        {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-brand-500 animate-pulse"/>}
                        </div>
                    </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
                    <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="询问关于我的经历..."
                        className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-lg pl-4 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 border border-slate-200 transition-all text-sm font-medium"
                        disabled={isTyping}
                    />
                    <button 
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-2 p-1.5 bg-brand-700 hover:bg-brand-800 disabled:opacity-50 disabled:hover:bg-brand-700 rounded-md text-white transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                    </div>
                </form>
            </>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl shadow-brand-900/20 transition-all duration-300 border-4 border-white
          ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-700 hover:bg-brand-800 hover:scale-110'}
        `}
      >
        {isOpen ? (
           <X className="w-6 h-6 text-white" />
        ) : (
          <>
             <MessageCircle className="w-6 h-6 text-white" />
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
              </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
