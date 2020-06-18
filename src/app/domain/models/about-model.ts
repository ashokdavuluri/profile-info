import { TechTag } from './common-model';

export interface AboutModel {
    pageTitle: string;
    version:string;
    technologies:TechTag[];
}