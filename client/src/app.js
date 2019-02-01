const Flights = require('./models/flight_model.js');
const ListView = require('./views/list_view');

document.addEventListener('DOMContentLoaded', () => {

  const flightListElement = document.querySelector('ul#flight-list');
  const flightListView = new ListView('flights', flightListElement);
  flightListView.bindEvents();

  const apiUrl = 'http://localhost:3000';

  const flights = new Flights('flights', `${apiUrl}/flights`);
  flights.bindEvents();
  flights.getData();
});
