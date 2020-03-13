// Decorating constructors with new functionality ==============================
class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
    this.model = 'default';
    this.license = '00000-000';
  }
}

const testInstance = new Vehicle('car');

// New instance to be decorated
const truck = new Vehicle('truck');

// New functionality we're decorating truck with
truck.setModel = function(modelName) {
  this.model = modelName;
};

truck.setColor = function(color) {
  this.color = color;
}

// Decorating objects with multiple decorators =================================
class Macbook {
  cost() {
    return 997;
  }

  screenSize() {
    return 11.6;
  }
}

// Decorator 1
function memory(macbook) {
  const cost = macbook.cost();

  macbook.cost = function() {
    return cost + 75;
  }
}

// Decorator 2
function engraving(macbook) {
  const cost = macbook.cost();

  macbook.cost = function() {
    return cost + 200;
  }
}

// Decorator 3
function insurance(macbook) {
  const cost = macbook.cost();

  macbook.cost = function() {
    return v + 250;
  }
}

const mb = new MacBook();

memory(mb);
engraving(mb);
insurance(mb);