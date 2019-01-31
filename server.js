var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/client/public'));

// set up router for input variable

router.use(function(req,res,next){
  console.log("/"+req.method);
  next();
})

router.use("/flights/flight/:flightNo",function(req,res,next){
  // Return all flights
  if(req.params.flightNo == ''){
    res.json({"message": "No flight selected"});
  }
  else next();
});

// Set up all required routes

router.get("/",function(req,res){
  res.sendFile("client/public/index.html",{"root":__dirname});
});

router.get("/flights",function(req,res){
  // Return all flights
  res.json({"message": "Updated List of flights"});
});

router.get("/flights/arrivals",function(req,res){
  // Return all Arriving flights
  res.json({"message": "Updated List of Arrivals"});
});

router.get("/flights/departures",function(req,res){
  // Return all flights
  res.json({"message": "Updated List of Departures"});
});

router.get("/flights/flight/:flightNo",function(req,res){
  res.json({"message":"Info for flight "+req.params.flightNo})
});

// Handle problem routes
// app.use("*",function(req,res){
//   res.status(404).send('Oh no! You\'re trying to find something that doesn\'t exist.');
// });

app.use("/",router);

app.listen(3000,function(){
  console.log("Server running on Port 3000");
});
