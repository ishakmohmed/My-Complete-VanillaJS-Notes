const circle = { // objects are collections of key-value pairs
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() { // draw method (not function) because it is part of an object;  // an easier way would be to declare draw() {} right away???????????????
    console.log('draw');
  },      
};
------------------------------------------------------------
Weird way to remember: Factory and Constructor functions are like array for objects.

Factory Function >>>>>>>
function createCircle(radius) {
  return {
    radius, // or radius: radius;
    draw() { // instead of key-value pairs, there's a shortcut to declare methods too like in this line.
      console.log("draw");
    },
  }; // Actually, you needa return circle object (return variable) after the {};, but I'm taking another approach here, which is that I'm returning a {} which is an object
}

const circle1 = createCircle(1);
console.log(circle1);

---------------------------------------------------

Constructor Function (use Pascal notation by convention) >>>>>>>>
function Circle(radius) {
  // Instead of returning an object, we're using different approach to initialize object.
  this.radius = radius; 
  this.draw = function () {
    console.log("draw");
  };
  return this; // you don't need to explicitly write this statement, cause the new keyword later on will take care of it. 
}

const circle = new Circle(1); // when you use the new operator, 3 things happen. 1- the new operator creates an empty object (like const x = {};), 2- then it will set "this" to point to this object, 3- finally it will return the object from the function.

---------------------------------------------------
const ishaksCircle = {
  // const - you can't reassign this constant but you can always add or remove properties;
  radius: 1
};

// Objects are dynamic in JavaScript, which is why you can do all the stuffs below.
ishaksCircle.color = "red";
ishaksCircle.draw = function () {};

delete ishaksCircle.color;
delete ishaksCircle.draw;

console.log(ishaksCircle);

-------------------------------------------------------

Let's take a look at Constructor Property >>>>>

Every object in js has a property called constructor, and that references the function that was used to construct or create that object.
in Chrome devTools > another.constructor & circle.constructor.
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(2);

function Circle(radius) {
  this.radius = radius; // this, dot, completely new radius equals existing radius up there
  this.draw = function () { 
    console.log("draw");
  };
}
const another = new Circle(3);

another.constructor
THE OUTPUT IS >>>>>>>>>>>>>>>>>
ƒ Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

circle.constructor
THE OUTPUT IS (BUILT IN CONSTRUCTOR FUNCTION IN JS)>>>>>>>>>>>>
ƒ Object() { [native code] } // < built-in constructor functions, that's what happens when you create an obj using object literal syntax

NOTE: IN JS, WE HAVE A FEW OTHER BUILT IN CONSTRUCTORS, such as new String (); - but I can use string literals instead though '', "", or ``. There's also new Boolean(); - but I can use true/false instead. There's also new Number() - but I can use numbers like 1, 2, 3 instead;
