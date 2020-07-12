import { TechTag, responsibility } from "./common-model";

export interface ProjectModel {
    title: string;
    subTitle: string;
    projects: Project[];
  }
  
  export interface Project {
    company: string;
    name: string;
    role: string;
    dateFrom: string;
    dateTo: string;
    summaries: Summary[];
    responsibilties: responsibility[];
    techTags: TechTag[];
    isActive: boolean;
    isLatest: boolean;
  }

  export interface Summary {
    data: string;
  }

  