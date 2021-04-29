// video title: inheritance >>>

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape { // inheritance in es6, just add the "extends" keyword like in Java, we dont have to reset the prototype, we dont have to reset the constructor (informal but true: its like circle object is now created by circle constructor, and shape object is created by shape constructor)!!!!!!!!!!!!
  constructor(color, radius) { // if you have a constructor in the parent class, and then you add a constructor in the derived class like here, inside of this constructor, you should make sure you call the parent constructor first to initialize that base object (SAME CONCEPT LIKE IN JAVA). 
    super(color); // use "super" keyword to reference the parent object
    this.radius = radius;
  }

  draw() { // will be available on the prototype (obviously)
    console.log("draw");
  }
}

const c = new Circle("red", 1);
