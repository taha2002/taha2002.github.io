
export enum Category {
  SAAS = 'SaaS & Apps',
  SCRAPING = 'Scraping & Automation',
  API = 'API & Plugins'
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
  link?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  projects: {
    title: string;
    details: string;
    stack: string[];
  }[];
}

export interface FreelanceProject {
  title: string;
  date: string;
  description: string;
  category: Category;
  techStack: string[];
  website?: string;
  features?: string[];
  featured?: boolean;
  gallery?: string[];
  detailedDescription?: string;
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string; // Changed to Markdown String
  slug: string;
}
