//-----------------------------------------------------------------

// HIGHCHART INITIALIZATION

//-----------------------------------------------------------------

// Task Status One
if($('#task-status-chart-one').length){

    var gaugeOptions = {
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '130%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#8c8f9c',
                innerRadius: '85%',
                outerRadius: '100%',
                shape: 'arc',
                borderWidth: 0,
            }
        },
        tooltip: {
            enabled: false
        },
        // the value axis
        yAxis: {
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 0,
            visible: false,
            title: {
                y: 65
            },
            labels: {
                y: 50
            }
        },

        plotOptions: {
            solidgauge: {
                innerRadius: '85%',
                dataLabels: {
                    y: 40,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // Task Status One
    var alertThresholdOne = Highcharts.chart('task-status-chart-one', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [1, '#2b5cff']
            ],
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'tasks',
            data: [66],
            dataLabels: {
                format: '<div class="chart-labels"><span class="value font-02">{y}%</span><br/>' +
                    '<span class="title font-02">ACTIVE EVENTS</br> ASSIGNED</span></div>'
            }
        }]

    }));


    // Task Status Two
    var alertThresholdTwo = Highcharts.chart('task-status-chart-two', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [1, '#551dcd']
            ],
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'tasks',
            data: [41],
            dataLabels: {
                format: '<div class="chart-labels"><span class="value font-02">{y}hrs</span><br/>' +
                    '<span class="title font-02">AVERAGE TIME </br>TO CLOSE AN EVENT</span></div>'
            }
        }]

    }));

    // Task Status Three
    var alertThresholdThree = Highcharts.chart('task-status-chart-three', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [1, '#00cfb8']
            ],
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'tasks',
            data: [15],
            dataLabels: {
                format: '<div class="chart-labels"><span class="value font-02">{y}hrs</span><br/>' +
                    '<span class="title font-02">AVERAGE RESPONSE</br> TIME FOR AN EVENT</span></div>'
            }
        }]

    }));

}


var palleteColors={mice:"#1c37c6",
        houseFly:"#3642ea",
        cockroach:"#5a7382",
        instar:"#5dcf98",
        adultBedBug:"#4ca3ae",
        bottleFly:"#573bce",
        rats:"#4c78c3"};

// $(document).ready(function(){
//     initialise();
// });

//var initialise = function(){
    // Mission Control Chart One
    if($('#pest-vs-facility').length)
    {
       //console.log("Pest")
        pestChart("pest-vs-facility");
    }
    
    // Mission Control Chart One Popup
    if($('#pest-vs-facility-popup').length)
    pestChart("pest-vs-facility-popup");
    // Mission Control Chart Two
    if($('#pest-vs-time').length)
    pestChartPestVsTime("pest-vs-time");
    // Mission Control Chart Two Popup
    if($('#pest-vs-time-popup').length)
    pestChartPestVsTime("pest-vs-time-popup");

    //Single Client Chart One
    if($('#pest-vs-facility-client-view').length)
    customerViewChart2("pest-vs-facility-client-view");
    if($('#pest-vs-facility-client-view3').length)
    customerViewChart23("pest-vs-facility-client-view3");
    if($('#pest-vs-facility-client-view2').length)
    customerViewChart22("pest-vs-facility-client-view2");
    //Single Client Chart Two
    if($('#pest-vs-time-client-view').length)
    pestChartPestVsTimeCustomerView("pest-vs-time-client-view");


    // Single Facility One
    if($('#pVsTAmbient').length)
    propViewPestvsTemp("pVsTAmbient");
    // SIngle Facility Two
    if($('#pVSTTime').length)
    propViewPestvsTemp2("pVSTTime");


    // Single ALERT rat01
    if($('#rodentDir').length){
        //console.log("Rodent")
        rodentDirection("rodentDir");
    }
    
    // Single ALERT rat02
    if($('#gauge').length){
        gauge("gauge");
    }

    // Single ALERT rat03
    if($('#activityGauge').length){
        //console.log("")
        renderActivitygauge('activityGauge');
    }
    


    // Single ALERT fly01
    if($('#flyCount').length)
    flyCount("flyCount");
    // Single ALERT fly02
    if($('#flyCountvsTime').length)
    flyCountvsTime("flyCountvsTime");


    // Single Fieldtech01
    if($('#efficiency').length)
    efficiencyChart("efficiency");


    if($('#pVSTTime').length)
    propViewPestvsTemp2("pVSTTime");

    if($('#sMaintainance').length)
    sensorMaintainance("sMaintainance");

    if($('#sMaintainance2').length)
    sensorMaintainance2("sMaintainance2");


    if($('#zoneView').length)
    zoneViewChart2("zoneView");
    // propViewChart4("propViewChart4");

    if($('#polar').length)
    polarChart("polar");
