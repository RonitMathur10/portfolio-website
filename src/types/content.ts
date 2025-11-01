export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  // category: 'programming' | 'tools' | 'frameworks' | 'other';
  category: 'programming' | 'tools' | 'libraries & frameworks' | 'skills';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  coursework?: string[];
  achievements?: string[];
  societies?: Society[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: string;
}

export interface Interest {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface Society {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}