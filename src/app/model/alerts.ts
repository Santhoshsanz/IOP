export class Data{
	ClientID: string;
	ClientName: string;
	ClientLogoUrl:string;
	ClientEmail:string;
	Facilities: [{
			FacilityId: string;
			FacilityName: string;
			Alerts: [{
				Id: string;
				AlertName:string;
				FacilityName: string;
				AlertStatus: string;
				LatestUpdate: string;
				Description: string;
				ZoneName: string;
				SensorName: string;
				FiledTech: string;
				TrapName: string;
				ImgUrl: string;
				AlertType:string;
				ProccessingSteps:{
					Open:boolean;
					Assigned:boolean;
					Service:boolean;
					FurtherAction:boolean;
					Closed:boolean;
				};
				TimeLine:[{
					DateT:string;
					Steps:string;
				}]
			}]
			Temperature:string;
			RelativeHumidity:string;
			IaqIndex:string;
		}]
	}


