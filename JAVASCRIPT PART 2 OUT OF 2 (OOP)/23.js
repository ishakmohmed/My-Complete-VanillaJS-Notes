// video title: ES6 Classes

// classes in js are essentially syntactic sugar over prototypical inheritance

//----------------------------------------------------------------------------------------
// constructor function >>>

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   }
// }
//----------------------------------------------------------------------------------------

// let's rewrite it using ES6 classes >>>>>>

class Circle {
  // in console, if you key in >>> typeof Circle >>> you'll get >>> "function", so they are constructor functions (like code above the dashed line)!
  constructor(radius) {
    // constructor is a special method used to initialize objects (hint: parameter, hint: things you want on object instance and not on prototype)
    this.radius = radius;
    this.move = function () {
      // this method is on the object instance, not on the prototype like method below
      console.log("move");
    };
  }

  draw() { // you don't use the "this" keyword, cause it's not inside the constructor
    // all the method that we add here will end up in the prototype of the Circle object, but if you dont want the method to end up on the prototype, you wanna declare it in the constructor
    console.log("draw");
  }
}

const c = new Circle(99); // C-L-A-S-S-E-S in ES6 enforce the use of the new operator (I mean like its pretty much a factory function), and if you forget to use the new operator, itll give you an error, trust me i saw the error!


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: Hoisting

// note: hoisting for function, notes are in the js1 by Mosh, its the same thing,
// what about hoisting for classes? >>>

// Class Declaration >>>>>>>
class Circle {

}

// Class Expression >>>>>>>
const Square = class { // Mosh has never seen any use case for class expression, he says pretty much everyone uses class declaration syntax, so stick to that cause that's simpler and cleaner!

};

// NOTE: BOTH CLASS DECLARATION AND CLASS EXPRESSION ARE NOT HOISTED !!!!!!!!!!!!!


