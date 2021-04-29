// video title: method overriding

// note: not much notes for this cause its the easiest thing to understand

class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    // method overriding, remember js engine will check for the method in the object itself, if no prototype, then parent
    super.move(); // this is how you call parents' method
    console.log("circle move");
  }
}

const c = new Circle();
