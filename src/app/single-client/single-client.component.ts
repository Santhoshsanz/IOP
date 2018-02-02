import { Component, OnInit, OnChanges,SimpleChange } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { CommonDataService } from '../common-data.service'
import { LatestAlerts } from '../model/latestAlerts';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { HttpHeaders } from '@angular/common/http';
import { apiData } from '../common'
declare let jQuery: any;
@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent implements OnInit {
  id: string;
  private sub: any;
  client: any=null;
  alerts: any = null;
  allClients: any=null;
  facilityData:any=[];
  constructor(private elRef: ElementRef,
    private route: ActivatedRoute,
    private data: DataServiceService,
    private AmCharts: AmChartsService,
    private _commonDataService: CommonDataService) { }
  private chart: any;
  private optionsPest12: object;
  private optionsPest30: object;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
      this.optionsPest12 = this.data.getPest12ChartData()
      this.optionsPest30 = this.data.getPest30ChartData();
    });
    this.initData();
    // jQuery(this.elRef.nativeElement).find('.count-to').each(function () {
    //   jQuery(this).countTo({
    //     speed: 5000
    //   });
    // });
  }
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("single-customer-maps", this.data.getClientMapData(this.id));
    //console.log("Done Chartt");

    // jQuery.getScript('./assets/javascripts/custom/singleClient-init.js', function(){
    //});
    jQuery(this.elRef.nativeElement).find('.count-to').each(function () {
      jQuery(this).countTo({
        speed: 5000
      });
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
  initData() {
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.client + this.id, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this.client = res.clientInfo;
        //console.log(this.client);
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    })
    this._commonDataService.getData(apiData.url + apiData.client, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this.allClients = res.clientsInfo;
        //console.log(this.allClients);
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    })
    this._commonDataService.getData(apiData.url + apiData.facility, headers).subscribe((res: any) => {
      let self = this;
      if (res.status == "ok") {
        let temp = res.facilitiesInfo;
        this.alerts = temp.filter(function (a, b) {
          if (a.client.id == self.id) {
            return a;
          }
        });
        this.facilityData=this.alerts;
        this.alerts = this.alerts[0].eventActivities;
        //console.log(this.alerts)
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    })
  }
}
