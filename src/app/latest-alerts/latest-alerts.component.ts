import { Component, OnChanges ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-latest-alerts',
  templateUrl: './latest-alerts.component.html',
  styleUrls: ['./latest-alerts.component.css']
})
export class LatestAlertsComponent implements OnChanges {
  @Input() alerts:any;
  constructor() { }
  ngOnChanges() {
  
  }
}
