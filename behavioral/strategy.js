/**
  When to use
    1. Different variations of algorithms and need to implement concrete class
    2. Conditional statements around several related algorithms
    3. Most classes have related behaviours (horizontal vs vertical inheritance)
  
  Advantages
    1. Easy to switch between different algorithms (strategies) in runtime because
        you're using polymorphism in the interfaces
    2. Avoid conditional-infested code
    3. Separate cocnerns into classes
 */

 class StrategyManager {
   constructor() {
     this._strategy = null;
   }

   set strategy(strategy) {
     this._strategy = strategy;
   }

   get strategy() {
     return this._strategy;
   }

   doAction() {
     this._strategy.doAction();
   }
 }

 class Strategy1 {
  doAction() {
     console.log('Strategy1');
  }
 }

 class Strategy2 {
   doAction() {
     console.log('Strategy2');
   }
 }

const strategyManager = new StrategyManager();
const strategy1 = new Strategy1();
const stragegy2 = new Strategy2();

strategyManager.strategy = strategy1;
strategyManager.doAction();

strategyManager.strategy = strategy2;
strategyManager.doAction();

// =============================================================================

class StrategyManager {
  constructor() {
    this._strategies = {};
  }

  addStrategy(strategy) {
    this._strategies[strategy._name] = strategy;
  }

  getStrategy(name) {
    return this._strategies[name];
  }
}

class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doAction() {
    this._handler();
  }
}

const strategyManager = new StrategyManager();
const strategy1 = new Strategy('strategy1', () => console.log('Strategy1'));
const strategy2 = new Strategy('strategy2', () => console.log('Strategy2'));

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

const strategyA = strategyManager.getStrategy('strategy1');
strategyA.doAction();

const strategyB = strategyManager.getStrategy('strategy2');
strategyB.doAction();

