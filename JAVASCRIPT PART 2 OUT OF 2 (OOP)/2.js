// Object literals

const circleX = {
  radius: 1, // property (hold value)
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    // method (define logic). If obj has >=1 method, it has behaviours. If an obj does have behaviours, then creating with obj literal syntax is an issue (only if an object has behavior), solution: factory/constructor function.
    console.log("drawwww");
  },
};
// NOTE: property is used to hold value, method is used to define logic

// Factory function

function createCircle(radius) {
  return {
    radius, // if key & value same
    draw: function () {
      console.log("lukis");
    },
  };
}

const someCircle = createCircle(999);

// Constructor function

function Circle(radius) {
  console.log("THISSSS", this);
  this.radius = radius; // by default, "this" points to global (in browser, window obj, in node environment, global) object
  this.draw = function () {
    console.log("rawdraw");
  }; // you don't need to explicity > return this; cause the new keyword takes care of it
}

//for below, if no new keyword, we're defining above property methods on the global obj (in this case window obj)
const another = new Circle(98); // console.log("thiss", this) gets executed right away when you create an object, maybe it's because of the new keyword and maybe cause console.log up there doesn't start with "this", the point is when I create a new circle object, console.log('thisssss', this) gets executed right away, but console.log('drawwww') doens't get executed maybe cause it's part of a function, which doesnt exist on its own in the object like console.log('thissss', this)! 

//######################################################

// Constructor (same like in MOSH JAVA-1)- so refer that

// in console, another.constructor, and someCircle.constructor
// ^ output same as in Mosh JavaScript-1
// remember, every object has a constructor property, and that references the function that was used to create that object.

//---------------------------------

// Adding or Removing properties

function GreatCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new GreatCircle(10);

// Objects are dynamic >>>
circle.location = { x: 1 };
circle["anotherLOcation"] = { name: "Kuala Lumpur" }; // one usage of bracket notation: when you wanna dynamically access the property name.
// another usage: when you're using property names that aren't valid identifiers (like that which includes special characters (like hyphen) or space or whatever, in this file it is named "center-location", which is declared in the line below).

const propertyName = "center-location";

delete circle.location; // <<< or use bracket notation! a real world use case: when you get a user object from a database, and you want to return it to the client, but maybe that user object has certain properties you don't wanna send to client, like passwords and credit card info, in that case, you'll dynamically delete one or more properties from an object.
