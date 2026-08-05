export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp?: Date;
}

export interface ChatbotSuggestion {
  id: string;
  label: string;
  value: string;
}

export interface PortfolioInfo {
  name: string;
  title: string;
  description: string;
  technologies: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: Contact;
  location?: string;
  availability?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  position: string;
  years: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface Contact {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}