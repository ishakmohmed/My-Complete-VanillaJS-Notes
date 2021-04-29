// just to remind myself, most of the codes below are from the previous files, I created them to make inheritance such that Circle, Square, Triangle, etc, can extend to Shape.

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype = Object.create(Shape.prototype);
// note to myself: if you're confused, the constructor (function that was used to create the circle object) of the Circle is in the prototype (when code is above line is commented out aka in default implementation)!

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

c.draw();
c.duplicate();

// video title: Resetting the constructor >>>

new Circle.prototype.constructor(9999); // both lines are same because constructor is in the prototype unless you do this >>> Circle.prototype = Object.create(Shape.prototype);
new Circle(9999);

// PROBLEM IS, AFTER YOU >>> Circle.prototype = Object.create(Shape.prototype), AND THEN WHEN YOU
// new Circle.prototype.constructor(), it returns Shape {} , not Circle {}. In other words, with what we have now we no longer can create circle objects based on this constructor in a dynamic fashion (I guess this long statement: Circle.prototype.constructor() is the dynamic fashion). The reason we're having this problem is because we reset the prototype of this Circle. Storytime: before resetting, it was Circle.prototype.constructor = Circle; <<< that's why new Circle.prototype.constructor() was the same as new Circle();

// THE MAIN MESSAGE IN THIS FILE: So as a best practice, whenever you reset the prototype of an object (I guess it usually happens when you wanna create prototypical inheritance), you should also reset the constructor.

// So >>>
Circle.prototype = Object.create(Shape.prototype); // "yeah, i want circle and triangle and haxagon to inherit from shape, but I don't want it that when you do new Circle.prototype.constructor(99999), you dont get circle object, instead you get the shape object instead like wth"
Circle.prototype.constructor = Circle; // <<< now we're adding this line. So now the problem is gone, but the inheritance is still present, niceeee!

// NOW, IF YOU >>> new Circle.prototype.constructor(1), you'll get Circle {radius: 1}, just like the default implementation, but the prototypical inheritance is present!
