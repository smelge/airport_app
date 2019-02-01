const PubSub = require('../helpers/pubsub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('FlightInfo:flight-ready', (evt) => {
    console.log("Flight: ",evt);
    this.render(evt.detail);
  });
};

InfoView.prototype.render = function (flightDetails) {
  this.container.innerHTML = '';

  if(flightDetails.ArrDep == 'A'){
    var movingState = `Arriving: ${flightDetails.Time} on ${flightDetails.Date} (${flightDetails.ArrHall})`;
  } else if(flightDetails.ArrDep == 'D') {
    var movingState = `Departing: ${flightDetails.Time} on ${flightDetails.Date}`;
  } else {
    var movingState = 'Unknown';
  }

  // set up elements for display
  const flightNumber = document.createElement('h4');
  const divider = document.createElement('hr');

  // Set up content of elements
  flightNumber.textContent = `${flightDetails.FlightNo} to ${flightDetails.PortOfCallA}`;
  this.container.appendChild(flightNumber);
  this.container.appendChild(divider);

  const flightStatus = document.createElement('p')
  flightStatus.textContent = `Status: ${flightDetails.Status} - ${flightDetails.OtherInfo}`;
  this.container.appendChild(flightStatus);

  const flightAdditional = document.createElement('p')
  flightAdditional.textContent = flightDetails.Additional;
  this.container.appendChild(flightAdditional);

  this.container.appendChild(divider);

  const flightAirline = document.createElement('p')
  flightAirline.textContent = `Airline: ${flightDetails.Airline}`;
  this.container.appendChild(flightAirline);

  const flightMoving = document.createElement('p')
  flightMoving.textContent = movingState;
  this.container.appendChild(flightMoving);

  const flightImage = document.createElement('img')
  flightImage.setAttribute("src",flightDetails.Image);
  flightImage.setAttribute("class","img-fluid");
  flightImage.setAttribute("alt",`${flightDetails.Airline} Logo`);
  this.container.appendChild(flightImage);
};

module.exports = InfoView;
