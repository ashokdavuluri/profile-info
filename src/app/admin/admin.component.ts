import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup ;
  invalidForm: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
   this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'passCode': new FormControl(null, [Validators.required])
    })
  }

  submit(){
    this.invalidForm = false;
    if(this.loginForm.valid){
      if(this.loginForm.controls.userName.value === "ashok" 
      && this.loginForm.controls.passCode.value === "4004"){
        localStorage.setItem("isAdmin","true");
        this.router.navigateByUrl('home');
      }
    }
    else{
      this.invalidForm = true;
    }
  }

}
