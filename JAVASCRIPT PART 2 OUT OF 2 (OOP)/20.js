// EXERCISE 1/2: Prototypical Inheritance >>>

// My answer, everything works fine, except that there's no prototypical inheritance, but all the logic is pretty good!

// function HtmlElement() {
//   this.click = function () {
//     console.log("clicked.");
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log("focused.");
// };

// function HtmlSelectElement(...array) {
//   let insideArray = undefined;

//   if (typeof array[0] === "array") insideArray = [...array];
//   else insideArray = [];

//   this.items = insideArray;

//   this.addItem = function (itemToAdd) {
//     insideArray.push(itemToAdd);
//   };

//   this.removeItem = function (itemToRemove) {
//     const positionInArray = insideArray.findIndex(
//       (element) => element === itemToRemove
//     );
//     insideArray.splice(positionInArray, 1);
//   };
// }

//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*
//*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&*

// MOSH'S ANSWER >>>>>>>>>>>>>>>>>>>>>>>>>>

function HtmlElement() {
  this.click = function () {
    console.log("clicked.");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused.");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// instead of HtmlSelectElement.prototype = Object.create(HtmlElement.prototype), I'm doing this >>>
// IMPORTANT NOTE: informal but true => in this case HtmlElement has click method, but if you connect HtmlSelectElement's prototype to prototype of HtmlElement using Object.create(), you're kinda skipping the actual HtmlElement and jumping straight to it's prototype, so in console, HSE's prototype will be an empty object (it's like supposedly empty object should be replace by actual HtmlElement), which will inherit from HtmlElement's prototype! So, we don't inherit the click method from HtmlSelectElement!
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// you can also create new HtmlSelectElement using this style >>>
new HtmlSelectElement.prototype.constructor(); // you wanna use this approach in your application if you have a function where you get a constructor dynamically, and you wanna create an instance of an object based on that constructor then you have to reset the constructor property.
