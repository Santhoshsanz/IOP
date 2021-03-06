import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { LatestAlerts } from '../model/latestAlerts';
import { CommonDataService } from '../common-data.service';
import {apiData} from '../common'
import { HttpHeaders } from '@angular/common/http';
declare let jQuery: any;

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  clientId: string;
  facilityId: string;
  private sub: any;
  clients: any;
  facility: any;
  alerts: any;
  bg: any;
  constructor(private elRef: ElementRef,
    private route: ActivatedRoute,
    private data: DataServiceService,
    private router: Router,
    private _commonDataService: CommonDataService) { }

  ngOnInit() {
    //console.log("Init")
    this.sub = this.route.params.subscribe(params => {
      this.clientId = params['client'];
      this.facilityId = params['facility'];
    });
    let headers=new HttpHeaders();
   this._commonDataService.getData(apiData.url+apiData.client+this.clientId,headers)
    .subscribe((res:any)=>{
      if(res.status=="ok"){
        this.clients = res.clientInfo;
        console.log("clients")
        console.log(this.clients)
      }
    });
    this._commonDataService.getData(apiData.url+apiData.facility+this.facilityId,headers)
    .subscribe((res:any)=>{
      if(res.status=="ok"){
        this.facility  = res.facilityInfo;
        console.log("facility"+this.facility)
        console.log(this.facility)
        this.alerts = this.facility.eventActvities==null?[]:this.facility.eventActvities;
      }
    });
   
    //console.log(this.facility[0].IaqIndex)

    //
    // switch (this.facility[0].IaqIndex / 10) {
    //   case 1: {
    //     this.bg = "bg-gradientPurple"
    //     break;
    //   }
    //   case 2: {
    //     this.bg = "bg-gradientPurple"
    //     break;
    //   }
    //   case 3: {
    //     this.bg = "bg-gradientPurple"
    //     break;
    //   }
    //   case 4: {
    //     this.bg = "bg-gradientDRed"
    //     break;
    //   }
    //   case 5: {
    //     this.bg = "bg-gradientDRed"
    //     break;
    //   }
    //   case 6: {
    //     this.bg = "bg-gradientRed"
    //     break;
    //   }
    //   case 7: {
    //     this.bg = "bg-gradientDYellow"
    //     break;
    //   }
    //   case 8: {
    //     this.bg = "bg-gradientYellow "
    //     break;
    //   }
    //   case 9: {
    //     this.bg = "bg-gradientGreen"
    //     break;
    //   }

    // }


  }

  ngAfterViewInit() {
    //console.log("After Vew Init Facility")
    jQuery.getScript('./assets/javascripts/custom/facility-init.js', function () {
    });
    jQuery(this.elRef.nativeElement).find('.count-to').each(function () {
      jQuery(this).countTo({
        speed: 5000
      });
    });
  }
  facilityChange() {
    this.sub = this.route.params.subscribe(params => {
      this.clientId = params['client'];
      this.facilityId = params['facility'];
    });
    //console.log(this.facilityId);
    //  this.clients=this.data.getClients(this.clientId);
    //  this.facility=this.data.getFacilty(this.clientId,this.facilityId);
  }
  ngOnChanges() {
    //console.log("onChange")
  }
}
