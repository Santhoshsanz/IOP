import { Component,SimpleChanges,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-events-notification',
  templateUrl: './events-notification.component.html',
  styleUrls: ['./events-notification.component.css']
})
export class EventsNotificationComponent implements OnChanges {
@Input() actionRequired;
@Input() unAssigned;
@Input() inProgress;
@Input() events;
  constructor() { }

  ngOnChanges(chnages:SimpleChanges) {

  }

}
