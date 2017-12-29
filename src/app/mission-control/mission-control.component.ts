import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import {DataServiceService} from '../data-service.service'
declare let jQuery:any;
import {LatestAlerts} from '../model/latestAlerts'
@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {
 alerts:any;
//  alerts=this.sample.map(function(j,i){
//   j.map(function(e,x){ return e.Alerts})
//    });;
  constructor(private elRef:ElementRef,private data:DataServiceService) { }

  ngOnInit() {
    console.log("Init Mission");
    jQuery.getScript('./assets/javascripts/custom/init.js', function(){
    });
this.getData();
   // jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
   // jQuery.getScript('../assets/javascripts/custom/main.js')
   jQuery(this.elRef.nativeElement).find('.count-to').each(function() {
    jQuery(this).countTo({
        speed: 5000
    });
});
  }
  getData(){
    this.alerts=this.data.getALerts().slice(0,10);
  this.alerts=this.alerts;
  console.log(this.alerts);
  }
  ngAfterViewInit(){
    console.log("After Vew Init")
    jQuery.getScript('../assets/javascripts/custom/ammap-init.js', function(){
    });
    jQuery.getScript('./assets/javascripts/custom/init.js', function(){
      console.log("Done")
    });
    var contentOneH = jQuery('.content-pane-left').outerHeight();
    var contentTwoH = jQuery('.content-pane-right').outerHeight();
    if (contentOneH > contentTwoH) {
      jQuery('.content-pane-left').height(contentTwoH);
      jQuery('.content-pane-left').addClass('mCustomScrollbar');
    } else {
      jQuery('.content-pane-right').height(contentOneH);
      jQuery('.content-pane-right').addClass('mCustomScrollbar');
    }
    
    
    jQuery('.add-scroll').mCustomScrollbar({
        "autoHideScrollbar": true
    });
}
}
