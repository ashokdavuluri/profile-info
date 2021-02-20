import { TechTag, responsibility } from './common-model';

export interface ProfileModel {
    profileName: string;
    summary: string;
    isShowSummary:boolean;
    responsibiltyTitle: string
    frameworks: Framework[];
    responsibilties:responsibility[]
    numberOfProfileImages: number;
  }
  
  export interface Framework {
    title: string;
    subTitle: string;
    description: string;
    techTags: TechTag[];
  }
  