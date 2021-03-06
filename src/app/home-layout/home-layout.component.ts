import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { apiData, images, pestType } from '../common';
import { CommonDataService } from '../common-data.service'
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from "../login-service.service";
import { AuthenticationService } from "../authentication/authentication.service";
import { ElementRef } from '@angular/core';
//Toaster Notification
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster';
import { BodyOutputType } from 'angular2-toaster';
import { ToastComponent } from '../shared/Toast/toast.component';
//Live Queue
declare let SockJS: any;
declare let Stomp: any;
//
declare let jQuery: any;
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  @Input() eventsEmitter;
  sockJs = SockJS;
  //Stomp Variables
  private serverUrl = 'http://10.190.111.245:8082/iop-websocket'
  private topic = '/topic/notification';
  private stompClient;
  //Ends
  config: ToasterConfig;
  image = images;
  pest = pestType;
  newSensors: any = [];
  constructor(private elRef: ElementRef, private _commonDataService: CommonDataService, private _loginService: LoginService,
    private _authService: AuthenticationService, private _toasterService: ToasterService) { }
  events: any = [];
  unAssigned: any = 0;
  inProgress: any = 0;
  actionRequired: any = 0;
  ngOnInit() {
    this.getData();
    //console.log("Init Mission");
    // //console.log(this.events);
    this.initializeWebSocketConnection();
    this.getNewSensors();
  }

  //Stom Code
  initializeWebSocketConnection() {
    let ws = new this.sockJs(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      console.log("Stomp CLient Connected.....")
      that.stompClient.subscribe(that.topic, (message) => {
        if (message.body) {
          //Handle Service for incoming Queue
         // if(message.body.type=="Activity")
          that.popToast("Sensor Event");
          this.getData();
          this.getNewSensors();
         that._commonDataService.eventEmitterData.emit("Emitted Data");
          //else
          //that.popToast("New Notificaton");
          // console.log(message.body);
        }
      });
    });
  }
  //Ends

  //Toaster Notification
  popToast(sensorEvent) {
    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 500
    });
    var toast: Toast = {
      type: 'error',
      title: sensorEvent,
      body: '',
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
      onHideCallback: () => {
      }

    };

    this._toasterService.pop(toast);
  }


  //Ends

  // ngAfterViewInit() {
  //   jQuery.getScript('./assets/javascripts/custom/main.js', function () {
  //   });
  //   jQuery.getScript('./assets/javascripts/custom/eventGrid.js', function () {
  //   });
  // }
  getData() {
    let self = this;
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.facility, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        let data = [];
        res.facilitiesInfo.map(function (i, j) {
          let self = i;
          if (i.eventActivities != null) {
            if (i.eventActivities.length > 0) {
              return i.eventActivities.map(function (t, y) {
                if (t.activity != "Closed") {
                  t.facilityName = self.name;
                  data.push(t)
                }
              })
            }
          }


        })
        ////console.log(data)

        data.map(function (e, j) {
          switch (e.sensor[0].type) {
            case "Rodent":
              e.sensor[0].customImage = self.pest.Rodent;
              break;
            case "Mouse":
              e.sensor[0].customImage = self.pest.Mouse;
              break;
          }
          switch (e.activity) {
            case "UnAssigned":
              self.unAssigned++;
              break;
            case "Open":
              self.unAssigned++;
              break;
            case "In Progress":
              self.inProgress++;
              break;
            case "Action Required":
              self.actionRequired++;
              break;
          }
        })
        this.events = data;
      }
    })

  }
  getNewSensors() {
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + "sensor/new/7a8b979c-9a13-423e-abd6-0f22cea9820c", headers)
      .subscribe((res: any) => {
        if(res.status=="ok"){
        this.newSensors = res.newlyAddedSensor;
        //console.log(this.newSensors)
        }else{

        }
      })
  }
  ngAfterViewInit() {
    var headerInnerWidth = jQuery('.header').outerWidth();
    jQuery('.header-inner').outerWidth(headerInnerWidth);
    jQuery('.sign-out-block a').outerWidth(headerInnerWidth);
    jQuery('.header').width('62');
    jQuery('.header .dropdown').width(headerInnerWidth);
    jQuery('.nav-trigger a').on('click', function () {
      var headerWidth = jQuery(this).closest('.header').outerWidth();
      jQuery(this).toggleClass('active');
      if (jQuery(this).hasClass('active')) {
        jQuery(this).closest('.header').animate({
          'width': headerInnerWidth
        }, 700, 'easeInOutCubic');
      } else {
        jQuery(this).closest('.header').animate({
          'width': '62'
        }, 700, 'easeInOutCubic');
      }
      jQuery('.nav ul li .dropdown').slideUp(700);

      return false;
    });


    //-----------------------------------------------------------------

    // NAV ITEM CLICK

    //-----------------------------------------------------------------

    jQuery('.nav > ul > li.has-dropdown > a').on('click', function () {

      if (jQuery(this).parent('.has-dropdown').find('.dropdown').hasClass('opened')) {
        jQuery(this).removeClass('active');
        jQuery(this).parent('.has-dropdown').find('.dropdown a').removeClass('active');
        jQuery(this).parent('.has-dropdown').find('.dropdown').removeClass('opened');
        jQuery(this).parent('.has-dropdown').find('.dropdown').stop().slideUp(500);
      } else {
        jQuery(this).closest('ul').find('li a').removeClass('active');
        jQuery(this).parent('.has-dropdown').siblings('.has-dropdown').find('.dropdown.opened').slideUp(500);
        jQuery(this).parent('.has-dropdown').siblings('.has-dropdown').find('.dropdown.opened').removeClass('opened');
        jQuery(this).parent('.has-dropdown').siblings('.has-dropdown').find('a.active').removeClass('active');

        jQuery(this).parent('.has-dropdown').find('> .dropdown').addClass('opened');
        jQuery(this).parent('.has-dropdown').find('> .dropdown').stop().slideDown(700);
        jQuery(this).addClass('active');
      }

      //ANIMATE HEADER
      if (!jQuery('.nav-trigger a').hasClass('active')) {
        jQuery('.nav-trigger a').toggleClass('active');
        if (jQuery('.nav-trigger a').hasClass('active')) {
          jQuery('.nav-trigger a').closest('.header').animate({
            'width': headerInnerWidth
          }, 700, 'easeInOutCubic');
        } else {
          jQuery('.nav-trigger a').closest('.header').animate({
            'width': '65'
          }, 700, 'easeInOutCubic');
        }
      }

      return false;
    });

    jQuery('.sign-out-block a').on('click', function () {
      return false;
    });
    jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
    jQuery.getScript('./assets/javascripts/custom/main-index.js', function () {
    });
  }
}
