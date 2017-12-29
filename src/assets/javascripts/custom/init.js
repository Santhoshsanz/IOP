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


pestChart("pest-vs-facility");
pestChartPestVsTime("pest-vs-time");


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

var contentOneH = $('.content-pane-left').outerHeight();
var contentTwoH = $('.content-pane-right').outerHeight();
if (contentOneH > contentTwoH) {
    $('.content-pane-left').height(contentTwoH);
    $('.content-pane-left').addClass('mCustomScrollbar');
} else {
    $('.content-pane-right').height(contentOneH);
    $('.content-pane-right').addClass('mCustomScrollbar');
}


$('.add-scroll').mCustomScrollbar({
    "autoHideScrollbar": true
});
$('.options-button').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.options-button-block').find('.options-button-expand').animate({
        'width': 'toggle'
    }, 500, 'easeInOutExpo');
});
$('.options-button-expand-close').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.options-button-block').find('.options-button-expand').animate({
        'width': 'toggle'
    }, 500, 'easeInOutExpo');
});

