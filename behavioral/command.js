
class StockTrade {
  buy() {
    console.log('You want to buy stocks');
  }
  sell() {
    console.log('You want to sell stocks ');
  }
}

// Invoker
class Agent {
  constructor() {
    this.stockTrade = new StockTrade();
  }

  placeOrder(orderType) {
    switch(orderType) {
      case 'buy':
        this.stockTrade.buy();
        break;
      case 'sell:
        this.stockTrade.sell();
        break;
      default:
        console.error('Operation not found.');
        break;
    }
  }
}

const agent = new Agent();
agent.placeOrder('buy');
agent.placeOrder('sell');