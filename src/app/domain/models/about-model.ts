export interface AboutModel {
    pageTitle: string;
    version:string;
    technologies:Technology[];
}

export interface Technology{
    name: string;
    url:string;
}