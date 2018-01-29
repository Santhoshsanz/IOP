import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Login} from './model/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {apiData} from "./common";
@Injectable()
export class LoginService {
  constructor(private _route:Router,private _http:HttpClient,) { }
  showLogin(url){
    debugger;
    this._route.navigate(['./',url]);
  }
  login(loginVal:any){
    return this._http.post(apiData.url+apiData.login,loginVal);
  }
  logOut(userEmail:any){
    return this._http.get(apiData.url+apiData.logout+"/"+userEmail+"/");
  }
}
