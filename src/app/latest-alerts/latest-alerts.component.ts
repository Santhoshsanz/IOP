import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-latest-alerts',
  templateUrl: './latest-alerts.component.html',
  styleUrls: ['./latest-alerts.component.css']
})
export class LatestAlertsComponent implements OnInit {
  @Input() alerts:any;
  constructor() { }
  ngOnInit() {
  }
}
