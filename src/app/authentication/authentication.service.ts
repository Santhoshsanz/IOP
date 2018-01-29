import { Injectable } from '@angular/core';
import{Router} from '@angular/router'
@Injectable()
export class AuthenticationService {
  private user:any={};
  constructor(private _route:Router) { 
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.role = "";
    this.user.userId = "";
  }
  startSession(user: any) {
    this.setUser(user)
  }
  endSession(user:any) {
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.role = "";
    this.user.userId = "";
  }
  private setUser(user: any) {
    debugger;
    this.user.email = user.email;
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.role = user.role;
    this.user.userId = user.userId;
    this._route.navigate(['./',""]);
  }
  getRole():string{
    return this.user.role;
  }
  isLoggedIn():boolean{
    console.log("User Email");
    console.log(this.user.email)
    if(this.user.email=="")
    return false;
    else {
      console.log("Allow to Mission")
      return true;
    }
  }
  getUserEmail():string{
    return this.user.email;
  }
  loggedOut(){
    this.user.email = "";
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.role = "";
    this.user.userId = "";
    this._route.navigate(['./',"login"]);
  }
}
