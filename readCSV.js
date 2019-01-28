var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream("headlines.csv")
    .pipe(parse())
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      for (i in csvData){
       var str=csvData[i].toString().split(" ");
       var re = /:\s|,\s/;
       var ar = str.toString().split(",");
       console.log("Word: "+ar)
    }
    });
