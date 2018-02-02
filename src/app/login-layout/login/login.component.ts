import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { LoginService } from "../../login-service.service";
import {Login } from "../../model/login";
import { Router } from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService,
    private _router: Router,private _authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)

    })
  }
  onSubmit(login:any) {
    this._loginService.login(login).subscribe((res:any)=>{
      if(res.status=="ok"){
        this._authenticationService.startSession(res.user);
      }
    },error=>{
      throw new Error(JSON.stringify(error))
    })
  }
}
