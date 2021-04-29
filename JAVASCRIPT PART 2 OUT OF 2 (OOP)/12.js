// video title: Creating Your Own Prototypical Inheritance
// informal: what we're doing is that we're gonna create a shape prototype and define common stuffs over there, and then make Cirle and Square (Square code isn't written here, but you'd get it) inherit from it.

// what's happening is that c is inheriting from Circle base (Cirle.prototype), and Circle base inherits from object base...
// Similarly, s inherits from Shape base (Shape.prototype), and Shape base inherits from object base...

// now, we wanna do this >>> c inherits from Circle base, but then, Circle base, inherits from Shape base, and Shape base finally inherits from Object base!
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// initially, by default it was like this >>> Circle.prototype  = Object.create(Object.prototype); now >>>

// In JavaScript, we have a method for creating an object with a given prototype >>>
// I'm gonna reset Circle.prototype below >>>
Circle.prototype = Object.create(Shape.prototype); // returns an object that inherits from Shape base
// ^^^ informal but correct: create an object such that it's prototype is Shape.prototype or shapeBase;
Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

// now after prototypical inheritance, you can do these >>>
c.draw(); // from prototype of Circle
c.duplicate(); // from shape base (because all kinds of shapes have duplicate() method!)

