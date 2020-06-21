import { TechTag } from "./common-model";

export interface ProjectModel {
    title: string;
    subTitle: string;
    projects: Project[];
  }
  
  export interface Project {
    name: string;
    role: string;
    dateFrom: string;
    dateTo: string;
    summaries: Summary[];
    techTags: TechTag[];
    isActive: boolean;
    isLatest: boolean;
  }

  export interface Summary {
    data: string;
  }