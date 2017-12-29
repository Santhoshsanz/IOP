import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
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
    private data:DataServiceService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
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
    jQuery.getScript('./assets/javascripts/custom/singleClient-init.js', function(){
    });
    jQuery(this.elRef.nativeElement).find('.count-to').each(function() {
      jQuery(this).countTo({
          speed: 5000
      });
  });
  }
}
