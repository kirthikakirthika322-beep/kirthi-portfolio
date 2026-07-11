export interface Skill {
  name: string;
  category: "frontend" | "tools" | "other";
  level: number; // percentage
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  timeline: string;
  grade?: string;
  highlights?: string[];
}
