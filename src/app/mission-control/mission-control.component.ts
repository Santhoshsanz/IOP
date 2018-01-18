import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { Events } from '../../app/model/alertsEvents';
import {CommonDataService} from '../common-data.service'
import {HttpHeaders } from '@angular/common/http';
import{apiData,images, pestType} from '../common';
declare let jQuery: any;
import { LatestAlerts } from '../model/latestAlerts'
@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {
  alerts: any;
  image=images;
  pest=pestType;
  optionsPest12: object;
  optionsPest30: object;
  optionsGuage1: object;
  optionsGuage2: object;
  optionsGuage3: object;
  latestAlerts = "From Mission";

  //  alerts=this.sample.map(function(j,i){
  //   j.map(function(e,x){ return e.Alerts})
  //    });;
  constructor(private elRef: ElementRef,
    private data: DataServiceService,
    private AmCharts: AmChartsService,
    private _commonDataService:CommonDataService) {
    this.optionsPest12 = this.data.getPest12ChartData()
    this.optionsPest30 = this.data.getPest30ChartData();
    this.optionsGuage1 = this.data.getGuageData(66, "%", "ACTIVE EVENTS", "ASSIGNED");
    this.optionsGuage2 = this.data.getGuageData(41, "Hrs", "AVERAGE TIME ", "TO CLOSE AN EVENT");
    this.optionsGuage3 = this.data.getGuageData(15, "Hrs", "AVERAGE RESPONSE", " TIME FOR AN EVENT");

  }
  private chart: any;
  ngOnInit() {
    console.log("Init Mission");
    //Am Charts
    //this.initChart();



    //Get Alerts Data
     this.getData();
    //SVG init
    jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
    // Animate Numbers on Quick Stats
    jQuery(this.elRef.nativeElement).find('.count-to').each(function () {
      jQuery(this).countTo({
        speed: 5000
      });
    });
  }
  //Get Alerts Data
  getData() {
    let self=this;
    let headers= new HttpHeaders();
    this._commonDataService.getData(apiData.url+apiData.facility,headers).subscribe((res:any)=>{
        if(res.status=="ok"){
          let data=[];
          this.initChart(res)
         
          res.facilitiesInfo.map(function(i,j){
                  let self=i;
                  if (i.eventActivities != null) {
                    if (i.eventActivities.length > 0) {
                      return i.eventActivities.map(function(t,y){
                        console.log(t.activity)
                        //if(t.activity!="Closed"){ 
                            t.facilityName=self.name;
                            data.push(t)
                        //}
                      })
                    }
                  }
          })
          data.map(function(e,j){
            var x=new Date(e.lastUpdated)
            e.lastUpdated=x.toLocaleDateString()+" "+ x.toLocaleTimeString();
            switch(e.sensor[0].type){
              case "Rodent":
              e.sensor[0].customImage=self.pest.Rodent;
              break;
            }
           })
          // console.log("Alert Data")
         // console.log(data)
          this.alerts= data;
        }
        else{
          this.initChart([]);
        }
    })  
  }
  ngAfterViewInit() {
    console.log("After Vew Init")
  }
  initChart(facilityData) {
    // this.data.getMapData().subscribe((res:any)=>{
    console.log("Inside")
    let intermediate = [];
    let pushData: any = {};
    if(facilityData.facilitiesInfo.length>0){
      facilityData.facilitiesInfo.map(function (e, o) {
        if (e.eventActivities != null) {
          if (e.eventActivities.length > 0) {
                pushData.imageURL = "assets/images/facility-active.png";
          }
          else {
            pushData.imageURL = "assets/images/facility-inactive.png";
          }
        }
        pushData.zoomLevel = 5,
          pushData.title = e.name,
          pushData.latitude = e.address.latitude,
          pushData.longitude = e.address.longitude,
          pushData.width = 30,
          pushData.height = 30
        intermediate.push(pushData)
        pushData = {};
      })
    }
    let data = {
      "type": "map",
      "dragMap": true,
      "projection": "mercator",
      "areasSettings": {
        "autoZoom": true,
        "rollOverOutlineColor": "#595959",
        "rollOverColor": undefined,
        "selectedColor": "#595959",
        "outlineAlpha": 1,
        "outlineColor": "",
        "outlineThickness": 1,
        "color": undefined,
        "pattern": {
          "url": "../../assets/images/patterns/new-pattern.svg",
          "width": 4,
          "height": 4
        }
      },
      "imagesSettings": {
        "rollOverScale": 1.5,
        "selectedScale": 1,
      },
      "dataProvider": {
        "map": "japanLow",
        "getAreasFromMap": true,
        "images": [],
      },
      "zoomControl": {
        "panControlEnabled": false,
        "zoomControlEnabled": false,
        "homeButtonEnabled": true,
        "panStepSize": 1.5
      },
      "export": {
        "enabled": true
      },
      "listeners": [{
        "event": "rendered",
        "method": function (e) {
          var map = e.chart;
          map.initialZoomLevel = map.zoomLevel(3);
          map.initialZoomLatitude = map.zoomLatitude();
          map.initialZoomLongitude = map.zoomLongitude();
          map.zoomIn();
        }
      }],
    }
    //  data.dataProvider.images.push({
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Nestle Osaka",
    //   "latitude": 34.5547,
    //   "longitude": 135.502,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-active.png",
    //   "zoomLevel": 5,
    //   "title": "Nestle Kobe",
    //   "latitude": 34.6924,
    //   "longitude": 134.8998,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-active.png",
    //   "zoomLevel": 5,
    //   "title": "Nestle Tokyo",
    //   "latitude": 35.6772,
    //   "longitude": 139.6995,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Nestle osaka East",
    //   "latitude": 34.4922,
    //   "longitude": 135.5469,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Nestle tokyo East",
    //   "latitude": 35.7123,
    //   "longitude": 139.2155,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Hilton Tokyo Narita",
    //   "latitude": 36.1684,
    //   "longitude": 139.8592,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-active.png",
    //   "zoomLevel": 5,
    //   "title": "Hilton Tokyo",
    //   "latitude": 35.6772,
    //   "longitude": 139.3361,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Hilton Resort",
    //   "latitude": 35.1485,
    //   "longitude": 139.0941,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Hilton Osaka",
    //   "latitude": 34.7125,
    //   "longitude": 135.4507,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-active.png",
    //   "zoomLevel": 5,
    //   "title": "Hilton Nagoya",
    //   "latitude": 35.0463,
    //   "longitude": 136.6835,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Yoshinoya Okinawa North",
    //   "latitude": 26.6003,
    //   "longitude": 128.0491,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Yoshinoya Okinawa South",
    //   "latitude": 28.2218,
    //   "longitude": 129.3621,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Yoshinoya Ehime",
    //   "latitude": 33.9472,
    //   "longitude": 132.8602,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-active.png",
    //   "zoomLevel": 5,
    //   "title": "Yoshinoya InshiKawa",
    //   "latitude": 36.7116,
    //   "longitude": 136.7452,
    //   "width": 30,
    //   "height": 30
    // }, {
    //   "imageURL": "assets/images/facility-inactive.png",
    //   "zoomLevel": 5,
    //   "title": "Yoshinoya Yamanashi",
    //   "latitude": 35.6874,
    //   "longitude": 138.7184,
    //   "width": 30,
    //   "height": 30
    // })
    for (let i = 0; i < intermediate.length; i++) {
      data.dataProvider.images.push(intermediate[i]);
    }

    this.chart = this.AmCharts.makeChart("mission-control-maps", data);
    //  })
  }
}
