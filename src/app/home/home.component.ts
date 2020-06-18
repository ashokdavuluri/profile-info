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

  constructor(dataSourseService: DataSourseService) {
    this.dataSourseService = dataSourseService;
   }

  ngOnInit(): void {
    this.dataSourseService.getProfilePageData().then(data => {
      this.profileData = data;
      this.pickRandomImage();
    })
  }


  private pickRandomImage() {
    let radomNum = Math.floor(Math.random() * this.profileData.numberOfProfileImages);
    radomNum = radomNum == 0 ? 1 : radomNum;
    this.imagePath = '../../assets/images/profile' + radomNum.toString() + '.jpeg';
  }
}
