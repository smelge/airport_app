// import ''

// const PubSub = require('../helpers/pubsub.js');

const HomeView = function(container){
  this.container = container;
};

HomeView.prototype.render = function(){
  const info = document.createElement('p');
  info.textContent = "Home Page Content Here";
  this.container.appendChild(info);
};

module.exports = HomeView;