//};

// PortFolio View Chart-1
pestChart= function(id){
    var data=[{
        name: 'Rat',
        data: [5,"","","","","","",1,"",""]
    }, {
        name: 'Mouse',
        data: [2,"","","",3,"","",1,"",""]
    }, {
        name: 'Bottle fly',
        data: ["","","","","",2,"","","",""]
    },
    {
        name: 'House fly',
        data: ["","",7,"","","","","","",""]
    },
    {
        name: 'Adult Bed Bug',
        data: ["",7,4,8,"",4,2,"",1,1]
    },
    {
        name: 'Instar Bed Bug',
        data: ["",6,"",2,"","",2,"",1,""]
    },
    {
        name: 'Cockroach',
        data: [8,"","","",4,"","","","",""]
    }];
    var category=['Nestle Osaka East', 'hilton Tokyo', 'Hilton Resort',
     'Yoshinoya Okinawa', 'Hilton Nogoya','Nestle Kobe',
     'hilton Resort','Nestle Osaka','Ehime','Okinowa'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle='Facility Name';
    renderStackedChart(data,category,title,yTitle,xTitle,id);
};

// PortFolio View Chart 2Pest vs Time
pestChartPestVsTime= function(id){
    var data=[{
        name: 'Rat',
        data: [10	,2	,5	,2	,6	,1	,7	,4	,10	,1	,8	,1]
    }, {
        name: 'Mouse',
        data: [1,	7,	9,	9,	4,	8,	6,	"",	5,	9,	2	,2]
    }, {
        name: 'Bottle fly',
        data: [4,	9,	1,	"",	10,	7,	10,	3,	9,	3,	9,	1]
    },
    {
        name: 'House fly',
        data: [1,	5,	10,	4,	5,	"",	4,	9,	6,	9,	7	,2]
    },
    {
        name: 'Adult Bed Bug',
        data: [6,	1,	6,	2,	9,	5,	6,	4,	1,	8,	10  	,1]
    },
    {
        name: 'Instar Bed Bug',
        data: [10	,""	,6	,4	,1	,7	,4	,1	,10	,4	,4]
    },
    {
        name: 'Cockroach',
        data: [	4,	2,	7,	10,	7,	7,	1,	6,	4,	2,	""]
    }];
    var category=['December','January','	February','	March','	April','	May','	June','	July','	August','	September','	October','	November'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Month";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
};

//Customer View Chart -2
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
    // //console.log("called")
    // renderStackedChart(data,category2,title,yTitle,xTitle,'pest-vs-facility-client-view3');
};
customerViewChart23= function(id){
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
   // var category=['Nestle Tokyo','Nstle Osaka','	Nestle Osaka East','	Nestle tokyo East','	Nestle Tokyo','	Nestle Kobe'];
     var category=['Hilton Nagoya','Hilton Osaka','Hilton Narita','Hilton Tokyo','Hilton Resort'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Facility Name";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
    // //console.log("called")
    // renderStackedChart(data,category2,title,yTitle,xTitle,'pest-vs-facility-client-view3');
};
customerViewChart22= function(id){
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
   // var category=['Nestle Tokyo','Nstle Osaka','	Nestle Osaka East','	Nestle tokyo East','	Nestle Tokyo','	Nestle Kobe'];
     var category=['Yamanashi','Ehime','Inshikawa','Okinawa S','Okinawa N'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Facility Name";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
    // //console.log("called")
    // renderStackedChart(data,category2,title,yTitle,xTitle,'pest-vs-facility-client-view3');
};
// Pest Vs Time Customer View
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


//Heat map

//Prop View chart PestVs temp
propViewPestvsTemp= function(id){
    var data=[[0,0,0],
     [0,1,0],
     [0,2,1],
     [0,3,2],
     [0,4,4],
     [0,5,1],
     [0,6,0],
     [0,7,0],
     [0,8,0],
     [0,9,0],
     [0,10,0],
     [0,11,0],
     [1,0,0],
     [1,1,0],
     [1,2,4],
     [1,3,3],
     [1,4,2],
     [1,5,2],
     [1,6,0],
     [1,7,0],
     [1,8,0],
     [1,9,0],
     [1,10,0],
     [1,11,0],
     [2,0,0],
     [2,1,1],
     [2,2,2],
     [2,3,3],
     [2,4,1],
     [2,5,5],
     [2,6,5],
     [2,7,2],
     [2,8,3],
     [2,9,2],
     [2,10,0],
     [2,11,0],
     [3,0,0],
     [3,1,0],
     [3,2,0],
     [3,3,5],
     [3,4,8],
     [3,5,9],
     [3,6,6],
     [3,7,7],
     [3,8,4],
     [3,9,2],
     [3,10,0],
     [3,11,0],
     [4,0,0],
     [4,1,0],
     [4,2,2],
     [4,3,1],
     [4,4,4],
     [4,5,5],
     [4,6,4],
     [4,7,3],
     [4,8,0],
     [4,9,0],
     [4,10,0],
     [4,11,0],
     [5,0,0],
     [5,1,0],
     [5,2,3],
     [5,3,1],
     [5,4,2],
     [5,5,4],
     [5,6,6],
     [5,7,2],
     [5,8,1],
     [5,9,0],
     [5,10,0],
     [5,11,0],
     [6,0,0],
     [6,1,2],
     [6,2,2],
     [6,3,3],
     [6,4,2],
     [6,5,9],
     [6,6,7],
     [6,7,7],
     [6,8,6],
     [6,9,3],
     [6,10,2],
     [6,11,0]];

    var categoryX=['Rats','	Mice','	Bottle Fly','	House Fly','	Instar Bed Bug','	Adult Bed Bug','	Cockroach'];
    var categoryY=['5',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
    '60'];
    var title="";
    var yTitle='Temperature';
    var xTitle="Pest Type";
    renderHeatMap(data,categoryX,categoryY,title,yTitle,xTitle,id);
};
zoneViewChart2= function(id){
    var data=[[0,0,0],	[1,0,1],	[2,0,0],	[3,0,1],	[4,0,0],	[5,0,1],	[6,0,1],
    [0,1,0],	[1,1,1],	[2,1,0],	[3,1,0],	[4,1,0],	[5,1,0],	[6,1,0],
    [0,2,0],	[1,2,0],	[2,2,0],	[3,2,0],	[4,2,0],	[5,2,0],	[6,2,0],
    [0,3,0],	[1,3,0],	[2,3,0],	[3,3,0],	[4,3,0],	[5,3,0],	[6,3,3],
    [0,4,0],	[1,4,0],	[2,4,0],	[3,4,0],	[4,4,0],	[5,4,0],	[6,4,0],
    [0,5,0],	[1,5,0],	[2,5,0],	[3,5,0],	[4,5,0],	[5,5,0],	[6,5,0],
    [0,6,0],	[1,6,0],	[2,6,0],	[3,6,0],	[4,6,0],	[5,6,0],	[6,6,0],
    [0,7,0],	[1,7,0],	[2,7,0],	[3,7,0],	[4,7,0],	[5,7,0],	[6,7,0]];
   var categoryY=['Rat Sensor 1 - N ','Rat Sensor 2 - S','Rat Sensor 3 - E','Rat Sensor 4 - W','Rat sensor 5 - fridge','Rat sensor 6 - shelves','Rat sensor 7 - ceiling N','Rat Sensor 8 ceiling S'];
    var categoryX=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    //var categoryY=[1,2,3,4,5,6,7]
    var title="Activity vs time last 7 days";
    var yTitle='Sensor Name';
    var xTitle="Days";
    renderHeatMap(data,categoryX,categoryY,title,yTitle,xTitle,id);
};
flyCountvsTime= function(id){
    var data=[[0,0,0],
     [0,1,0],
     [0,2,0],
     [0,3,0],
     [0,4,0],
     [0,5,0],
     [0,6,0],
     [0,7,0],
     [0,8,0],
     [0,9,0],
     [0,10,0],
     [0,11,0],
     [0,12,0],
     [0,13,0],
     [0,14,0],
     [0,15,0],
     [0,16,0],
     [0,17,0],
     [0,18,0],
     [0,19,0],
     [0,20,0],
     [0,21,0],
     [0,22,0],
     [1,0,0],
     [1,1,0],
     [1,2,0],
     [1,3,0],
     [1,4,0],
     [1,5,0],
     [1,6,0],
     [1,7,0],
     [1,8,0],
     [1,9,0],
     [1,10,0],
     [1,11,0],
     [1,12,0],
     [1,13,0],
     [1,14,0],
     [1,15,0],
     [1,16,0],
     [1,17,0],
     [1,18,0],
     [1,19,0],
     [1,20,0],
     [1,21,0],
     [1,22,0],
     [2,0,0],
     [2,1,0],
     [2,2,0],
     [2,3,0],
     [2,4,0],
     [2,5,0],
     [2,6,0],
     [2,7,0],
     [2,8,0],
     [2,9,0],
     [2,10,0],
     [2,11,0],
     [2,12,0],
     [2,13,1],
     [2,14,0],
     [2,15,1],
     [2,16,0],
     [2,17,0],
     [2,18,0],
     [2,19,0],
     [2,20,0],
     [2,21,0],
     [2,22,0],
     [3,0,0],
     [3,1,0],
     [3,2,0],
     [3,3,0],
     [3,4,0],
     [3,5,0],
     [3,6,0],
     [3,7,0],
     [3,8,0],
     [3,9,0],
     [3,10,0],
     [3,11,0],
     [3,12,1],
     [3,13,1],
     [3,14,1],
     [3,15,0],
     [3,16,0],
     [3,17,0],
     [3,18,0],
     [3,19,0],
     [3,20,0],
     [3,21,0],
     [3,22,0],
     [4,0,0],
     [4,1,0],
     [4,2,0],
     [4,3,0],
     [4,4,0],
     [4,5,0],
     [4,6,0],
     [4,7,0],
     [4,8,0],
     [4,9,0],
     [4,10,0],
     [4,11,0],
     [4,12,1],
     [4,13,0],
     [4,14,2],
     [4,15,0],
     [4,16,0],
     [4,17,0],
     [4,18,0],
     [4,19,0],
     [4,20,0],
     [4,21,0],
     [4,22,0],
     [5,0,0],
     [5,1,0],
     [5,2,0],
     [5,3,0],
     [5,4,0],
     [5,5,0],
     [5,6,0],
     [5,7,0],
     [5,8,0],
     [5,9,0],
     [5,10,0],
     [5,11,0],
     [5,12,0],
     [5,13,0],
     [5,14,3],
     [5,15,2],
     [5,16,0],
     [5,17,0],
     [5,18,0],
     [5,19,0],
     [5,20,0],
     [5,21,0],
     [5,22,0],
     [6,0,0],
     [6,1,0],
     [6,2,0],
     [6,3,0],
     [6,4,0],
     [6,5,0],
     [6,6,0],
     [6,7,0],
     [6,8,0],
     [6,9,0],
     [6,10,0],
     [6,11,0],
     [6,12,0],
     [6,13,3],
     [6,14,3],
     [6,15,1],
     [6,16,0],
     [6,17,0],
     [6,18,0],
     [6,19,0],
     [6,20,0],
     [6,21,0],
     [6,22,0]];
    var categoryX=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var categoryY=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    var title="";
    var yTitle='Time';
    var xTitle="Day of week";
    renderHeatMap(data,categoryX,categoryY,title,yTitle,xTitle,id);
};
propViewChart4=function(id){
    var data=[{
        name: 'Rat',
        data: [2,	"",	1,	"",	"",	3,	2,	4,	4,	4,	5,	3]


    }, {
        name: 'Mouse',
        data:   [3,	4,	2,	"",	3,	5,	2,	"",	2,	5,	4,	4]


    }, {
        name: 'Bottle fly',
        data:   ["",	1,	3,	4,	"",	1,	3,	"",	1,	1,	"",	4]


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
        data:   ["",	4,	5,	1,	4,	4,	4,	1,	"",	3,	5,	1]


    },
    {
        name: 'Cockroach',
        data:  [5,	"",	2,	3,	3,	1,	5,	5,	2,	5,	3,	1]
    }];
    var category=['December','January','	February','	March','	April','	May','	June','	July','	August','	September','	October','	November'];
    var title="";
    var yTitle='Pest Alerts';
    var xTitle="Month";
    renderStackedChart(data,category,title,yTitle,xTitle,id);
};

//Prop View chart PestVs temp 2
propViewPestvsTemp2= function(id){
    var data=[[0,0,1],
     [0,1,3],
     [0,2,2],
     [0,3,3],
     [0,4,0],
     [0,5,1],
     [0,6,1],
     [0,7,0],
     [0,8,0],
     [0,9,1],
     [0,10,0],
     [0,11,0],
     [0,12,0],
     [0,13,0],
     [0,14,0],
     [0,15,0],
     [0,16,0],
     [0,17,0],
     [0,18,0],
     [0,19,0],
     [0,20,0],
     [0,21,0],
     [0,22,0],
     [0,23,0],
     [1,0,2],
     [1,1,1],
     [1,2,3],
     [1,3,4],
     [1,4,0],
     [1,5,0],
     [1,6,1],
     [1,7,0],
     [1,8,0],
     [1,9,0],
     [1,10,0],
     [1,11,0],
     [1,12,0],
     [1,13,0],
     [1,14,0],
     [1,15,0],
     [1,16,0],
     [1,17,0],
     [1,18,0],
     [1,19,0],
     [1,20,0],
     [1,21,0],
     [1,22,0],
     [1,23,0],
     [2,0,1],
     [2,1,2],
     [2,2,3],
     [2,3,1],
     [2,4,1],
     [2,5,2],
     [2,6,3],
     [2,7,4],
     [2,8,5],
     [2,9,6],
     [2,10,7],
     [2,11,6],
     [2,12,6],
     [2,13,7],
     [2,14,9],
     [2,15,8],
     [2,16,9],
     [2,17,6],
     [2,18,5],
     [2,19,4],
     [2,20,3],
     [2,21,1],
     [2,22,1],
     [2,23,0],
     [3,0,1],
     [3,1,2],
     [3,2,3],
     [3,3,1],
     [3,4,1],
     [3,5,2],
     [3,6,3],
     [3,7,4],
     [3,8,5],
     [3,9,6],
     [3,10,7],
     [3,11,6],
     [3,12,6],
     [3,13,7],
     [3,14,9],
     [3,15,8],
     [3,16,9],
     [3,17,6],
     [3,18,5],
     [3,19,4],
     [3,20,3],
     [3,21,1],
     [3,22,1],
     [3,23,0],
     [4,0,9],
     [4,1,9],
     [4,2,6],
     [4,3,7],
     [4,4,8],
     [4,5,9],
     [4,6,6],
     [4,7,5],
     [4,8,4],
     [4,9,4],
     [4,10,4],
     [4,11,2],
     [4,12,1],
     [4,13,0],
     [4,14,1],
     [4,15,1],
     [4,16,1],
     [4,17,0],
     [4,18,1],
     [4,19,1],
     [4,20,0],
     [4,21,2],
     [4,22,3],
     [4,23,6],
     [5,0,9],
     [5,1,9],
     [5,2,6],
     [5,3,7],
     [5,4,8],
     [5,5,9],
     [5,6,6],
     [5,7,5],
     [5,8,4],
     [5,9,4],
     [5,10,4],
     [5,11,2],
     [5,12,1],
     [5,13,0],
     [5,14,1],
     [5,15,1],
     [5,16,1],
     [5,17,0],
     [5,18,1],
     [5,19,1],
     [5,20,0],
     [5,21,2],
     [5,22,3],
     [5,23,6],
     [6,0,1],
     [6,1,1],
     [6,2,1],
     [6,3,0],
     [6,4,1],
     [6,5,0],
     [6,6,0],
     [6,7,0],
     [6,8,2],
     [6,9,7],
     [6,10,6],
     [6,11,5],
     [6,12,7],
     [6,13,8],
     [6,14,3],
     [6,15,2],
     [6,16,3],
     [6,17,4],
     [6,18,8],
     [6,19,7],
     [6,20,6],
     [6,21,4],
     [6,22,4],
     [6,23,2]];
    var categoryX=['Rats','	Mice','	Bottle Fly','	House Fly','	Instar Bed Bug','	Adult Bed Bug','	Cockroach'];
    var categoryY=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    var title="";
    var yTitle='Time';
    var xTitle="Pest Type";
    renderHeatMap(data,categoryX,categoryY,title,yTitle,xTitle,id);
};

//Range Chart
sensorMaintainance=function(id){
    var  data=[{x:10,x2:11,y:0,partialFill:1},
         {x:11,x2:12,y:1,partialFill:1},
         {x:11,x2:12,y:2,partialFill:1},
         {x:11,x2:12,y:3,partialFill:1}];
     var category=['Rat sensor 1 - N side','Rat sensor 2 - NW side','Rat sensor 3 - W side','Cockroach sensor 1 - N side','Cockroach sensor 2 - NW side','Cock roach sensor 3 - S side','Bottle Fly sensor 1- N corridor','House fly sensor 1 - S corridor'];
     var title="";
     var yTitle='Sensor Name';
     var xTitle="Time";
     renderRangeMap(data,category,title,yTitle,xTitle,id);
};

//efiiciency Chart

efficiencyChart=function(id){
    var data=[{
        name: 'Field Tech',
        color: palleteColors.adultBedBug,
        data: [15,0,36],
        pointPadding: 0.3,
        pointPlacement: -0.2
    }, {
        name: 'PortFolio Average',
        color: palleteColors.rats,
        data: [20,0,40],
        pointPadding: 0.35,
        pointPlacement: -0.2
    }, {
        name: 'Field Tech Maintainace',
        color: palleteColors.rats,
        data: [0,0.3,0],
        pointPadding: 0.35,
        pointPlacement: -0.2,
        yAxis:1
    }, {
        name: 'PortFolio Average Maintainance',
        color: palleteColors.mice,
        data: [0,0.25,0],
        pointPadding: 0.4,
        pointPlacement: -0.2,
        yAxis:1
    }];
    var category=['Response Time','Maintainance','Open Close Time'];
    var title="";
    var yTitle="Time (hrs)";
    var xTitle="";
    renderEfficiencyColumnChart(data,category,title,yTitle,xTitle,id);
};

sensorMaintainance2=function(id){
    var  data=[{x:2,x2:3,y:0,partialFill:1},
        {x:2,x2:3,y:1,partialFill:1},
        {x:2,x2:3,y:2,partialFill:1},
        {x:2,x2:3,y:3,partialFill:1},
        {x:2,x2:3,y:4,partialFill:1},
        {x:2,x2:3,y:5,partialFill:1},
        {x:3,x2:4,y:6,partialFill:1},
        {x:3,x2:4,y:7,partialFill:1},
        {x:10,x2:11,y:8,partialFill:1},
        {x:10,x2:11,y:9,partialFill:1},
        {x:10,x2:11,y:10,partialFill:1},
        {x:11,x2:12,y:11,partialFill:1},
        {x:11,x2:12,y:12,partialFill:1},
        {x:11,x2:12,y:13,partialFill:1},
        {x:12,x2:13,y:14,partialFill:1},
        {x:12,x2:13,y:15,partialFill:1}];
     var category=['Rat sensor 1 - N side - Hilton Tokyo','Rat sensor 2 - NW side - Hilton Tokyo','Rat sensor 3 - W side - Hilton Tokyo','Cockroach sensor 1 - N side - Hilton Tokyo','Cockroach sensor 2 - NW side - Hilton Tokyo','Cock roach sensor 3 - S side - Hilton Tokyo','Bottle Fly sensor 1- N corridor - Hilton Tokyo','House fly sensor 1 - S corridor - Hilton Tokyo','Rat sensor 1 - N side - Nestle Tokyo','Rat sensor 2 - NW side - Nestle Tokyo','Rat sensor 3 - W side - Nestle Tokyo','Cockroach sensor 1 - N side -Nestle Tokyo','Cockroach sensor 2 - NW side - Nestle Tokyo','Cock roach sensor 3 - S side - Nestle Tokyo','Bottle Fly sensor 1- N corridor - Nestle Tokyo','House fly sensor 1 - S corridor - Nestle Tokyo'];
     var title="";
     var yTitle='Sensor Name';
     var xTitle="Time";
     renderRangeMap(data,category,title,yTitle,xTitle,id);
};
alertViewRodents=function(id){
    var  data=[];
     var category=[];
     var title="Sensor Maintainance";
     var yTitle='Time';
     var xTitle="Sensor name";
     renderRangeMap(data,category,title,yTitle,xTitle,id);
};


//Bar Chart
rodentDirection= function(id){
    var data=[{name:"Enter R Leave Right",
                data:[2,	2,	2,	3,	2,	3,	3]},
                {name:"Enter L Leave L",
                data:["",	"",	1,	"",	1,	1,	""]},
                {name:"Enter R Leave L",
                data:[0,	0,	0,	2,	1,	2,	2]},
                {name:"Enter L Leave R",
                data:["",	"",	"",	1,	"",	"",	""]}];
    var category=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var title="";
    var yTitle='Pest Activity';
    var xTitle="Time";
     renderBarChart(data,category,title,yTitle,xTitle,id);
};
flyCount= function(id){
    var data=[{name:"Number of Flies",
                data:[0	,0,	2	,3	,3	,5	,7]
            }];
var category=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var title="";
var yTitle='Fly count';
var xTitle="Time";
renderBarChart(data,category,title,yTitle,xTitle,id);
};

gauge=function(id){
    //console.log("Guage")
    var data= [{
        name: 'Time',
        data: [25],
        tooltip: {
            valueSuffix: ' Mins'
        }
    }];
    rendergauge(data,id);
};

// Stacked Charts
renderStackedChart=function(data,category,title,yTitle,xTitle,id){
    Highcharts.chart(id, {
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        chart: {
            type: 'column',
            zoomType: 'x',
            style: {
                fontFamily: 'Catamaran',
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: title
        },
        xAxis: {
            categories: category,
            title: {
                text: xTitle
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: yTitle
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'top',
            y: 25,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false,
            margin: 30
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: data,
        colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]
    });
};

renderHeatMap=function(data,categoryX,categoryY,title,yTitle,xTitle,id){
    Highcharts.chart(id, {


            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1
            },


            title: {
                text: title
            },

            xAxis: {
                categories: categoryX,
                title:xTitle
            },

            yAxis: {
                categories: categoryY,
                title: yTitle
            },

            colorAxis: {
                min: 0,
                minColor: "#FFFFFF",
                maxColor: palleteColors.mice
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },

            // tooltip: {
            //     formatter: function () {
            //         return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
            //             this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            //     }
            // },

            series: [{
                name: 'Temperature',
                borderWidth: 1,
                data: data,
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }],
            colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]

        });
};
renderRangeMap=function(data,category,title,yTitle,xTitle,id){
    Highcharts.chart(id, {
    chart: {
        type: 'xrange'
    },
    title: {
        text: title
    },
    xAxis: {
        title:{
            text:xTitle
        }
    },
    yAxis: {
        title: {
            text: yTitle
        },
        categories: category,
        reversed: true
    },

    series: [{
        name: 'Project 1',
        borderColor: 'gray',
        pointWidth: 20,
        data: data,
        dataLabels: {
            enabled: true
        }
    }],
    colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]

});
};
renderBarChart=function(data,category,title,yTitle,xTitle,id){
    //console.log(id);
    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: category,
            crosshair: true,
            title:xTitle
        },
        yAxis: {
            min: 0,
            title: {
            text: yTitle
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: data,
        colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]
    });
};
rendergauge=function(data,id){
    Highcharts.chart(id, {
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },

            title: {
                text: 'Dwell Time'
            },

            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 60,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: palleteColors.adultBedBug,
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'Minutes'
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: palleteColors.houseFly // green
                }, {
                    from: 20,
                    to: 50,
                    color:palleteColors.houseFly // yellow
                }, {
                    from: 50,
                    to: 60,
                    color: palleteColors.houseFly // red
                }]
            },

            series:data

        },
        // Add some life
        // function (chart) {
        //     if (!chart.renderer.forExport) {
        //         setInterval(function () {
        //             var point = chart.series[0].points[0],
        //                 newVal,
        //                 inc = Math.round((Math.random() - 0.5) * 20);

        //             newVal = point.y + inc;
        //             if (newVal < 0 || newVal > 200) {
        //                 newVal = point.y - inc;
        //             }

        //             point.update(newVal);

        //         }, 3000);
        //     }
        // }
    );
};

