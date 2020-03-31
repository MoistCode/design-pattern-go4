class HouseTemplate {
  constructor() {}

  buildFoundations() {
    console.log('builing foundations');
  }

  buildHouse() {
    this.buildFoundations();
    this.buildPillars();
    this.buildWalls();
  }

  buildWindows() {
    console.log('building windows');
  }

  buildPillars() {
    throw new Error('You have to build your own pillars.');
  }

  buildWalls() {
    throw new Error('You have to build your own walls.');
  }
}

class WoodenHouse extends HouseTemplate {
  constructor() {
    super();
  }

  buildWalls() {
    console.log('Building walls for wooden house.');
  }

  buildPillars() {
    console.log('Building pillars for wooden house.');
  }
}

class BrickHouse extends HouseTemplate {
  constructor() {
    super();
  }

  buildWalls() {
    console.log('Building walls for brick house.');
  }

  buildPillars() {
    console.log('Building pillars for brick house.');
  }
}