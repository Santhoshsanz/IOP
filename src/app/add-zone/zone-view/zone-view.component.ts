import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http'
import { Location } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'
@Component({
  selector: 'app-add-client',
  templateUrl: './zone-view.component.html'
})
export class ZoneViewComponent implements OnInit {
  model: any;
  constructor(private _commonDataService: CommonDataService, private _location: Location, private router: Router) { }
  ngOnInit() {
    this.getAllZones();
  }
  addZone() {
    this.router.navigate(['./AddZone/Add']);
  }
  editZone(id) {
    this.router.navigate(['./AddZone/Edit/' + id]);
  }
  deleteZone(id) {
    if (confirm("Are you sure to delete " )) {
      this._commonDataService.deleteData(apiData.url + apiData.zone, id).subscribe((res:any) => {
        if(res.status=="ok"){
          this.getAllZones();
        }else{
  
        }
        
      })
    }
  }
  getAllZones() {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    this._commonDataService.getData(apiData.url + apiData.zone, header).subscribe((res: any) => {
      if(res.status=="ok"){
         this.model = res.zonesInfo;
      }else{

      }
     
    })
  }
}
