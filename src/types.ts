export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  platforms: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Competency {
  title: string;
  description: string;
}
