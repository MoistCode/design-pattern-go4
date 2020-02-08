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