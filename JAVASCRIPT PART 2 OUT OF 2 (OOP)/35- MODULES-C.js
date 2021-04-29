// by default, everything that we defined here is considered private, unless we explicitly export is using the export keyword

const _radius = new WeakMap();

export class Circle {
  // because of the export keyword, this will be exported to the outside, so when we import this entire module in another file, we'd be able to access this Circle class but not the WeakMap above!
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius >>>>>>>>>>> " + _radius.get(this));
  }
}

// IN ES6, WE USE "EXPORT" KEYWORD TO EXPORT ONE OR MORE OBJECTS, AND THEN IN OTHER MODULES, WE USE IMPORT TO IMPORT THOSE OBJECTS FROM OUR MODULES
