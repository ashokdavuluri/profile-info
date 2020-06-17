import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  imagePath: string;

  constructor() { }

  ngOnInit(): void {
    let radomNum = Math.floor(Math.random() * 5)
    radomNum = radomNum==0?1:radomNum;
    this.imagePath = '../../assets/images/profile'+radomNum.toString()+'.jpeg'
  }

}
