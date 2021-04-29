// Intermediate Function Inheritance

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

//******************************************************** */
//******************************************************** */
//******************************************************** */
//******************************************************** */
//******************************************************** */
function extend(Child, Parent) {
  // this is Intermediate function inheritance. <<< you're refactoring codes such that you can use them for Circle and Square (these 2 are Child);
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
//******************************************************** */
//******************************************************** */
//******************************************************** */
//******************************************************** */
//******************************************************** */

function Circle(radius, color) {
  this.radius = radius;
}

//******************************************************** */
//******************************************************** */
extend(Circle, Shape); // now its easier to extend (informal but correct: connecting this base to that base)
//******************************************************** */
//******************************************************** */

Circle.prototype.draw = function () {
  console.log("draw");
};

//------------------------------------------------------------

function Square(size) {
  this.size = size;
}

//******************************************************** */
//******************************************************** */
extend(Square, Shape); // now its easier to extend (informal but correct: connecting this base to that base)
//******************************************************** */
//******************************************************** */

const s = new Shape();
const c = new Circle(1);
