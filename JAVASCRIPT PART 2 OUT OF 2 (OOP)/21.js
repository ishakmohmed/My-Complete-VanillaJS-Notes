// EXERCISE 2/2: Polymorphism >>>

// My solution, works PERFECT, all the requirements are met, everything is perfect, Mosh's solution is below that, maybe it'll be slightly efficient or maybe the same with mine, but basically my solution below is perfect (no compromises EXCEPT THAT MOSH'S SOLUTION IS SLIGHTLY EFFICIENT CAUSE HE USED TEMPLATE LITERALS, like really, trust me)!

// function HtmlElement() {
//   this.click = function () {
//     console.log("clicked.");
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log("focused.");
// };

// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItem = function (item) {
//     this.items.push(item);
//   };

//   this.removeItem = function (item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   };

//   this.render = function () {
//     let lists = [];

//     for (let key in this.items)
//       lists.push("<option>" + items[key] + "</option>");
//     lists = lists.join("");
//     return "<select>" + lists + "</select>";
//   };
// }

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// function HtmlImageElement(src = undefined) {
//   this.src = src;
//   this.render = function (src) {
//     return '<img src="' + this.src + '" />';
//   };
// }

// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;

// const elements = [
//   new HtmlSelectElement([1, 2, 3]),
//   new HtmlImageElement("http://www.youtube.com"),
// ];

// for (let element of elements) console.log(element.render());

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

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

  this.render = function () {
    return `
  <select>${this.items
    .map(
      (item) => `
    <option>${item}</option>`
    )
    .join("")} 
  </select>`; // IMPORTANT NOTE: MAP() METHOD RETURNS AN ARRAY!!!!!!!!!!!!!
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

//------------------------------------------------------------------
const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://www.youtube.com"),
];

for (let element of elements) console.log(element.render());
