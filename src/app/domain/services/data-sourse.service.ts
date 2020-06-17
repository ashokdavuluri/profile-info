import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { AboutModel } from '../models/about-model';

@Injectable({
  providedIn: 'root'
})
export class DataSourseService {
  private blobContainerUrl: string;
  
  constructor() { 
    this.blobContainerUrl = "https://"+environment.azureContainers.blobName+'.'+environment.azureContainers.baseUrl
  }

  getAboutPageData(): Promise<AboutModel>{
    return new Promise(resolve => {
      var file = "https://ashokprofile.blob.core.windows.net/content-store/about.json";
     console.log(file)
     var rawFile = new XMLHttpRequest();
     rawFile.open("GET",file,false);
     rawFile.onreadystatechange = function() {
         if(rawFile.readyState === 4) {
             if(rawFile.status === 200 || rawFile.status === 0)
             {
              resolve(JSON.parse(rawFile.responseText));
             }
         }
     }
     rawFile.send(null);
    })
  }
}