renderActivitygauge=function(id){

    Highcharts.chart(id, {
        navigation: false,
            chart: {
                type: 'solidgauge',
                marginTop: 50
            },

            title: {
                text: 'Activity gauge',
                style: {
                    fontSize: '24px'
                }
            },

            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                positioner: function (labelWidth) {
                    return {
                        x: 300 - labelWidth / 2,
                        y:  180
                    };
                }
            },

            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{ // Track for
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: Highcharts.Color(palleteColors.adultBedBug)
                        .setOpacity(0.3)
                        .get(),
                    borderWidth: 0
                }, { // Track for
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: Highcharts.Color(palleteColors.bottleFly)
                        .setOpacity(0.3)
                        .get(),
                    borderWidth: 0
                }, { // Track for
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: Highcharts.Color(palleteColors.cockroach)
                        .setOpacity(0.3)
                        .get(),
                    borderWidth: 0
                },{ // Track for
                    outerRadius: '37%',
                    innerRadius: '16%',
                    backgroundColor: Highcharts.Color(palleteColors.houseFly)
                        .setOpacity(0.3)
                        .get(),
                    borderWidth: 0
                }]
            },

            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false,
                    rounded: true
                }
            },

            series: [{
                name: 'Enter R leave R',
                data: [{
                    color: palleteColors.rats,
                    radius: '112%',
                    innerRadius: '88%',
                    y: 61
                }]
            }, {
                name: 'Enter L leave L',
                data: [{
                    color: palleteColors.bottleFly,
                    radius: '87%',
                    innerRadius: '63%',
                    y: 10
                }]
            }, {
                name: 'Enter R leave L',
                data: [{
                    color: palleteColors.cockroach,
                    radius: '62%',
                    innerRadius: '38%',
                    y: 25
                }]
            },{
                name:'Enter L leave R',
                data: [{
                    color: palleteColors.houseFly,
                    radius: '37%',
                    innerRadius: '16%',
                    y: 4
                }]
            }],
            colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]
        }

        /**
         * In the chart load callback, add icons on top of the circular shapes
         */
        // function callback() {

        //     // Move icon
        //     this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        //         .attr({
        //             'stroke': '#303030',
        //             'stroke-linecap': 'round',
        //             'stroke-linejoin': 'round',
        //             'stroke-width': 2,
        //             'zIndex': 10
        //         })
        //         .translate(650, 26)
        //         .add(this.series[2].group);

        //     // Exercise icon
        //     this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
        //             'M', 8, -8, 'L', 16, 0, 8, 8])
        //         .attr({
        //             'stroke': '#ffffff',
        //             'stroke-linecap': 'round',
        //             'stroke-linejoin': 'round',
        //             'stroke-width': 2,
        //             'zIndex': 10
        //         })
        //         .translate(650, 61)
        //         .add(this.series[2].group);

        //     // Stand icon
        //     this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        //         .attr({
        //             'stroke': '#303030',
        //             'stroke-linecap': 'round',
        //             'stroke-linejoin': 'round',
        //             'stroke-width': 2,
        //             'zIndex': 10
        //         })
        //         .translate(650, 96)
        //         .add(this.series[2].group);
        //         this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        //         .attr({
        //             'stroke': '#303030',
        //             'stroke-linecap': 'round',
        //             'stroke-linejoin': 'round',
        //             'stroke-width': 2,
        //             'zIndex': 10
        //         })
        //         .translate(650, 111 )
        //         .add(this.series[2].group);
        // }
);




};

