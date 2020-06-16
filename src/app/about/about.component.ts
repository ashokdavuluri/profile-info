import { Component, OnInit } from '@angular/core';
import aboutData from './soures/about.json';
import { AboutModel } from './soures/about-model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  aboutPageData: AboutModel;
  isAdmin = true;
  constructor() { }

  ngOnInit(): void {
     this.aboutPageData = JSON.parse(JSON.stringify(aboutData));
     this.isAdmin = localStorage.getItem("isAdmin")?true:false;
  }

}
