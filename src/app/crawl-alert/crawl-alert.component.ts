import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Data } from '../model/alerts';
declare let jQuery:any;
@Component({
  selector: 'app-crawl-alert',
  templateUrl: './crawl-alert.component.html',
  styleUrls: ['./crawl-alert.component.css']
})
export class CrawlAlertComponent implements OnInit {
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
    jQuery.getScript('./assets/javascripts/custom/alertC-init.js', function(){
    });
    jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
    this.sub = this.route.params.subscribe(params => {
      this.clientId = params['client']; 
      this.facilityId=params['facility'];
      this.alertId=params['alert'];
   });
   this.alert=this.data.getALertsI(this.clientId,this.facilityId,this.alertId);
   console.log(this.alert)
  }
  ngAfterViewInit(){
    console.log("After Vew Init")
    //jQuery.getScript('./assets/javascripts/custom/alertC-init.js', function(){
    //});
   jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
   jQuery('.pocessing-steps-flow').each(function() {
    jQuery(this).find('.step-circle').each(function() {
      jQuery(this).height(jQuery(this).width());
    });
    jQuery(this).find('.steps-seperator-wrap').each(function() {
      jQuery(this).height(jQuery('.step-circle').height());
    });
});
}
}