renderEfficiencyColumnChart=function(data,category,title,yTitle,xTitle,id){
    Highcharts.chart(id, {
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        chart: {
            type: 'column',
            zoomType: 'x',
            style: {
                fontFamily: 'Catamaran',
            }
        },
        title: {
            text: title
        },
        xAxis: {
            categories: category
        },
        yAxis: [{
            min: 0,
            title: {
                text: yTitle
            }
        }, {
            title: {
                text: xTitle
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: data
    });
};

polarChart=function(id){

    Highcharts.chart(id, {

        chart: {
            polar: true
        },

        title: {
            text: 'Zone Overview - Last 7 days'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
          //  categories: ['Rat Sensor 1 - N side','Rat Sensor 2 - S side','	Rat Sensor 3 - E side'],
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                    if(this.value === 0){
                        return "Rat Sensor 1 - N side";
                    }
                    else
                    if(this.value === 90){
                        return "Rat Sensor 3 - W side";
                    }
                    else if(this.value==180){
                        return "Rat Sensor 2 - S side";
                    }
                    else if(this.value==270){
                        return "Rat Sensor 3 - E side";
                    }
                    else if(this.value==360){
                        return "Rat Sensor 4- E side";
                    }
                    else if(this.value==315){
                        return "Rat Sensor 5 - Fridge";
                    }
                    else if(this.value==325){
                        return "Rat Sensor 6 - Shelf";
                    }
                    else if(this.value==45){
                        return "Rat Sensor 7 - Ceiling N";
                    }
                    else if(this.value==135){
                        return "Rat Sensor 8 - Ceiling S";
                    }
                    else{
                        return this.value + '°';
                    }
                }
            }
        },

        yAxis: {
            min: 0
        },

        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        // tooltip: {
        //     formatter: function () {

        //         return '<b>' + this. + '</b> sold <br><b>'
        //     }
        // },
        series: [{
            type: 'line',
            name: 'Rodent Activity',
            data: [4,1,0,3,0,0,0,0],
            pointPlacement: 'between'
        }],
        colors:[palleteColors.rats,palleteColors.mice,palleteColors.bottleFly,palleteColors.adultBedBug,palleteColors.cockroach,palleteColors.houseFly,palleteColors.instar]
    });
};
