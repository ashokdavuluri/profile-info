import { Component, OnInit } from '@angular/core';
import { AboutModel } from '../domain/models/about-model';
import { DataSourseService } from '../domain/services/data-sourse.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  aboutPageData: AboutModel;
  isAdmin = true;
  DataSourseService: DataSourseService;
  constructor(dataSourseService: DataSourseService) {
    this.DataSourseService = dataSourseService;
   }

  ngOnInit(): void {
    this.DataSourseService.getAboutPageData().then(data => {
      this.aboutPageData = data;
      console.log(data);
    })
     //this.aboutPageData = JSON.parse(JSON.stringify(aboutData));
     this.isAdmin = localStorage.getItem("isAdmin")?true:false;
     
  }

}
