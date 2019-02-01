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
    res.json(arrivals);
  });

  router.get('/departures',(req,res)=>{
    // Create array of flights departing
    var departures = [];
    data.forEach((item,index)=>{
      if(data[index]["ArrDep"] === 'D'){
        departures.push(data[index]);
      }
    });
    res.json(departures);
  });

  router.get('/flight/:FlightNo',(req,res)=>{
    // Loop through every item in the JSON, find matching FlightNo, get index and display
    data.forEach((item,index)=>{
      if(data[index]["FlightNo"] === req.params.FlightNo){
        // console.log("FOUND: ",data[req.params.FlightNo])
        res.json(data[index]);
      } else {
        // console.log("Found none");
      }
    });
  });

  return router;
}

module.exports = createRouter;
