import { TechTag } from './common-model';

export interface ProfileModel {
    profileName: string;
    summary: string;
    frameworks: Framework[];
    numberOfProfileImages: number;
  }
  
  export interface Framework {
    title: string;
    subTitle: string;
    description: string;
    techTags: TechTag[];
  }
  