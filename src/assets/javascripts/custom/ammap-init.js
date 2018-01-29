//-----------------------------------------------------------------

// AMMAP INITIALIZATION

//-----------------------------------------------------------------

// Mission Control Map
//console.log("Map")
var map = AmCharts.makeChart( "1mission-control-map", {
    "type": "map",
    "dragMap": true,
    "projection": "mercator",
    "areasSettings": {
        "autoZoom": true,
        "rollOverOutlineColor": "#595959",
        "rollOverColor": undefined,
       // "selectedColor": "#595959",
        "outlineAlpha": 1,
        "outlineColor": "",
        "outlineThickness": 1,
        "color": undefined,
        // "pattern": {
        //     "url": "../../images/patterns/new-pattern.svg",
        //     "width": 4,
        //     "height": 4
        // }
    },
    "imagesSettings": {
        "rollOverScale": 1.5,
        "selectedScale": 1,
    },
    "dataProvider": {
        "map": "japanLow",
        "getAreasFromMap": true,
        "images": [ {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Nestle Osaka",
            "latitude": 34.5547,
            "longitude": 135.502,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-active.png",
            "zoomLevel": 5,
            "title": "Nestle Kobe",
            "latitude": 34.6924,
            "longitude": 134.8998,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-active.png",
            "zoomLevel": 5,
            "title": "Nestle Tokyo",
            "latitude": 35.6772,
            "longitude": 139.6995,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Nestle osaka East",
            "latitude": 34.4922,
            "longitude": 135.5469,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Nestle tokyo East",
            "latitude": 35.7123,
            "longitude": 139.2155,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Hilton Tokyo Narita",
            "latitude": 36.1684,
            "longitude": 139.8592,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-active.png",
            "zoomLevel": 5,
            "title": "Hilton Tokyo",
            "latitude": 35.6772,
            "longitude": 139.3361,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Hilton Resort",
            "latitude": 35.1485,
            "longitude": 139.0941,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Hilton Osaka",
            "latitude": 34.7125,
            "longitude": 135.4507,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-active.png",
            "zoomLevel": 5,
            "title": "Hilton Nagoya",
            "latitude": 35.0463,
            "longitude": 136.6835,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Yoshinoya Okinawa North",
            "latitude": 26.6003,
            "longitude": 128.0491,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Yoshinoya Okinawa South",
            "latitude": 28.2218,
            "longitude": 129.3621,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Yoshinoya Ehime",
            "latitude": 33.9472,
            "longitude": 132.8602,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-active.png",
            "zoomLevel": 5,
            "title": "Yoshinoya InshiKawa",
            "latitude": 36.7116,
            "longitude": 136.7452,
            "width": 30,
            "height": 30
        }, {
            "imageURL": "assets/images/facility-inactive.png",
            "zoomLevel": 5,
            "title": "Yoshinoya Yamanashi",
            "latitude": 35.6874,
            "longitude": 138.7184,
            "width": 30,
            "height": 30
        }],
    },
    "zoomControl": {
        "panControlEnabled": false,
        "zoomControlEnabled": false,
        "homeButtonEnabled": true,
        "panStepSize": 1.5
    },
    "export": {
        "enabled": true
    },
    "listeners": [{
        "event": "rendered",
        "method": function(e) {
            var map = e.chart;
            map.initialZoomLevel = map.zoomLevel(3);
            map.initialZoomLatitude = map.zoomLatitude();
            map.initialZoomLongitude = map.zoomLongitude();
            map.zoomIn();
        }
    }],

});
map.addListener("click", function(event) {
    // find out the coordinates of under mouse cursor
    var info = event.chart.getDevInfo();
  
    // print out dev info
   
    // print in console as well
    console.log(JSON.stringify({
        "imageURL": "assets/images/facility-inactive.png",
        "zoomLevel": 5,
        "title": "Nestle Sri Lanka",
        "latitude":info.latitude,
        "longitude": info.longitude,
        "width": 30,
        "height": 30
    }))
  });
// Select A Country
var locationID = '';
$('.map-options-block .select-country .dropdown > li > a').on('click', function () {
    locationID = $(this).data('location-id');
    var mapObject = map.getObjectById(locationID);
    map.clickMapObject(mapObject);
});

