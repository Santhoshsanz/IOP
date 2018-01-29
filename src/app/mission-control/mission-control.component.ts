import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { Events } from '../../app/model/alertsEvents';
import { CommonDataService } from '../common-data.service'
import { HttpHeaders } from '@angular/common/http';
import { apiData, images, pestType } from '../common';
declare let jQuery: any;
import { LatestAlerts } from '../model/latestAlerts';
@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {
  alerts: any;
  image = images;
  pest = pestType;
  optionsPest12: object;
  optionsPest30: object;
  optionsGuage1: object;
  optionsGuage2: object;
  optionsGuage3: object;
  latestAlerts = "From Mission";
  facilityData: any = [];
  //  alerts=this.sample.map(function(j,i){
  //   j.map(function(e,x){ return e.Alerts})
  //    });;
  constructor(private elRef: ElementRef,
    private data: DataServiceService,
    private AmCharts: AmChartsService,
    private _commonDataService: CommonDataService) {
    this.optionsPest12 = this.data.getPest12ChartData()
    this.optionsPest30 = this.data.getPest30ChartData();
    this.optionsGuage1 = this.data.getGuageData(66, "%", "ACTIVE EVENTS", "ASSIGNED");
    this.optionsGuage2 = this.data.getGuageData(41, "Hrs", "AVERAGE TIME ", "TO CLOSE AN EVENT");
    this.optionsGuage3 = this.data.getGuageData(15, "Hrs", "AVERAGE RESPONSE", " TIME FOR AN EVENT");

  }
  private chart: any;
  ngOnInit() {
    //console.log("Init Mission");
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
    let self = this;
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.facility, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        let data = [];
        this.facilityData = res.facilitiesInfo;

        res.facilitiesInfo.map(function (i, j) {
          let self = i;
          if (i.eventActivities != null) {
            if (i.eventActivities.length > 0) {
              return i.eventActivities.map(function (t, y) {
                //console.log(t.activity)
                if (t.activity != "Closed") {
                  t.facilityName = self.name;
                  data.push(t)
                }
              })
            }
          }
        })
        data.map(function (e, j) {
          var x = new Date(e.lastUpdated)
          e.lastUpdated = x.toLocaleDateString() + " " + x.toLocaleTimeString();
          switch (e.sensor[0].type) {
            case "Rodent":
              e.sensor[0].customImage = self.pest.Rodent;
              break;
          }
        })
        // //console.log("Alert Data")
        // //console.log(data)
        this.alerts = data;
      }
      else {
        this.facilityData = []
      }
    })
  }
  ngAfterViewInit() {
    //console.log("After Vew Init")
  }
  //initChart(facilityData) {

  //}
}
