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
    //console.log("After Vew Init")
    jQuery.getScript('./assets/javascripts/custom/singleFiledTech-init.js', function(){
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