// Zoom In
$('.map-zoom-in').on('click', function () {
    map.zoomIn();
    return false;
});

// Zoom Out
$('.map-zoom-out').on('click', function () {
    map.zoomOut();
    return false;
});

// Single Customer Map
var singleCustomerMap = AmCharts.makeChart( "single-customer-map", {

    "type": "map",
    "dragMap": true,
    "projection": "mercator",
    "areasSettings": {
        "autoZoom": true,
        "rollOverOutlineColor": "#595959",
        "rollOverColor": undefined,
        "selectedColor": "#595959",
        "outlineAlpha": 1,
        "outlineColor": "",
        "outlineThickness": 1,
        "color": undefined,
        "pattern": {
            "url": "../../assets/images/patterns/new-pattern.svg",
            "width": 4,
            "height": 4
        }
    },
    "imagesSettings": {
        "rollOverScale": 1.5,
        "selectedScale": 1,
    },
    "dataProvider": {
        "map": "japanLow",
        "getAreasFromMap": true,
         "images": [ {"imageURL":"assets/images/facility-inactive.png","zoomLevel":5,"title":"Nestle Osaka","latitude":34.5547,"longitude":135.502,"width":30,"height":30},
         {"imageURL":"assets/images/facility-active.png","zoomLevel":5,"title":"Nestle Kobe","latitude":34.6924,"longitude":134.8998,"width":30,"height":30},
         {"imageURL":"assets/images/facility-active.png","zoomLevel":5,"title":"Nestle Tokyo","latitude":35.6772,"longitude":139.6995,"width":30,"height":30},
         {"imageURL":"assets/images/facility-inactive.png","zoomLevel":5,"title":"Nestle osaka East","latitude":34.4922,"longitude":135.5469,"width":30,"height":30},
         {"imageURL":"assets/images/facility-inactive.png","zoomLevel":5,"title":"Nestle tokyo East","latitude":35.7123,"longitude":139.2155,"width":30,"height":30}
        ],
    },
    "zoomControl": {
        "panControlEnabled": false,
        "zoomControlEnabled": false,
        "homeButtonEnabled": true,
        "panStepSize": 1.5
    },
    "export": {
        "enabled": true
    },
    "listeners": [{
        "event": "rendered",
        "method": function(e) {
            var singleCustomerMap = e.chart;
            singleCustomerMap.initialZoomLevel = singleCustomerMap.zoomLevel();
            singleCustomerMap.initialZoomLatitude = singleCustomerMap.zoomLatitude();
            singleCustomerMap.initialZoomLongitude = singleCustomerMap.zoomLongitude();
        }
    }],

});
var singleCustomerMap2 = AmCharts.makeChart( "single-customer-map2", {
    
        "type": "map",
        "dragMap": true,
        "projection": "mercator",
        "areasSettings": {
            "autoZoom": true,
            "rollOverOutlineColor": "#595959",
            "rollOverColor": undefined,
            "selectedColor": "#595959",
            "outlineAlpha": 1,
            "outlineColor": "",
            "outlineThickness": 1,
            "color": undefined,
            "pattern": {
                "url": "../../assets/images/patterns/new-pattern.svg",
                "width": 4,
                "height": 4
            }
        },
        "imagesSettings": {
            "rollOverScale": 1.5,
            "selectedScale": 1,
        },
        "dataProvider": {
            "map": "japanLow",
            "getAreasFromMap": true,
             "images": [ {
                "imageURL": "assets/images/facility-inactive.png",
                "zoomLevel": 5,
                "title": "Yoshinoya Okinawa North",
                "latitude": 26.6003,
                "longitude": 128.0491,
                "width": 30,
                "height": 30
            }, {
                "imageURL": "assets/images/facility-inactive.png",
                "zoomLevel": 5,
                "title": "Yoshinoya Okinawa South",
                "latitude": 28.2218,
                "longitude": 129.3621,
                "width": 30,
                "height": 30
            }, {
                "imageURL": "assets/images/facility-active.png",
                "zoomLevel": 5,
                "title": "Yoshinoya Ehime",
                "latitude": 33.9472,
                "longitude": 132.8602,
                "width": 30,
                "height": 30
            }, {
                "imageURL": "assets/images/facility-active.png",
                "zoomLevel": 5,
                "title": "Yoshinoya InshiKawa",
                "latitude": 36.7116,
                "longitude": 136.7452,
                "width": 30,
                "height": 30
            }, {
                "imageURL": "assets/images/facility-active.png",
                "zoomLevel": 5,
                "title": "Yoshinoya Yamanashi",
                "latitude": 35.6874,
                "longitude": 138.7184,
                "width": 30,
                "height": 30
            }],
        },
        "zoomControl": {
            "panControlEnabled": false,
            "zoomControlEnabled": false,
            "homeButtonEnabled": true,
            "panStepSize": 1.5
        },
        "export": {
            "enabled": true
        },
        "listeners": [{
            "event": "rendered",
            "method": function(e) {
                var singleCustomerMap = e.chart;
                singleCustomerMap.initialZoomLevel = singleCustomerMap.zoomLevel();
                singleCustomerMap.initialZoomLatitude = singleCustomerMap.zoomLatitude();
                singleCustomerMap.initialZoomLongitude = singleCustomerMap.zoomLongitude();
            }
        }],
    
    });
