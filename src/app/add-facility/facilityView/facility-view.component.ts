import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { FacilityService } from '../../facility.service';
import { RouterModule, Routes, Router } from '@angular/router'

@Component({
  selector: 'app-add-facility',
  templateUrl: './facility-view.component.html'
})
export class FacilityViewComponent implements OnInit {
  model: any;
  constructor(private _http: HttpClientModule, private facilityService: FacilityService, private router: Router) { }
  ngOnInit() {
    //console.log("Add Client Init")
    this.getAllFacilities();
  }
  getAllFacilities() {
    //console.log("called")
    this.facilityService.getAllFacility().subscribe((res: any) => {
      this.model = res.facilitiesInfo;
      //console.log(this.model)
    });
    //console.log(this.model);
  }
  deleteFacility(id) {
    if (confirm("Are you sure to delete ")) {
      this.facilityService.deleteFacility(id).subscribe((res: any) => {
        this.getAllFacilities();
      })
      //console.log(id);
    }
  }
  addFacility() {
    this.router.navigate(['./AddFacility/Add']);
  }
  editFacility(id) {
    this.router.navigate(['./AddFacility/Edit/' + id]);
  }
}