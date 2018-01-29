import { Component, OnChanges } from '@angular/core';
import {LoginService} from '../../login-service.service'
import {AuthenticationService} from "../../authentication/authentication.service";
import { RouterOutlet, ROUTER_CONFIGURATION} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {

  constructor(private _loginService:LoginService,private _authService:AuthenticationService) { }

  ngOnChanges() {
  }
  signOut(){
    debugger;
    this._loginService.logOut(this._authService.getUserEmail()).subscribe((res:any)=>{
      if(res.status=="ok"){
        this._authService.loggedOut();
      }
    },error=>{
      throw new Error(error);
    })
  }
}
