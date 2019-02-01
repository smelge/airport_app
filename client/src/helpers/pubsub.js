
const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    console.log(`Published: ${channel}`);
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    console.log(`Subscribed: ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
