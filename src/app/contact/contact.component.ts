import { Component, OnInit } from '@angular/core';
import { DataSourseService } from '../domain/services/data-sourse.service';
import { ContactModel } from '../domain/models/contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  dataSourseService: DataSourseService;
  contactPageData: ContactModel;
  pageName = "contacts";
  isAdmin = false;
  constructor(dataSourseService:DataSourseService) { 
    this.dataSourseService = dataSourseService;
  }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem("isAdmin") && localStorage.getItem("isAdmin")=="true"?true:false;


    this.dataSourseService.getContactPageData().then(data => {
      data.contactTypes = data.contactTypes.filter(f =>f.isActive === true);
      this.contactPageData = data;
    })
  }
  onupdate(eventData: any){
    this.contactPageData = eventData;
  }
}
