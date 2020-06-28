import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataSourseService } from './domain/services/data-sourse.service';
import { ContactModel } from './domain/models/contact-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'profile-info';
  dataSourseService: DataSourseService;
  contactPageData: ContactModel;
  isAdmin: boolean;
  constructor(dataSourseService: DataSourseService){
    this.dataSourseService = dataSourseService;
  }
  ngAfterViewInit(): void {
    $(document).ready(function(){ 

      $('.nav-item').on("click", function(){
      
      $('.nav-item').removeClass('active');
      
      $(this).addClass('active');
      });
      });
  }
  ngOnInit(): void {
    this.isAdmin = localStorage.getItem("isAdmin") && localStorage.getItem("isAdmin")=="true"?true:false;

    this.dataSourseService.getContactPageData().then(data => {
      data.contactTypes = data.contactTypes.filter(f =>f.isActive === true && f.type.toLowerCase()==='website');
      this.contactPageData = data;
    })
  }
 
}
