
export interface ProjectDetail {
  name: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  coreResponsibilities: string[];
  projects: ProjectDetail[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags: string[];
  imageUrl: string;
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency level (0-100)
  fullMark: number;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  gpa?: string;
  courses?: string;
  thesis?: string;
}

export interface Honor {
  title: string;
  company: string;
  year: string;
  description: string;
}

export interface DetailedSkills {
  [category: string]: string[];
}

export interface UserProfile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  wechat: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  education: Education[];
  experience: Experience[];
  honors: Honor[];
  skills: SkillData[];
  detailedSkills: DetailedSkills;
  projects: Project[]; // Highlighted projects for cards
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}
