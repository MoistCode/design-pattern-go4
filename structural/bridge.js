class Color {
  constructor(color) {
    this.color = color;
  }
}

class Blue {}
class Yellow {}

class Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
}

class Square {
  constructor(color) {
    this.shape = new Shape('square', color);
  }

  getColor() {
    return this.shape.color;
  }
}

class Circle {
  constructor(color) {
    this.shape = new Shape('circle');
    this.color = color;
  }

  getColor() {
    return this.shape.color;
  }
}

const yellowSqare = new Square(Yellow);
const blueCircle = new Circle(Blue);

console.log(yellowSqare.getColor());
console.log(blueCircle.getColor());