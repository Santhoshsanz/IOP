import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { LoginService } from "../login-service.service";
import { AuthenticationService } from "./authentication.service"

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _authService: AuthenticationService,private _route:Router) {
  }
  canActivate() {
    console.log("Checking Can Activate")
    if (!this._authService.isLoggedIn()) {
      this._loginService.showLogin("login");
      return false;
    }
    return true;
  }
}
@Injectable()
export class Admin implements CanActivate {
  constructor(private _loginService: LoginService, private _authService: AuthenticationService) {
  }
  canActivate() {
    if (!this._authService.isLoggedIn()) {
     
      
    }
    else if (!(this._authService.getRole() == "Admin")) {
      return false;
    }
    return true;
  }
}
@Injectable()
export class FieldTech implements CanActivate {
  constructor(private _loginService: LoginService, private _authService: AuthenticationService) {
  }
  canActivate() {
    if (!this._authService.isLoggedIn()) {
      this._loginService.showLogin("../login");
      return false;
    }
    else if (!(this._authService.getRole() == "FieldTech")) {
      return false;
    }
    return true;
  }
}