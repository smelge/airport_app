const express = require('express');
const createRouter = function(data){
const router = express.Router();

  router.get('/',(req,res)=>{
    res.json(data);
  })

  router.get('/arrivals',(req,res)=>{
    // Create array of flights arriving
    var arrivals = [];
    data.forEach((item,index)=>{
      if(data[index]["ArrDep"] === 'A'){
        arrivals.push(data[index]);
      }
    });
    if(arrivals.size == 0){
      res.send("There are currently no Arrivals");
    } else {
      res.json(arrivals);
    }
  });

  router.get('/departures',(req,res)=>{
    // Create array of flights departing
    var departures = [];
    data.forEach((item,index)=>{
      if(data[index]["ArrDep"] === 'D'){
        departures.push(data[index]);
      }
    });
    if(departures.size == 0){
      res.send("There are currently no Departures");
    } else {
      res.json(departures);
    }
  });

  router.get('/flight/:FlightNo',(req,res)=>{
    // Loop through every item in the JSON, find matching FlightNo, get index and display
    data.forEach((item,index)=>{
      if(data[index]["FlightNo"] == req.params.FlightNo){
        // console.log("FOUND: ",data[req.params.FlightNo])
        res.json(data[index]);
      }
    });
    // No flight matches? Error!
    res.send("No Flights found for that Flight Number");
  });

  return router;
}

module.exports = createRouter;
