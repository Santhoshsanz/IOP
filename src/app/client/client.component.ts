import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import{CommonDataService} from "../common-data.service";
import{apiData} from "../common";
import {HttpHeaders} from "@angular/common/http"

declare let jQuery: any;
@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    clientsData: object;
    constructor(private data: DataServiceService,private _commonDataService:CommonDataService) { }
    ngOnInit() {
        let headers=new HttpHeaders();
        this._commonDataService.getData(apiData.url+apiData.client,headers).subscribe((res:any)=>{
            if(res.status=="ok"){
                    this.clientsData=res.clientsInfo;
                    //console.log(this.clientsData)
            }else{
                throw new Error("getClients Failed")
            }
        },error=>{
            throw new Error(JSON.stringify(error))
        })
        this.initJs();
    }
    ngAfterViewInit() {
        //console.log("After Vew Init Client")
        jQuery.getScript('./assets/javascripts/custom/client-init.js', function () {
        }); if (jQuery('.re-active-sensor-tab').length) {
            jQuery('.re-active-sensor-tab').each(function () {
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
    initJs(){
        jQuery.getScript('./assets/javascripts/custom/client-init.js', function () {
        });
        //console.log("Call Init on Clint ");
        if (jQuery('.re-active-sensor-tab').length) {
            jQuery('.re-active-sensor-tab').each(function () {
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
