// video title: method overriding

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate in Shape prototype!");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  // method overriding, very important to place this after the extend function in above line cause there, I'm resetting the constructor, if you do so, then this implementation is gonna disappear.
  console.log("duplicate circle heh heh heh!");
  Shape.prototype.duplicate(); // if you're not using "this" in this implementation in this line (the reality is that there's no "this" in this implementation so this line works the same as below line), then you can write code like you did in this line, but if you did use "this", then do this >>>
  Shape.prototype.duplicate.call(this); // needa use the call method to set the context of "this"
};

const c = new Circle();
