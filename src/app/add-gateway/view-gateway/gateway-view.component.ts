import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { ClientServiceService } from '../../client-service.service';
import { apiData } from '../../common';
import { RouterModule, Routes, Router } from '@angular/router';
import{CommonDataService} from '../../common-data.service'
import {HttpHeaders} from "@angular/common/http"
@Component({
  selector: 'app-view-gateway',
  templateUrl: './gateway-view.component.html'
})
export class GatewayViewComponent implements OnInit {
  model: any;
  constructor(private _http: HttpClientModule, private clientService: ClientServiceService, private router: Router,private _commonDataService:CommonDataService) { }
  ngOnInit() {
    this.getAllGateways();
  }
  getAllGateways() {
    let headers=new HttpHeaders();
    this._commonDataService.getData(apiData.url+apiData.gateway,headers).subscribe((res: any) => {
      this.model = res.gatewaysInfo;
    });
  }
  deleteGateway(id) {
    let headers=new HttpHeaders();
    if (confirm("Are you sure to delete " + name)) {
      this._commonDataService.deleteData(apiData.url+apiData.gateway,id).subscribe((res: any) => {
        this.getAllGateways();
      })
      console.log(id);
    }
  }
  addGateway() {
    this.router.navigate(['./AddGateway/Add']);
  }
  editGateway(id) {
    this.router.navigate(['./AddGateway/Edit/' + id]);
  }
}