// GETTERS AND SETTERS >>>
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  // 1 way to get the defaultLocation from outside (but it'd be nicer if I can access this like a property rather than a method) >>>
  // this.getDefaultLocation = function() {
  //   return defaultLocation;
  // }
  //-----------------------------------------------------------------
  // 2nd way, define getter and setter >>>>>>>>>>>>>>>>>>>
  // for below, you can also use defineProperties if you wanna define multiple properties in one go!
  Object.defineProperty(this, "defaultLocation", {
    // arg1: obj you wanna add property to, arg2: property name, arg3: key-value pair (getters &/or setters) >>>
    get: function () {
      return defaultLocation;
    },
    set: function (valueObj) {
      if (!valueObj.x || !valueObj.y) throw new Error("Invalid location");
      defaultLocation = valueObj;
    },
  });
  //-----------------------------------------------------------------
  this.draw = function () {
    console.log("draww");
  };
}

const ishaksCircle = new Circle(999);
ishaksCircle.defaultLocation = { x: 500, y: 600 }; // you'll not see it in VSCode intellisense as a property, but don't worry, just do it!
