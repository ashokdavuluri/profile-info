import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { tap } from 'rxjs/operators';
import { AboutModel } from '../models/about-model';
import { ProfileModel } from '../models/profile-model';
import { ContactModel } from '../models/contact-model';
import { ProjectModel } from '../models/projects-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourseService {
  private blobContainerUrl: string;
  httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
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

  subscribeToBlog(email: string): Observable<any>{
    var url = "https://profiles-fn-app.azurewebsites.net/api/AddSubscriptionAndConfirmation?email="+ email;
    return this.httpClient
      .get<any>(url)
      .pipe(tap(
          data => {
            console.log(JSON.parse(data));
          },
          error => {
            console.log(error);
          }
        ));
  }

  private downloadFileHttp(file: string, resolve: (value?: any | PromiseLike<any>) => void){
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.httpClient
      .get<any>(file)
      .pipe(tap(
          data => {
            resolve(JSON.parse(data));
          },
          error => {
            console.log(error);
          }
        )
      );
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
