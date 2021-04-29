// video title: getters and setters >>>

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // 2nd way (problem: syntax is very convoluted) >>>
    // Object.defineProperty(this, 'radius', {
    //   get: function() {
    //     // ------------------
    //   }
    // });
  }

  // 1st way (problem: itd be nicer if i can call the radius as a property not a function like here) >>>
  // getRadius() {
  //   return _radius.get(this);
  // }

  // 3rd way: THE ES6 TECHNIQUE >>>
  get radius() {
    // access this like a property, not a method!
    return _radius.get(this);
  }

  set radius(value) {
    // also access this like a property and assign value, not a method!
    if (value <= 0) throw new Error("invalid radius");

    _radius.set(this, value);
  }
}

const c = new Circle(999);
