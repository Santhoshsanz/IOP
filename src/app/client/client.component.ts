import { Component, OnInit } from '@angular/core';
declare let jQuery:any;
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript('./assets/javascripts/custom/client-init.js', function(){
    });
    console.log("Call Init on Clint ");
    if (jQuery('.re-active-sensor-tab').length) {
      debugger;   
      jQuery('.re-active-sensor-tab').each(function() {
          var activeValueData = jQuery(this).data("active-value");
          var activeValue = 100 - activeValueData + 2;
          jQuery(this).append('<div class="re-inactive-sensor-tab"></div>');
          jQuery(this).append('<div class="re-active-sensor-knob text-center"  data-tooltip="' + activeValueData + '% change in alerts over last 1 month"><span class="percent-value">' + activeValueData + '<span class="percent">%</span></span></div>');
          jQuery(this).find('.re-inactive-sensor-tab').animate({
              width: activeValue + "%"
          }, 1300);
          jQuery(this).find('.re-active-sensor-knob').animate({
              left: activeValueData + "%"
          }, 1300);
      });
  }
  }
  ngAfterViewInit(){
    console.log("After Vew Init Client")
    jQuery.getScript('./assets/javascripts/custom/client-init.js', function(){
    });    if (jQuery('.re-active-sensor-tab').length) {
      debugger;   
      jQuery('.re-active-sensor-tab').each(function() {
          var activeValueData = jQuery(this).data("active-value");
          var activeValue = 100 - activeValueData + 2;
          jQuery(this).append('<div class="re-inactive-sensor-tab"></div>');
          jQuery(this).append('<div class="re-active-sensor-knob text-center"  data-tooltip="' + activeValueData + '% change in alerts over last 1 month"><span class="percent-value">' + activeValueData + '<span class="percent">%</span></span></div>');
          jQuery(this).find('.re-inactive-sensor-tab').animate({
              width: activeValue + "%"
          }, 1300);
          jQuery(this).find('.re-active-sensor-knob').animate({
              left: activeValueData + "%"
          }, 1300);
      });
  }
}
}
