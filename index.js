module.exports = {
  subscribers: {},

  on: function(event, callback) {
    var cb = Function.prototype.bind(callback);
    (this.subscribers[event] = this.subscribers[event] || []).push(cb);
    return cb;
  },

  off: function(id) {
    for (var event in this.subscribers) {
      var event_subscribers = this.subscribers[event];
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

  send: function(event, data, source) {
    var event_subscribers =
      (this.subscribers[event] || []).concat(this.subscribers["*"] || []);
    for (var i = 0; i < event_subscribers.length; i++) {
      event_subscribers[i](event, data, source, event_subscribers);
    }
  }
};
