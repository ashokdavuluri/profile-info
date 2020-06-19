import { Component, OnInit } from '@angular/core';
import { VariableData } from '../domain/variable-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  emailId: string;
  IsValidEmail: boolean = true;
  isSuccess: boolean;
  emailList: string[];
  isAdmin: any;
  constructor() { }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem("isAdmin")?true:false;
  }

  onSubscribe(){
    if(this.isValidMailFormat(this.emailId)){
      VariableData.addEmail(this.emailId);
      this.emailId = null;
      this.isSuccess = true;
    }
  }

  getAllEmailsList(){
    if(this.isAdmin){
      this.emailList = VariableData.getEmailList();
    }
  }
 isValidMailFormat(email: string): boolean{
    this.IsValidEmail = true;
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (email != "" && !EMAIL_REGEXP.test(email)) {
        this.IsValidEmail = false;
        return false;
    }
    return true;
}

}
