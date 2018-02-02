import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { RouterModule, Routes, Router } from '@angular/router'
import { apiData } from '../../common';

@Component({
  selector: 'app-add-facility',
  templateUrl: './facility-view.component.html'
})
export class FacilityViewComponent implements OnInit {
  model: any;
  constructor(private _http: HttpClientModule, private _commonDataService: CommonDataService, private router: Router) { }
  ngOnInit() {
    //console.log("Add Client Init")
    this.getAllFacilities();
  }
  getAllFacilities() {
    let headers = new HttpHeaders()
    //console.log("called")
    this._commonDataService.getData(apiData.url + apiData.facility, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this.model = res.facilitiesInfo;
      }
    });
    //console.log(this.model);
  }
  deleteFacility(id) {
    if (confirm("Are you sure to delete ")) {
      this._commonDataService.deleteData(apiData.url, id).subscribe((res: any) => {
        if (res.status == "ok") {
          this.getAllFacilities();
        }
      })
    }
  }
  addFacility() {
    this.router.navigate(['./AddFacility/Add']);
  }
  editFacility(id) {
    this.router.navigate(['./AddFacility/Edit/' + id]);
  }
}