import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { LoginService } from "../../login-service.service";
import {Login } from "../../model/login";
import { Router } from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication.service"
@Component({
  selector: 'app-login-forgot',
  templateUrl: './login-forgot.component.html',
  styleUrls: ['./login-forgot.component.css']
})
export class LoginForgotComponent implements OnInit {

  constructor() { }
  loginForgotForm:FormGroup
  loginForgot:Login
  ngOnInit() {
    this.loginForgotForm = new FormGroup({
      userEmail: new FormControl(this.loginForgot.email,Validators.required),
      password: new FormControl(this.loginForgot.password,Validators.required),
      passwordMatch: new FormControl(this.loginForgot.passwordMatch,Validators.required)
    })
  }

}
