
export interface Skill {
  name: string;
  level: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}
