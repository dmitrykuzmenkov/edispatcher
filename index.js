module.exports = {
  subscribers: {},

  on: function(event_name, callback) {
      (this.subscribers[event_name] = this.subscribers[event_name] || []).push(
        callback
      );
      return callback;
  },

  off: function(id) {
    for (var event_name in this.subscribers) {
      var event_subscribers = this.subscribers[event_name];
      for (var i = 0; i < event_subscribers.length; i++) {
        if (event_subscribers[i] === id) {
          event_subscribers.splice(i, 1);
        }
      }
    }
  },

  all: function(callback) {
    return this.on("*", callback);
  },

  send: function(event_name, data, source) {
    var event_subscribers =
      (this.subscribers[event_name] || []).concat(this.subscribers["*"] || []);
    for (var i = 0; i < event_subscribers.length; i++) {
      event_subscribers[i](event_name, data, source, event_subscribers);
    }
  }
};
