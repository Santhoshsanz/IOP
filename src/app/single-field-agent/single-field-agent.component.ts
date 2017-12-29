import { Component, OnInit } from '@angular/core';
declare let jQuery:any;
@Component({
  selector: 'app-single-field-agent',
  templateUrl: './single-field-agent.component.html',
  styleUrls: ['./single-field-agent.component.css']
})
export class SingleFieldAgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log("After Vew Init")
    jQuery.getScript('./assets/javascripts/custom/singleFiledTech-init.js', function(){
    });
}
}
