// video title: Prototype vs Instance members

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const c1 = new Circle(500);
// const c2 = new Circle(600);

// problem statement: if I create 1000 objects in memory, there'll be 1000 copies of draw method, wasting a lot of memory, solution is prototypical inheritance (note that js engine will search for a property in an object itself FIRST, and only then if it doesn't exist it searches the prototype), using this we'll have only one single instance of prototype in memory which we call circle base, so also single instance of draw() method! THIS IS HOW WE DO IT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// NOTE: THERE ARE TWO TYPES OF MEMBERS IN JAVASCRIPT, INSTANCE MEMBERS AND PROTOTYPE MEMBERS!

function Circle(radius) {
  // INSTANCE MEMBERS
  this.radius = radius;
  this.move = function () {
    this.draw(); // <<< all these are instance member, but we can access prototype members (like draw() down there in prototype) like this one and vice versa
    console.log("move");
  };
}

const c1 = new Circle(500);
const c2 = new Circle(600);

// PROTOTYPE MEMBERS
Circle.prototype.draw = function () {
  // this.move(); // <<< in prototype, we can access instance members and vice versa!
  console.log("draw");
};

// when you log c1 or c2 in console now, you'll see this object has radius property, and the draw method will be on the prototype, because of the prototypical inheritance, these 2 objects can access the draw() method!

// LET'S OVERRIDE THE TOSTRING() METHOD >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Circle.prototype.toString = function () {
  return "Ciirrrcllle withh radius >>> " + this.radius;
};

// so now in console, if you > c1.toString(), ^^^ this will get displayed instead of "[object Object]", note that when you call this method, JS engine will look for this method in this object, if doesn't exist, it'll look for it's prototype!

// NOTE: "ALL CONSTRUCTORS HAVE A PROTOYPE PROPERTY". But, I don't know if factory functions have it too, what I know is that Constructor functions have prototype property.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: iterating instance vs prototype members

console.log(Object.keys(c1)); // <<< only returns instance members

for (let key in c1) {
  console.log(key); // <<< HOLY HELL, it RETURNS ALL MEMBERS (instance + prototype), sometimes in JS, they'll use own instead of instance, so in this case (own + prototype)
}

// IMPORTANT NOTE: SOMETIMES IN JAVASCRIPT, DEVELOPERS/DOCUMENTATION WILL REFER TO INSTANCE AS OWN, SO INSTEAD OF INSTANCE MEMBERS, THEY'LL SAY OWN MEMBERS, DON'T WORRY ABOUT IT...

//... REFERRING TO ABOVE "IMPORTANT NOTE", theres something you need to remember,
// IN CONSOLE,
// (new keyword >>>>>>>>>>>>>)
// c1.hasOwnProperty('radius')
// returns true
// c1.hasOwnProperty('draw')
// returns false

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: Avoid extending the built-in objects

// now, you might be tempted to do something like this >>>

Array.prototype.shuffle = function () {
  // adding a new method
  //...
};

const array = [];
array.shuffle();

// LESSON OF THIS VIDEO: you should avoid modifying the built-in objects in javascript although you can,
// because it's possible that tomorrow youre gonna use a library, and in that library someone has also extended the array prototype and added a shuffle method, but with different implementation. Also nothing stops the developers of js from adding this method to arrays in future versions of JS. HERE'S THE LESSON >>>
// DON'T MODIFY OBJECTS YOU DON'T OWN!
// lets say you delete a method from a built-in object, and you use a library, there might be codes that will be dependent on that method, and this will create all sorts of issues.
