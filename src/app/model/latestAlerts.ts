import {Data} from "../model/alerts";

export const LatestAlerts:Data[]=[{
	"ClientID": "1",
	"ClientName": "Nestle Japan",
	"ClientLogoUrl":"assets/images/clients/nestle.jpg",
	"ClientEmail":"info@nestle.com",
	"Facilities": [{
			"FacilityId": "Tokyo Nestle",
			"FacilityName": "FS01A",
			"Alerts": [{
				"Id": "S12000",
				"AlertName": "Rat Detected",
				"FacilityName": "Tokyo Nestle",
				"AlertStatus": "In progress",
				"LatestUpdate": "Nov 20th 9:28am",
				"Description": "Nov 19th 4:37pm - added by James Milton - assigned to John since Michael was not available",
				"ZoneName": " Food storage 1",
				"SensorName": "Rat sensor 1 - N side",
				"FiledTech": "John Smith",
				"TrapName": "RatTrap",
				"ImgUrl": "assets/images/bugs-pests/icon-rat.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":false,
					"Closed":false
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			},{
				"Id": "S12001",
				"AlertName": "20 Bottle flies Detected",
				"FacilityName": "Tokyo Nestle",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main atrium ",
				"SensorName": "   Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":false,
					"Closed":false
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			},{
				"Id": "S12002",
				"AlertName": "20 Bottle flies Detected",
				"FacilityName": "Tokyo Nestle",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main atrium ",
				"SensorName": "   Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":false,
					"Closed":false
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			}],
			"Temperature":"25",
			"RelativeHumidity":"85",
			"IaqIndex":"60"
		},
		{
			"FacilityId": "Nestle Osaka",
			"FacilityName": "FS01B",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"90"
		},
		{
			"FacilityId": "Nestle Koba",
			"FacilityName": "FS01C",
			"Alerts": [{
				"Id": "S12003",
				"AlertName": "Rat Detected",
				"FacilityName": "Tokyo Kobe",
				"AlertStatus": "In progress",
				"LatestUpdate": "Nov 20th 9:28am",
				"Description": "Nov 19th 4:37pm - added by James Milton - assigned to John since Michael was not available",
				"ZoneName": " Food storage 1",
				"SensorName": "Rat sensor 1 - N side",
				"FiledTech": "John Smith",
				"TrapName": "RatTrap",
				"ImgUrl": "assets/images/bugs-pests/icon-rat.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			},{
				"Id": "S12004",
				"AlertName": "20 Bottle flies Detected",
				"FacilityName": "Tokyo Kobe",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main atrium ",
				"SensorName": "   Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly" ,
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"70"
		},
		{
			"FacilityId": "Osaka East",
			"FacilityName": "FS01D",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"20"
		},
		{
			"FacilityId": "Tokyo East",
			"FacilityName": "FS01E",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"30"
		}
	]
},
{
	"ClientID": "2",
	"ClientName": "Yoshinoya",
	"ClientLogoUrl":"assets/images/clients/Yoshinoya.jpg",
	"ClientEmail":"info@yoshinoya.com",
	"Facilities": [{
			"FacilityId": "Yamanashi Yoshinoya",
			"FacilityName": "FS02A",
			"Alerts": [{
				"Id": "S12009",
				"AlertName": "20 Bottle flies Detected",
				"FacilityName": "Yoshinowa Yamanshi ",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main atrium ",
				"SensorName": "   Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"40"
		},
		{
			"FacilityId": "Inshikawa Yoshinoya",
			"FacilityName": "FS02B",
			"Alerts": [{
				"Id": "S12005",
				"AlertName": "Adult Bed Bug Detected",
				"FacilityName": "Yoshinoya Inshikawa",
				"AlertStatus": "Open",
				"LatestUpdate": "Nov 22 nd 3: 55 pm",
				"Description": "",
				"ZoneName": "Room 1284",
				"SensorName": "Adult Bed Bug Sensor 1 - under bed SW corner",
				"FiledTech": "",
				"TrapName": "Adult Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",
				"AlertType":"Crawl" ,
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			},{
				"Id": "S12006",
				"AlertName": "15 Bottle flies Detected",
				"FacilityName": "Yoshinowa Inshikaya",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main Atrium",
				"SensorName": "Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly" ,
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"90"
		},
		{
			"FacilityId": "Ehime Yoshinoya",
			"FacilityName": "FS02C",
			"Alerts": [{
				"Id": "S12007",
				"AlertName": "Rat Detected",
				"FacilityName": "Yoshinowa Ehime ",
				"AlertStatus": "In progress",
				"LatestUpdate": "Nov 20th 9:28am",
				"Description": "Nov 19th 4:37pm - added by James Milton - assigned to John since Michael was not available",
				"ZoneName": " Food storage 1",
				"SensorName": "Rat sensor 1 - N side",
				"FiledTech": "John Smith",
				"TrapName": "RatTrap",
				"ImgUrl": "assets/images/bugs-pests/icon-rat.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			},{
				"Id": "S12008",
				"AlertName": "20 Bottle flies Detected",
				"FacilityName": "Yoshinowa Ehime ",
				"AlertStatus": "Further action required",
				"LatestUpdate": "Nov 22nd 3:45 pm",
				"Description": "Nov 22nd 3:45pm - added by Jesse Moya - Saw a large increase in bottle flies on glue board. Replaced glue board. Found broken window causing the problem. Escalated to FM team to fix",
				"ZoneName": "Main atrium ",
				"SensorName": "   Bottle Fly Sensor 3 - E corner",
				"FiledTech": "Jesse Moya",
				"TrapName": "Bottle Fly Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-bottle-fly.svg",
				"AlertType":"Fly",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"80"
		},
		{
			"FacilityId": "Okinawa South Yoshinoya",
			"FacilityName": "FS02D",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"70"
		},
		{
			"FacilityId": "Okinawa North Yoshinoya",
			"FacilityName": "FS02E",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"60"
		}
	]
},
{
	"ClientID": "3",
	"ClientName": "Hilton Group",
	"ClientLogoUrl":"assets/images/clients/hilton.png",
	"ClientEmail":"info@hilton.com",
	"Facilities": [{
			"FacilityId": "Tokyo Hilton",
			"FacilityName": "FS03A",
			"Alerts": [{
				"Id": "S120012",
				"AlertName": "Bed Bug Detected",
				"FacilityName": "Hilton Tokyo",
				"AlertStatus": "Service Procedure",
				"LatestUpdate": "Dec 1st 1:45 pm",
				"Description": "Serviced the room to get rid of bed bugs locked for 24 hours",
				"ZoneName": "Room 1233",
				"SensorName": "Bed Bug Sensor 3",
				"FiledTech": "Jessica",
				"TrapName": "Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			},{
				"Id": "S120011",
				"AlertName": "Bed Bug Detected",
				"FacilityName": "Hilton Tokyo",
				"AlertStatus": "Service Procedure",
				"LatestUpdate": "Dec 1st 1:45 pm",
				"Description": "Serviced the room to get rid of bed bugs locked for 24 hours",
				"ZoneName": "Room 1233",
				"SensorName": "Bed Bug Sensor 3",
				"FiledTech": "Jessica",
				"TrapName": "Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			},{
				"Id": "S120014",
				"AlertName": "Bed Bug Detected",
				"FacilityName": "Hilton Tokyo",
				"AlertStatus": "Service Procedure",
				"LatestUpdate": "Dec 1st 1:45 pm",
				"Description": "Serviced the room to get rid of bed bugs locked for 24 hours",
				"ZoneName": "Room 1233",
				"SensorName": "Bed Bug Sensor 3",
				"FiledTech": "Jessica",
				"TrapName": "Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",
				"AlertType":"Crawl",
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"50"
		},
		{
			"FacilityId": "Osaka Hilton",
			"FacilityName": "FS03B",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"40"
		},
		{
			"FacilityId": "Resort Hilton",
			"FacilityName": "FS03C",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"30"
		},
		{
			"FacilityId": "Nagoya Hilton",
			"FacilityName": "FS03D",
			"Alerts": [{
				"Id": "S12622",
				"AlertName": "Bed Bug Detected",
				"FacilityName": "Hilton Tokyo",
				"AlertStatus": "Service Procedure",
				"LatestUpdate": "Dec 1st 1:45 pm",
				"Description": "Serviced the room to get rid of bed bugs locked for 24 hours",
				"ZoneName": "Room 1233",
				"SensorName": "Bed Bug Sensor 3",
				"FiledTech": "Jessica",
				"TrapName": "Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",	
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Service Procedure Started",
				},
				{
					"DateT":"28th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Further Action Required Saw a broken Window escalted issue to team",
				}]
			},{
				"Id": "S12622",
				"AlertName": "Bed Bug Detected",
				"FacilityName": "Hilton Tokyo",
				"AlertStatus": "Service Procedure",
				"LatestUpdate": "Dec 1st 1:45 pm",
				"Description": "Serviced the room to get rid of bed bugs locked for 24 hours",
				"ZoneName": "Room 1233",
				"SensorName": "Bed Bug Sensor 3",
				"FiledTech": "Jessica",
				"TrapName": "Bed Bug Trap",
				"ImgUrl": "assets/images/bugs-pests/icon-instar-beg-bug.svg",	
				"ProccessingSteps":{
					"Open":true,
					"Assigned":true,
					"Service":true,
					"FurtherAction":true,
					"Closed":true
				},
				"TimeLine":[{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Alert Generated",
				},
				{
					"DateT":"27th June, 2017 5.30PM ( +5.30 IST )",
					"Steps":"Task assigned to John Donald since Sebastian Kent is not available",
				}]
			}],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"20"
		},
		{
			"FacilityId": "Narita Hilton",
			"FacilityName": "FS03E",
			"Alerts": [],
				"Temperature":"25",
				"RelativeHumidity":"85",
				"IaqIndex":"10"
		}
	]
}]