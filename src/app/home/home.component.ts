import { Component, OnInit } from '@angular/core';
import { DataSourseService } from '../domain/services/data-sourse.service';
import { ProfileModel } from '../domain/models/profile-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  imagePath: string;
  dataSourseService: DataSourseService;
  profileData: ProfileModel;
  pageName = "profile";
  isAdmin: boolean;

  constructor(dataSourseService: DataSourseService) {
    this.dataSourseService = dataSourseService;
   }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem("isAdmin") && localStorage.getItem("isAdmin")=="true"?true:false;

    this.dataSourseService.getProfilePageData().then(data => {
      this.profileData = data;
      this.pickRandomImage();
    })
  }

  onupdate(eventData: any){
    this.profileData = eventData;
  }

  private pickRandomImage() {
    let radomNum = Math.floor(Math.random() * this.profileData.numberOfProfileImages);
    radomNum = radomNum == 0 ? 1 : radomNum;
    this.imagePath = '../../assets/images/profile' + radomNum.toString() + '.jpeg';
  }
}
