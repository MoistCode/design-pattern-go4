const FOOTBALL = 'football';
const BASKETBALL = 'basketball';
const SOCCER = 'soccer';

class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;

      // Delegation
      if (type === FOOTBALL || type === SOCCER) ball = new Football();
      else if (type === BASKETBALL) ball = new Basketball();

      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    }
  }
}

class Football {
  constructor() {
    this._type = FOOTBALL;

    this.kick = function() {
      return `You kicked the football.`
    };
  }
}

class Basketball {
  constructor() {
    this._type = BASKETBALL;

    this.bounce = function() {
      return `You bounced the basketball`;
    }
  }
}

const factory = new BallFactory();

const myFootball = factory.createBall(FOOTBALL);
const myBasketball = factory.createBall(BASKETBALL);