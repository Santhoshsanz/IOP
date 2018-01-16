import { Component, OnInit,Input } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster';
import { BodyOutputType } from 'angular2-toaster';

@Component({
    selector: 'toast',
    template: `<div>
    <toaster-container [toasterconfig]="config"></toaster-container>
  </div>`,
})
export class ToastComponent implements OnInit {
    @Input() config:any;

    constructor(private toasterService: ToasterService) { }
    ngOnInit() {
    }
}
