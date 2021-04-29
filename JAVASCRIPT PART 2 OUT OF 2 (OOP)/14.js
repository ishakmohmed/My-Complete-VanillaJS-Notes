// video title: calling the super constructor!

function Shape(color) {
  // problem statement: now, Shape constructor has an argument which is color, what to do now??? answer is you needa call the super constructor (check down there) and pass argument.
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {// <<< obviously, needa add color parameter here in this method header!
  Shape.call(this, color); // calling the super constructor. <<< "this" inside call() is the instance of the circle object
  // instead of doing this ^^, if you call the Shape function like you'd usually do, and pass argument, it wouldn't work cause when you create a new Circle later on, the new keyword creates an empty object and points "this" to that object, but now it'll be on the window object. Btw, we don't wanna use the new keyword either because it'll create another new object, and set the color property on that object.
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);
