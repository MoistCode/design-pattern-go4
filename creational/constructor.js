function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function() {
    return `${this.name} can ${this.specialAbility}`;
  };
}

class Hero {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;
  }

  getDetails = function() {
    return `${this.name} can ${this.specialAbility}`;
  }
}

const IronMan = new Hero('Iron Man', 'fly');

// A way to set properties
const newObject = {};

Object.defineProperty(newObject, 'someKey', {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});

// Shorthand for above
const definedProp = function(obj, key, value) {
  config.value = value;
  Object.defineProperty(obj, key, config);
}

const person = Object.create(null);

defineProp(person, 'car', 'deloran');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

// Defining multiple properties on an object
Object.defineProperties(newObject, {
  "someKey": {
    value: "Hello World",
    writable: true,
  },
  "anotherKey": {
    value: "Foo Bar",
    writable: false,
  }
});

// Can be used for inheritance
const driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph");
