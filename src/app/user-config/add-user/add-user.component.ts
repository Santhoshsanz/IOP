import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonDataService } from '../../common-data.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  model: any;
  constructor(private _http: HttpClientModule, private _commonDataService: CommonDataService, private router: Router) { }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    //console.log("called")
    let headers=new HttpHeaders();
    this._commonDataService.getData(apiData.url+apiData.user,headers).subscribe((res: any) => {
      if(res.status=="ok"){
        this.model = res.users.filter(function(e,x){
            if(e.status!=0)
            return e;
        });
        //console.log(this.model)
      }
      else{
        throw new Error("getAllUsers Failed");
      }
    },error=>{
      throw new Error(JSON.stringify(error))
    })
  }
  deleteUser(id) {
    if (confirm("Are you sure to delete " + name)) {
      this._commonDataService.deleteData(apiData.url+apiData.user,id).subscribe((res: any) => {
        debugger;
        if(res.status=="ok"){
          this.getAllUsers();   
        } else{
          throw new Error("deleteUser Failed");
        }
      },error=>{
        debugger;
        throw new Error(JSON.stringify(error))
    })
      //console.log(id);
    }
  }
  addUser() {
    this.router.navigate(['./AddUser/Add']);
  }
  editUser(id) {
    this.router.navigate(['./AddUser/Edit/' + id]);
  }
}

