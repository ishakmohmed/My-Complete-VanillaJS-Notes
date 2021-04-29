// video title: Private members using symbols

class WEIRDCIRCLE {
  constructor(rrradius) {
    this.rrradius = rrradius; // just remember that another way to write this line is >>> this['rrradius'] = rrradius;
  }
}

// abstraction >>>

// 1st approach, Mosh said its a terrible approach (dont use this approach), the approach is USING UNDERSCORE PREFIX FOR PRIVATE PROPERTIES AND METHODS, its just a convention, but pretty much it still is public, but the developers should know it should be treated as private by looking at the underscore prefix.

// 2nd approach is ES6 symbols (3rd approach is maps in next lecture), which is a primitive

const _radius = Symbol(); // Symbol() is a function we call to generate symbol, which is a unique identifier, everytime we call this function, we get a unique identifier, its not a constructor function so you CANNOT >>> new Symbol(), because of this uniqueness so in console Symbol() === Symbol() returns false since everytime you call it, it returns a unique identifier, left and right is unique!
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius; // inside bracket notation, you can also pass a symbol as a property name (before ES6 symbol only string was allowed). When you log Circle object on the console, this property will be shown as >>> Symbol(99), NOT _radius!!!!!!
  }

  // this is how you implement a private method >>> in ES6, we have a feature called Computed Property Names, so we can add a square bracket and inside it place an expression, when that expression is evaluated, the resulting value will be used as the name of the property/method, so here the unique identifier from the Symbol() which is stored in _radius constant will be used as the NAME of this method , in this case in console, this draw method will be available in the prototype of circle object (obviously) and the exact name you'll see on console is Symbol(): f () , NOT _draw!!!!!!
  [_draw]() {
    //..........................
  }
} 

const c = new Circle(99);
// so now, you can't directly access _radius, so you cannot >>> c._radius, but there is a hack around that, here we go >>>
const key = Object.getOwnPropertySymbols(c)[0]; // if you use getOwnPropertyNames() instead like you learned before this, you'll get empty array on console, cause you dont have any regular properties, here I used another method called getOwnPropertySymbols() < returns an array of symbolsss instead. DONT WORRY ABOUT THE [0], CAUSE I JUST WANNA TAKE THE FIRST ELEMENT from the array AND LOG IT ON CONSOLE TO GET 99.
console.log(c[key]); // youll get 99

// NOTE: taking symbol(s) and storing it (in this case the first element of array) in key constant in this file and then logging it (c[key] not key only) is just for demonstration, its not something you should do, <<< that's what mosh said
