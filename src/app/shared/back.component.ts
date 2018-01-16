import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-back',
  template: `<button type="button" class="btn btn-success" (click)="back()">Back</button>`,
})
export class BackComponent implements OnInit {
  constructor(private _location:Location) { }
  ngOnInit() {
  }
  back(){
      this._location.back();
  }
}
