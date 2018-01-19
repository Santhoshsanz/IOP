import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-submit',
  template: ` <div class="button-row">
  <button type="submit" mat-raised-button color="primary" [disabled]="disabbleBtn">Submit</button>
  </div>`,
  styles:[`.raised-button.mat-primary 
    {background-color: rgb(76, 163, 174)!important;
      cursor: not-allowed;
    }`]
})
export class SubmitComponent implements OnInit {
  @Input() disabbleBtn:boolean;
  constructor() { }
  ngOnInit() {
  }
}
