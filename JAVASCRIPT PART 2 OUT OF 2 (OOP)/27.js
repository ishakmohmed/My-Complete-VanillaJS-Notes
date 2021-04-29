// video title: Private Members Using WeakMaps >>>

// this is the 3rd approach (you'll understand this line if you look at the previous file)

// WeakMap is a new type in ES6 to implement private properties and methods in an object.

const _radius = new WeakMap(); // A WeakMap is essentially a dictionary where keys are objects and values can be anything. Reason for its name is that the keys are weak, such that if there are no references to these keys, theyll be garbage collected.
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius); // the first argument in set() has to be an object, it cannot be a symbol
    // this is how you set a private method (pass 2nd argument as a function) >>>
    _move.set(this, function () {
      console.log("move", this); // in this case, "this" is undefined because by default body of classes are executed in strict mode;
    });

    // how to change above method such that I can access the instance of the Circle object? ANSWER IS USE AN ARROW FUNCTION (Arrow functions use the "this" value of the containing function, "this" will be inherited from the constructor function), HERE WE GO >>>>>>>>>>>>>>
    // _move.set(this, () => {
    //   console.log("move", this);  // <<< now, "this" will be a Circle object/instance. So, now we can access all the public and private properties of the circle object in the move method.
    // });
  }

  draw() {
    console.log(_radius.get(this)); // note that first argument is a key, just like the set method
    _move.get(this)(); // "this" returns a function cause move up there is a function, so we can call that function
    console.log("draw");
  }
}

const c = new Circle(1); // in console, if you log c, you wont see the radius property, UNLESS YOU USE THE GET() METHOD.

//---------------------------------------------------
// MOSH DOESNT LIKE THIS APPROACH AND HE DOESNT RECOMMMEND IT (HE LIKES TO WORK WITH EACH PRIVATE MEMBERS INDEPENDENTLY), BUT IF YOU WANNA USE ONLY ONE WEAKMAP FOR ALL PRIVATE MEMBERS?????? >>>

// basically, you can just not worry if you dont really understand the below technique >>>

const privateProps = new WeakMap();

class ANOTHERCircle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {
        // ..............
      },
    });
    // since i used a single weakmap, if i wanna, say access the radius property, i would so something like >>>
    privateProps.get(this).radius;
  }

  // CODES SAME AS IN ABOVE CLASS, JUST FOCUS ON THIS ^^^ WHICH IS THE DIFFERENT METHOD!
}
