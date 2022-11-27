import { Timestamp } from "firebase/firestore";
import { TechnicalIcon } from "../utils/helper";

export interface PortfolioData {
  id: string;
  description: string;
  projects: Project[];
}

export interface Project {
  imageUrl: string;
  type: string;
  id: string;
}

export interface ProjectMeta {
  createdAt: Timestamp;
  endedAt: Timestamp;
  role: string;
  title: string;
}

export interface IconData {
  icon: string;
  title: string;
}

export interface ProjectDetailsData {
  appLink: string;
  description: string;
  details: ProjectMeta;
  images: string[];
  mainImage: string;
  repository: string;
  technologies: IconData[];
}
