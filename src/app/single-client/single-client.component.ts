import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { LatestAlerts } from '../model/latestAlerts';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { Ng2HighchartsModule } from 'ng2-highcharts';
declare let jQuery:any;
@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent implements OnInit {
  id: string;
  private sub: any;
  clients :any;
  alerts:any;

  constructor(private elRef:ElementRef,
    private route: ActivatedRoute,
    private data:DataServiceService,
    private AmCharts: AmChartsService) { }
    private chart: any;
    private optionsPest12:object;
    private optionsPest30:object;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.optionsPest12 = this.data.getPest12ChartData()
      this.optionsPest30 = this.data.getPest30ChartData();
   });
    jQuery(this.elRef.nativeElement).find('.count-to').each(function() {
      jQuery(this).countTo({
          speed: 5000
      });
  });
  this.clients=this.data.getClients(this.id)
  this.alerts=this.data.getAlertsF(this.id)
  console.log(this.clients)
  console.log(this.alerts)
  }
  ngAfterViewInit(){
    this.chart = this.AmCharts.makeChart("single-customer-maps", this.data.getClientMapData(this.id));
    console.log("Done Chartt");
  
    // jQuery.getScript('./assets/javascripts/custom/singleClient-init.js', function(){
     //});
    jQuery(this.elRef.nativeElement).find('.count-to').each(function() {
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
}
