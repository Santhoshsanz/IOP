import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
@Pipe({
  name: 'toggleActive'
})
export class ActiveInActivePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(status) {
     if(status==1){
      return "Active"
    }
    else if(status==0){
      return "InActive"
    }
  }
}

@Pipe({
  name: 'activityPipe'
})
export class ActivityPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(status) {
     if(status=="Open"){
      return "UnAssigned"
    }
    else return status;
  }
}
@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}