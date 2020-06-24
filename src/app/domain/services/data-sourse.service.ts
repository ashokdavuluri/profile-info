import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { AboutModel } from '../models/about-model';
import { ProfileModel } from '../models/profile-model';
import { ContactModel } from '../models/contact-model';
import { ProjectModel } from '../models/projects-model';

@Injectable({
  providedIn: 'root'
})
export class DataSourseService {
  private blobContainerUrl: string;
  
  constructor() { 
    // this.blobContainerUrl = "https://"+environment.azureContainers.blobName+'.'+environment.azureContainers.baseUrl
  }

  getContactPageData():Promise<ContactModel>{
    return new Promise(resolve => {
      var file = "https://ashokprofile.blob.core.windows.net/content-store/contacts.json";
     this.downloadFile(file, resolve);
    })
  }

  getProjectsPageData():Promise<ProjectModel>{
    return new Promise(resolve => {
      var file = "https://ashokprofile.blob.core.windows.net/content-store/projects.json";
     this.downloadFile(file, resolve);
    })
  }
  getProfilePageData():Promise<ProfileModel>{
    return new Promise(resolve => {
      var file = "https://ashokprofile.blob.core.windows.net/content-store/profile.json";
     this.downloadFile(file, resolve);
    })
  }
  getAboutPageData(): Promise<AboutModel>{
    return new Promise(resolve => {
      var file = "https://ashokprofile.blob.core.windows.net/content-store/about.json";
     this.downloadFile(file, resolve);
    })
  }

  private downloadFile(file: string, resolve: (value?: any | PromiseLike<any>) => void) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          resolve(JSON.parse(rawFile.responseText));
        }
      }
    };
    rawFile.send(null);
  }
}
