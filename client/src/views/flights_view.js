// const PubSub = require('../helpers/pubsub.js');

const FlightView = function(container){
  this.container = container;
};

FlightView.prototype.bindEvents = function(){
  // PubSub.subscribe('Flights:data-ready',(evt)=>{
  //   const flightObject = JSON.parse(evt.detail);
  //   // console.log("Flightobject: ",flightObject);
  //   flightObject.forEach((flightData,index)=>{
  //     this.render(flightData,index);
  //   })
  // })
};

// FlightView.prototype.render = function(flight){
//   const info = document.createElement('p');
//   info.textContent = JSON.stringify(flight.FlightNo);
//   this.container.appendChild(info);
// };

module.exports = FlightView;
