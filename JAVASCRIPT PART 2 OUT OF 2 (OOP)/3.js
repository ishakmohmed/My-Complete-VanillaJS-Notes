// Abstraction
function Circle(radius) {
  let a, b, c; // draw function can access this due to closure!
  // ^^^ these variables are not part of this Object because we didn't use the "this" keyword, so these are only local variables inside this function!
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; //local var in this function.

  let computeOptimumLocation = function (factor) {};

  this.draw = function () {
    let x, y;
    // can't use "this" for below line because it's no longer a method in this object
    computeOptimumLocation(0.1); // you don't need "this" because of closure (kinda opposite of scope???): "what variable is accessible to inner function".
    console.log("drawwwwww");
    this.radius = 12; // needa use "this" in this case, because it's a member of the Circle object
  };
}
// ^ you can access "this" over here but not let!
// note: scope is temporary (every time you call a method, (x, y) will be recreated and reinitialized, and when the method finished execution, they die!)

// but, but, but

// closure (closure determines what variables will be accessible to an inner function)(inner functions can access accessable stuffs like defaultLocation in this case of parent function) is permanent, so the variable you could access (in this case a, b, c, defaultLocation, computeOptimumLocation) stays in memory even after the function finish executing!

const myCircle = new Circle(789);
