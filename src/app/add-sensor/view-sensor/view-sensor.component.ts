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
      console.log(url);
      this._commonDataService.deleteData(url,id).subscribe((res: any) => {
        this.getAllSensors();
      })
      console.log(id);
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
    this._commonDataService.getData("http://10.190.111.185:8080/api/v1/sensor/new/09499b82-0b8e-48c7-b0db-50bfab3ee5dc",headers)
    .subscribe((res:any)=>{
      this.newSensor=res.newlyAddedSensor;
    })
  }
  rejectSensor(id){
    let headers=new HttpHeaders();
    this._commonDataService.deleteData("http://10.190.111.185:8080/api/v1/sensor/reject/",id).subscribe((res:any)=>{
        this.getNewSensors();
    })
  }
}