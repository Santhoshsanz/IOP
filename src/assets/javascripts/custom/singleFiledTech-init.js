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
efficiencyChart("efficiency");

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
sensorMaintainance2("sMaintainance2"); 