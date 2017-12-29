import { Component } from '@angular/core';
import {ElementRef} from '@angular/core';
declare let jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private elRef:ElementRef) { }
  
    ngOnInit() {
      console.log("Init Mission");
      jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
      jQuery.getScript('./assets/javascripts/custom/main-index.js', function(){
      });
    }
}
