class BallFactory {

  static FOOTBALL = 'football';
  static BASKETBALL = 'basketball';
  static SOCCER = 'soccer';

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

const myFootball = factory.createBall(BallFactory.FOOTBALL);
const myBasketball = factory.createBall(BallFactory.BASKETBALL);