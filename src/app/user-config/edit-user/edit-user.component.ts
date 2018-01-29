import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { ActivatedRoute} from '@angular/router';
import {HttpHeaders} from "@angular/common/http";
import {Location} from "@angular/common"
import {apiData} from '../../common';
import { DISABLED } from '@angular/forms/src/model';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user:FormGroup;
disabbleBtn:boolean;
  constructor(private formBuilder:FormBuilder,private _commonDataService:CommonDataService,private _location:Location,
    private _route: ActivatedRoute) { }
    id:any=null;
  ngOnInit() {
    this.user = new FormGroup({
      firstName: new FormControl("", [Validators.required,Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      lastName: new FormControl("", [Validators.required,Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9A-Z.@]{2,30}$")]),
      phoneNo:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10,10}$")]),
      role:new FormControl("",Validators.required)
    });
    this._route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.editUser(this.id);
      }
    })
  }
  onSubmit(user){
    let headers=new HttpHeaders();
    // let temp=this.user.getRawValue();
    // temp.phoneNo=parseInt(temp.phoneNo);
    // this.user.setValue(temp);
    this._commonDataService.postData(user.value,apiData.url+apiData.user,headers).subscribe((res:any)=>{
      if(res.status=="ok"){
          this._location.back();
      }
      else{
          //console.log("Failed in Submit User");
      }
    },error=>{
      throw new Error(JSON.stringify(error));
    })
  }
  editUser(id){
    let headers=new HttpHeaders();
    let temp=this.user.getRawValue();
    this._commonDataService.getData(apiData.url+apiData.user+"/"+id,headers).subscribe((res:any)=>{
      if(res.status=="ok"){
          temp.firstName=res.user.firstName;
          temp.lastName=res.user.lastName;
          temp.email=res.user.email;
          //this.user.controls.email.disable();
          temp.phoneNo=res.user.phoneNo;
          temp.role=res.user.role;
          this.user.setValue(temp);
      }
      else{
          //console.log("Failed in Submit User");
      }
    },error=>{
      throw new Error(JSON.stringify(error));
    })
  }
}
