import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-back',
  template: ` <div class="button-row">
  <button mat-icon-button mat-raised-button (click)=back()><mat-icon><i class="material-icons">keyboard_backspace</i></mat-icon></button>
  </div>`,
})
export class BackComponent implements OnInit {
  constructor(private _location:Location) { }
  ngOnInit() {
  }
  back(){
      this._location.back();
  }
}
