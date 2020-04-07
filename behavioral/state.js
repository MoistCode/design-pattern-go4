class WorldState {
  constructor(container) {
    this.container = container;
    this.value = 'World';
  }

  next() {
    return new HelloState(this.container);
  }
}

class HelloState {
  constructor(container) {
    this.container = container;
    this.value = 'Hello';
  }

  next() {
    return new WorldState(this.container);
  }
}

class HeadingState {
  constructor() {
    this.state = new HelloState(this);
  }

  changeState() {
    this.state.next();
    return true;
  }

  getValue() {
    return this.state.value;
  }
}