import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { ClientServiceService } from '../../client-service.service';
import { apiData } from '../../common';
import { RouterModule, Routes, Router } from '@angular/router';
import{CommonDataService} from '../../common-data.service'
import {HttpHeaders} from "@angular/common/http"
@Component({
  selector: 'app-view-sensor',
  templateUrl: './view-sensor.component.html'
})
export class SensorViewComponent implements OnInit {
  model: any;
  newSensor:any;
  constructor(private _http: HttpClientModule, private clientService: ClientServiceService, private router: Router,private _commonDataService:CommonDataService) { }
  ngOnInit() {
    this.getAllSensors();
    this.getNewSensors();
  }
  getAllSensors() {
    let headers=new HttpHeaders();
    this._commonDataService.getData(apiData.url+apiData.sensor,headers).subscribe((res: any) => {
      this.model = res.sensorsInfo;
    });
  }
  deleteSensor(id) {
    let headers=new HttpHeaders();
    if (confirm("Are you sure to delete " + name)) {
      let url=apiData.url+apiData.sensor;
      //console.log(url);
      this._commonDataService.deleteData(url,id).subscribe((res: any) => {
        this.getAllSensors();
      })
      //console.log(id);
    }
  }
  addSensor() {
    this.router.navigate(['./AddSensor/Add']);
  }
  editSensor(id) {
    this.router.navigate(['./AddSensor/Edit/' + id]);
  }
  getNewSensors(){
    let headers=new HttpHeaders();
    this._commonDataService.getData(apiData.url+"sensor/new/7a8b979c-9a13-423e-abd6-0f22cea9820c",headers)
    .subscribe((res:any)=>{
      this.newSensor=res.newlyAddedSensor;
    })
  }
  rejectSensor(id){
    let headers=new HttpHeaders();
    this._commonDataService.deleteData(apiData.url+"sensor/reject/",id).subscribe((res:any)=>{
        this.getNewSensors();
    })
  }
}