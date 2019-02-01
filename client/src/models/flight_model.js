const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pubsub.js');

const Flights = function (category, url) {
  this.category = category;
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Flights.prototype.bindEvents = function () {
  PubSub.subscribe(`FormView:submit-${this.category}`, (evt) => {
    this.postData(evt.detail);
  });
};

Flights.prototype.getData = function () {
  this.request.get()
    .then((consumables) => {
      PubSub.publish(`Flights:${this.category}-data-loaded`, consumables);
    })
    .catch(console.error);
};

Flights.prototype.postData = function (formData) {
  this.request.post(formData)
    .then((consumables) => {
      PubSub.publish(`Flights:${this.category}-data-loaded`, consumables);
    });
};

module.exports = Flights;
