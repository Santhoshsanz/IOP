import { Component, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnChanges {
@Input() events;
@Input() newSensors;
  constructor() { }

  ngOnChanges() {
  }

}
