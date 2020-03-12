class Observable {
  constructor() {
    this.observers = new Map();
  }

  add(observer) {
    this.observers.set(observer);
  }

  remove() {
    this.observers.delete(observer);
  }

  notify() {
    // Calls the update function implemented on all observers currently observing
    // this observerable
    for(let observer of this.observers) {
      observer.update();
    }
  }
}

class Observer {
  constructor(observable) {
    // Reference to the observable
    this.observable = observable;
    // Add self to the observable list of observers
    observable.add(this);
  }

  update() {
    // Do something to update the state of the observer
  }
}

