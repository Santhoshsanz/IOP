import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Data } from '../model/alerts';
declare let jQuery:any;

@Component({
  selector: 'app-fly-alert',
  templateUrl: './fly-alert.component.html',
  styleUrls: ['./fly-alert.component.css']
})
export class FlyAlertComponent implements OnInit {
  clientId: string;
  facilityId:string;
  alertId:string;
  private sub: any;
  clients:any;
  facility:any;
  alert:any;
  constructor(private elRef:ElementRef,
    private route: ActivatedRoute,
    private data:DataServiceService) { }
  
    ngOnInit() {
      jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
      jQuery.getScript('./assets/javascripts/custom/alertF-Init.js', function(){
      });
      this.sub = this.route.params.subscribe(params => {
        this.clientId = params['client']; 
        this.facilityId=params['facility'];
        this.alertId=params['alert'];
     });
     this.alert=this.data.getALertsI(this.clientId,this.facilityId,this.alertId);
     console.log(this.alert)
    }
    ngAfterViewInit(){
      jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
      console.log("After Vew Init Facility")
      jQuery.getScript('./assets/javascripts/custom/alertF-Init.js', function(){
      });
  }
}
