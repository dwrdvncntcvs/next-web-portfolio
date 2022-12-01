import { Timestamp } from "firebase/firestore";

export interface Experience {
  id: string;
  description: string;
  experiences: ExperienceItem[];
}

export interface ExperienceItem {
  companyName: string;
  imageUrl: string;
  id: string;
}

export interface ExperienceData {
  meta: ExperienceMeta;
  companyLink?: string;
  description: string;
  position: string;
  companyName: string;
  companyLogo: string;
  positions: CompanyPosition[];
}

export interface ExperienceMeta {
  dateEnded: Timestamp;
  dateStarted: Timestamp;
  address: string;
}

export interface CompanyPosition {
  tasks: string[];
  title: string;
}
