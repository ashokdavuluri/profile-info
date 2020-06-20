import { Component, OnInit } from '@angular/core';
import { DataSourseService } from './domain/services/data-sourse.service';
import { ContactModel } from './domain/models/contact-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'profile-info';
  dataSourseService: DataSourseService;
  contactPageData: ContactModel;
  constructor(dataSourseService: DataSourseService){
    this.dataSourseService = dataSourseService;
  }
  ngOnInit(): void {
    this.dataSourseService.getContactPageData().then(data => {
      data.contactTypes = data.contactTypes.filter(f =>f.isActive === true && f.type.toLowerCase()==='website');
      this.contactPageData = data;
    })
  }
 
}
