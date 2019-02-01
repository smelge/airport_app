const PubSub = require('../helpers/pubsub.js');

const ListView = function (category, listElement) {
  this.category = category;
  this.listElement = listElement;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe(`Flights:${this.category}-data-loaded`, (evt) => {
    this.render(evt.detail);
  });
};

ListView.prototype.render = function (flightData) {
  this.clearList();
  flightData.forEach((item, index) => {
    const listItem = this.createListItem(item);
    this.listElement.appendChild(listItem);
  });
};

ListView.prototype.clearList = function () {
  this.listElement.innerHTML = '';
};

ListView.prototype.createListItem = function (item) {
  const listItem = document.createElement('p');
  const textContent = `${item.Time}, ${item.PortOfCallA}, ${item.FlightNo}, ${item.Status}, ${item.ArrDep}`;
  listItem.textContent = textContent;

  listItem.addEventListener('click',function(){
    PubSub.publish('FlightInfo:flight-ready',item);
  });

  return listItem;
};

module.exports = ListView;
