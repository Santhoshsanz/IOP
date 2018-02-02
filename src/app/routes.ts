import { Routes, CanActivate, CanActivateChild } from "@angular/router"
import { ClientComponent } from './client/client.component';
import { FieldAgentComponent } from './field-agent/field-agent.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { SingleFieldAgentComponent } from './single-field-agent/single-field-agent.component';
import { SingleClientComponent } from './single-client/single-client.component';
import { FacilityComponent } from './facility/facility.component';
import { CrawlAlertComponent } from './crawl-alert/crawl-alert.component';
import { FlyAlertComponent } from './fly-alert/fly-alert.component';
import { LatestAlertsComponent } from './latest-alerts/latest-alerts.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { AddSensorComponent } from './add-sensor/add-sensor.component';
import { FacilityEditorComponent } from './add-facility/facility-editor/facility-editor.component';
import { FacilityViewComponent } from './add-facility/facilityView/facility-view.component';
import { ClientEditorComponent } from './add-client/client-editor/client-editor.component';
import { ClientViewComponent } from './add-client/client-view/client-view.component';
import { ZoneViewComponent } from './add-zone/zone-view/zone-view.component';
import { ZoneEditorComponent } from './add-zone/zone-editor/zone-editor.component';
import { AddGatewayComponent } from './add-gateway/add-gateway.component';
import { GatewayEditorComponent } from './add-gateway/edit-gateway/gateway-editor.component';
import { GatewayViewComponent } from './add-gateway/view-gateway/gateway-view.component';
import { SensorViewComponent } from './add-sensor/view-sensor/view-sensor.component';
import { SensorEditorComponent } from "./add-sensor/edit-sensor/sensor-editor.component";
import { LoginComponent } from './login-layout/login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginInitComponent } from './login-layout/login-init/login-init.component';
import { LoginForgotComponent } from './login-layout/login-forgot/login-forgot.component';
import { AddUserComponent } from './user-config/add-user/add-user.component';
import { EditUserComponent } from './user-config//edit-user/edit-user.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { LoginService } from './login-service.service';
import { AuthGuard } from "./authentication/auth-guard";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
export const appRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MissionControlComponent
      }, {
        path: 'index',
        component: MissionControlComponent,
       // canActivate: [AuthGuard]
      },
      {
        path: 'Client',
        component: ClientComponent
      },
      {
        path: 'Client/:id',
        component: SingleClientComponent
      },
      {
        path: 'AddClient',
        component: AddClientComponent,
        children: [
          {
            path: '',
            component: ClientViewComponent
          },
          {
            path: 'Edit/:id',
            component: ClientEditorComponent
          },
          {
            path: 'Add',
            component: ClientEditorComponent
          }
        ]
      }, {
        path: 'AddFacility',
        component: AddFacilityComponent,
        children: [
          {
            path: '',
            component: FacilityViewComponent
          },
          {
            path: 'Edit/:id',
            component: FacilityEditorComponent
          },
          {
            path: 'Add',
            component: FacilityEditorComponent
          }
        ]
      }, {
        path: 'AddZone',
        component: AddZoneComponent,
        children: [
          {
            path: '',
            component: ZoneViewComponent
          },
          {
            path: 'Edit/:id',
            component: ZoneEditorComponent
          },
          {
            path: 'Add',
            component: ZoneEditorComponent
          }
        ]
      }, {
        path: 'AddGateway',
        component: AddGatewayComponent,
        children: [
          {
            path: '',
            component: GatewayViewComponent
          },
          {
            path: 'Edit/:id',
            component: GatewayEditorComponent
          },
          {
            path: 'Add',
            component: GatewayEditorComponent
          }
        ]
      }, {
        path: 'AddSensor',
        component: AddSensorComponent,
        children: [
          {
            path: '',
            component: SensorViewComponent
          },
          {
            path: 'Edit/:id',
            component: SensorEditorComponent
          },
          {
            path: 'Add',
            component: SensorEditorComponent
          }
        ]
      },
      {
        path: 'AddUser',
        component: UserConfigComponent,
        children: [
          {
            path: '',
            component: AddUserComponent
          },
          {
            path: 'Edit/:id',
            component: EditUserComponent
          },
          {
            path: 'Add',
            component: EditUserComponent
          }
        ]
      },
      {
        path: 'FieldAgent',
        component: FieldAgentComponent
      },
      {
        path: 'Client/AlertC/:client/:facility/:alert',
        component: CrawlAlertComponent
      },
      {
        path: 'Client/AlertF/:client/:facility/:alert',
        component: FlyAlertComponent
      }
      , {
        path: 'FieldAgent/:id',
        component: SingleFieldAgentComponent
      },
      {
        path: 'Client/:client/:facility',
        component: FacilityComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'ForgotPassword',
        component: LoginForgotComponent
      },
      {
        path: 'Init/:id',
        component: LoginInitComponent
      }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: "full"
  }
]