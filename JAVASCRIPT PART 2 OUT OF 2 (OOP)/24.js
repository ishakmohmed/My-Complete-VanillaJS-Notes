// video title: static methods

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method (available on instance of class, which is an object)
  draw() {
  }

  // Static method (available on the class itself): we often use them to create utility functions that are not tied to particular object
  static parse(str) { // to make this method static, add the static keyword! // when you create a circle object, you can't see this method on the console!
    const radius = JSON.parse(str).radius; // parse a JSON string and returns a new Circle object!
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);

// another example is Math, so you use Math.abs() right away without creating instance of Math.