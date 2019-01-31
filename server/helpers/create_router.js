const PubSub = require('../../client/src/helpers/pubsub.js');
const express = require('express');

const createRouter = function(collection){
  const router = express.Router();
  const url = 'http://localhost:3000/api/flights.json';

  router.get('/',(req,res)=>{
    // res.sendFile('index.html');
    res.json(collection);
  });

  router.get('/flights',(req,res)=>{
    fetch(url)
    then(res => res.json())
    .then(data => PubSub.publish('Flights:data-ready',JSON.stringify(data)))
    .catch((error)=>{
      PubSub.publish('Flights:error',error);
    })
  });
}