var singleCustomerMap3 = AmCharts.makeChart( "single-customer-map3", {
        
            "type": "map",
            "dragMap": true,
            "projection": "mercator",
            "areasSettings": {
                "autoZoom": true,
                "rollOverOutlineColor": "#595959",
                "rollOverColor": undefined,
                "selectedColor": "#595959",
                "outlineAlpha": 1,
                "outlineColor": "",
                "outlineThickness": 1,
                "color": undefined,
                "pattern": {
                    "url": "../../assets/images/patterns/new-pattern.svg",
                    "width": 4,
                    "height": 4
                }
            },
            "imagesSettings": {
                "rollOverScale": 1.5,
                "selectedScale": 1,
            },
            "dataProvider": {
                "map": "japanLow",
                "getAreasFromMap": true,
                 "images": [ {
                    "imageURL": "assets/images/facility-inactive.png",
                    "zoomLevel": 5,
                    "title": "Hilton Tokyo Narita",
                    "latitude": 36.1684,
                    "longitude": 139.8592,
                    "width": 30,
                    "height": 30
                }, {
                    "imageURL": "assets/images/facility-active.png",
                    "zoomLevel": 5,
                    "title": "Hilton Tokyo",
                    "latitude": 35.6772,
                    "longitude": 139.3361,
                    "width": 30,
                    "height": 30
                }, {
                    "imageURL": "assets/images/facility-inactive.png",
                    "zoomLevel": 5,
                    "title": "Hilton Resort",
                    "latitude": 35.1485,
                    "longitude": 139.0941,
                    "width": 30,
                    "height": 30
                }, {
                    "imageURL": "assets/images/facility-inactive.png",
                    "zoomLevel": 5,
                    "title": "Hilton Osaka",
                    "latitude": 34.7125,
                    "longitude": 135.4507,
                    "width": 30,
                    "height": 30
                }, {
                    "imageURL": "assets/images/facility-active.png",
                    "zoomLevel": 5,
                    "title": "Hilton Nagoya",
                    "latitude": 35.0463,
                    "longitude": 136.6835,
                    "width": 30,
                    "height": 30
                }],
            },
            "zoomControl": {
                "panControlEnabled": false,
                "zoomControlEnabled": false,
                "homeButtonEnabled": true,
                "panStepSize": 1.5
            },
            "export": {
                "enabled": true
            },
            "listeners": [{
                "event": "rendered",
                "method": function(e) {
                    var singleCustomerMap = e.chart;
                    singleCustomerMap.initialZoomLevel = singleCustomerMap.zoomLevel();
                    singleCustomerMap.initialZoomLatitude = singleCustomerMap.zoomLatitude();
                    singleCustomerMap.initialZoomLongitude = singleCustomerMap.zoomLongitude();
                }
            }],
        
        });

// Select A Country
var locationID = '';
$('.map-options-block .select-country .dropdown > li > a').on('click', function () {
    locationID = $(this).data('location-id');
    var mapObject = map.getObjectById(locationID);
    map.clickMapObject(mapObject);
});
