// const PubSub = require('../helpers/pubsub.js');

const Flight = function(url){
  this.url = url;
  this.flight = null;
};

Flight.prototype.getData = function(){
  fetch(this.url)
    .then(res => res.json())
    .then(data => PubSub.publish('Flights:data-ready',JSON.stringify(data)))
    .catch((error)=>{
      PubSub.publish('Flights:error',error);
    })
};
module.exports = Flight;
