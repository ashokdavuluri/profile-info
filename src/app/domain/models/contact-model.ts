export interface ContactModel {
    title: string;
    subTitle: string;
    contactTypes: ContactType[];
  }
  
  export interface ContactType {
    name: string;
    displayNam: string;
    url: string;
    type: string;
    isActive: boolean;
    icon: string;
  }