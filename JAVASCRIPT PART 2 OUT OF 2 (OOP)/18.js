// video title: Mixins!

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking...");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming...");
  },
};
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// first way is to mix stuffs to an object >>>
const person99 = Object.assign({}, canEat, canWalk);

// 2nd way involves constructor function, so you mix stuffs in Alien.prototype, only then create objects >>>
function Alien() {}

Object.assign(Alien.prototype, canEat, canWalk); // modified Alien prototype and added the capability to walk;

// now, I can >>>
const alien1 = new Alien();

//---------------------------------------------------------------------------------------------------------

function Goldfish() {}

// now I'm gonna extract the Object.assign() logic into a function!

function mixin(target, ...sources) {
  // REST operator collects all arguments and then turn them into an array!
  Object.assign(target, ...sources);
}

mixin(Goldfish.prototype, canEat, canSwim); // since I created this function, i can just use this function for alien up there, but i only used it for goldfish, so you know both way, if you're confused, just remember that I only applied mixin function above for Goldfish only.
