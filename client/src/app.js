const Flights = require('./models/flight_model.js');
const ListView = require('./views/list_view.js');
const InfoView = require('./views/info_view.js');
const apiUrl = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', () => {
  // Handle Arrivals Board
  const flightListArrivalsElement = document.querySelector('div#flight-list-arrivals');
  const flightListArrivalsView = new ListView('flightsArrivals', flightListArrivalsElement);
  flightListArrivalsView.bindEvents();

  const flightsArrivals = new Flights('flightsArrivals', `${apiUrl}/flights/arrivals`);
  flightsArrivals.bindEvents();
  flightsArrivals.getData();

  // Handle Departures Board
  const flightListDepartElement = document.querySelector('div#flight-list-departures');
  const flightListDepartView = new ListView('flightsDepart', flightListDepartElement);
  flightListDepartView.bindEvents();

  const flightsDepart = new Flights('flightsDepart', `${apiUrl}/flights/departures`);
  flightsDepart.bindEvents();
  flightsDepart.getData();

  // Handle Flight Information
  const flightInfoWindow = document.querySelector('div#flight-info');
  const flightInfo = new InfoView(flightInfoWindow);
  flightInfo.bindEvents();
});
