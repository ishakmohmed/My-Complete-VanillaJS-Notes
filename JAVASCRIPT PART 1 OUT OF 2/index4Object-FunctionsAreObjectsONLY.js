// LETS TAKE A LOOK AT "FUNCTIONS ARE OBJECTS" >>>>>>>>

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("lets draw!");
  };
}

// How is this function named Circle, an object? To prove that, head over to chromeDevTools and experiment with these commands >>> Circle.name OUTPUTS "Circle" WHICHIS name of the function, Circle.length OUTPUTS 1 WHICHIS the number of arguments.

// All objects has a constructor function, but what about function itself (which is an object too) ??????
// Circle.constructor OUTPUTS f Function() { [native code] } WHERE internally js engine will use this Function() constructor to create this Circle Object/Function.
const myCircle = new Circle(50);

// I guess to prove the f Function() >>>
// when we declare a function, internally, it is represented like this >>>
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function () {
    console.log("lets draw!");
  }
`
);

// NOW WE CAN CALL Circle1 just like we call the Circle function >>>

const circle = new Circle1(99);

// log in console > circle > it outputs {radius: 99, draw: ƒ}
// draw: ƒ()
// radius: 99
// ^^ WHICH MEANS IT'S A REAL CIRCLE OBJECT WITH THESE 2 MEMBERS

//----------------------------------------

// LETS TAKE A LOOK AT A COUPLE OF METHODS THAT ARE AVAILABLE IN OUR FUNCTIONS>>>>>>

Circle.call({}, 77); // first arg is this arg, needa pass E-M-P-T-Y empty obj & 'this' will refernce that empty object.
// ^ THIS EXPRESSION IS EXACTLY THE SAME AS BELOW LINE
const another2 = new Circle(77);
// ^above line without new keyword >>>
const another3 = Circle(2443); // now, theres no new keyword, so "this" points to global object, so to rewrite it using the call method,
Circle.call(window, 2443);

// alternative to .call() is .apply but instead of passing arguments explicitly, you pass them in an array, here we go >>>

Circle.apply({}, [1, 2, 3]); //useful if you already have an array!

//------------------
