export class Mediator {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (this.events[event]) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }

  publish(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(args));
    }
  }
}
