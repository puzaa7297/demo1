const ee = require('events');

class EventManagement extends ee {
  start() {
    this.emit('start', 'Event started');
  }

  inProgress() {
    this.emit('in-progress', 'Event in progress');
  }

  completed() {
    this.emit('completed', 'Event completed');
  }
}

module.exports = EventManagement;