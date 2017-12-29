
customerViewChart2("pest-vs-facility-client-view");
customerViewChart2= function(id){
    var data=[{
        name: 'Rat',
        data: [5	,"",	1,	"",	""]
    }, {
        name: 'Mouse',
        data: [2	,3	,1	,""	,""]
    }, {
        name: 'Bottle fly',
        data: ["",	"",	2,	""	,2]
    },
    {
        name: 'House fly',
        data: ["",	"",	2,	"",	""]
    },
    {
        name: 'Adult Bed Bug',
        data: ["",	"",	"",	1,	1]
    },
    {
        name: 'Instar Bed Bug',
        data: ["",	"",	"",	1,	""]
    },
    {
        name: 'Cockroach',
        data: [8,	4,	"",	2,	""]
    }];
    var category=['Nestle Tokyo','Nstle Osaka','	Nestle Osaka East','	Nestle tokyo East','	Nestle Tokyo','	Nestle Kobe'];
    // var category2=['Hilton Nagoya','Hilton Osaka','Hilton Narita','Hilton Tokyo','Hilton Resort'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Facility Name";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
    // console.log("called")
    // renderStackedChart(data,category2,title,yTitle,xTitle,'pest-vs-facility-client-view3');
};
pestChartPestVsTimeCustomerView("pest-vs-time-client-view");
pestChartPestVsTimeCustomerView= function(id){
    var data=[{
        name: 'Rat',
        data: [2,	"",	1,	"",	"",	3,	2,	4,	4,	4,	5,	3]

    }, {
        name: 'Mouse',
        data:   [3,	4,	2,	"",	3,	5,	2,	"",	2,	5,	4,	4]

    }, {
        name: 'Bottle fly',
        data:  ["",	1,	3,	4,	"",	1,	3,	"",	1,	1,	"",	4]

    },
    {
        name: 'House fly',
        data: [4,	2,	1,	"",	5,	"",	2,	5,	5,	2,	4,	3]

    },
    {
        name: 'Adult Bed Bug',
        data:  ["",	5,	5,	1,	4,	"",	5,	"",	1,	2,	1,	4]

    },
    {
        name: 'Instar Bed Bug',
        data:  ["",	4,	5,	1,	4,	4,	4,	1,	"",	3,	5,	1]

    },
    {
        name: 'Cockroach',
        data: [5,	"",	2,	3,	3,	1,	5,	5,	2,	5,	3,	1]
    }];
    var category=['December','January','	February','	March','	April','	May','	June','	July','	August','	September','	October','	November'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Month";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
};



//Owl Init
$('.theme-carousel').each(function() {
    var themeCarousel = $(this);
    themeCarousel.owlCarousel({
        animateOut: $(this).data('animateout'),
        animateIn: $(this).data('animatein'),
        autoplay: $(this).data('autoplay'),
        autoplayTimeout: $(this).data('autoplaytimeout'),
        autoplayHoverPause: $(this).data('autoplayhoverpause'),
        autoHeight: $(this).data('autoheight'),
        center : $(this).data('center'),
        loop : $(this).data('loop'),
        items : $(this).data('itemsdefault'),
        margin:$(this).data('margin'),
        stagePadding:$(this).data('stagepadding'),
        startPosition:$(this).data('startposition'),
        slideBy:$(this).data('slideby'),
        nav : $(this).data('nav'),
        navText : [
                "<i class='ion-chevron-left'></i>",
                "<i class='ion-chevron-right'></i>"
        ],
        dots: $(this).data('dots'),
        touchDrag:$(this).data('touchdrag'),
        mouseDrag:$(this).data('mousedrag'),
        responsive:{
          0:{
              items:1
          },
          361:{
              items: themeCarousel.data('xsnumber')
          },
          768:{
              items: themeCarousel.data('smnumber')
          },
          1025:{
              items: themeCarousel.data('mdnumber')
          }
        }
    });
});

switch(location.pathname[8]){
case "1":
console.log("1 CLient");
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
break;
case "2":
console.log(" Client 2");
var singleCustomerMap2 = AmCharts.makeChart( "single-customer-map", {
    
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
break;
case "3":
console.log(" Client 3");
var singleCustomerMap3 = AmCharts.makeChart( "single-customer-map", {
    
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
break;
}