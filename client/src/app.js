// const PubSub = require('./helpers/pubsub.js');

const FlightView = require('./views/flights_view.js');
const HomeView = require('./views/home_view.js');
const Flight = require('./models/flight.js');

document.addEventListener('DOMContentLoaded',()=>{
  console.log('JS Loaded');

  // const home = document.querySelector('div#container');
  // const homeView = new HomeView(home);
  // // homeView.render();
  //
  // const flightsView = new FlightView(home);
  // PubSub.subscribe('Flights:data-ready',(evt)=>{
    // flightsView.render(evt.detail);
  // })
});
