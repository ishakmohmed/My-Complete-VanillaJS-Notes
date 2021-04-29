// video title: polymorphism (Mosh used the same example as in Java, it's pretty much the same thing, poly-many, morph-forms, so polymorphism means many forms)

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const c = new Circle();

// polymorphism here: we have many implementation or forms of the duplicate method;

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();

// note: I didn't experiment this but mosh wrote: if (shape.type === 'circle'), instead of using typeof, so I guess you can use typeof operator as well as .type only!

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: when to use inheritance? (note that there are no codes for this, only notes)

// don't use inheritance in small projects, unless you need it, cause it makes our code complex! Keep it simple, stupid!
// avoid creating inheritance hierarchies, because they are very fragile, if you wanna use inheritance keep it to 1 level, do not go more than 1 level of inheritance (IIRC, in Java tutorial, Mosh said use only 1 or 2 level, and not more than 3 level).
// There is a famous saying that goes "favor composition over inheritance"
// In javaScript, one can use Mixins to achieve composition
