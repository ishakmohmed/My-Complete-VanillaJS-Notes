// video title: MODULES
// split code into multiple files and we call each of these files a module
// Benefits:
// 1- Maintainability- cause code is better organized
// 2- Can reuse one or more of these modules in different parts of an application or in different applications
// 3- can abstract code
const _radius = new WeakMap();

class Circle {
  construcutor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius >>> " + _radius.get(this));
  }
}

const c = new Circle(999);
// yeah you cant c._radius because its a private property, UNLESS you have access to the WeakMap, so you can use the get method >>>
console.log(_radius.get(c)); // <<< 999 will be returned, so to apply the abstraction, we should place the Circle class and the WeakMap above it in a separate file or module, and then only expose the Circle class to the outside, SO NOW YOU CANNOT ACCESS THE RADIUS LIKE YOURE DOING IN THIS FILE!
c.draw();

//---------------------------------------

// BRIEF HISTORY OF MODULES IN JAVASCRIPT >>>

// in ES5, there were no modules. Smart Developers in the community introduced new syntaxes to define modules. We refer to these syntaxes as module formats. Popular module formats are >>>>>>>>>>>>>>>>>>

// 1- AMD (Asynchronous Module Definition) => primarily used in browser applications
// 2- CommonJS => used in Node.js
// 3- UMD (Universal Module Definition) => can be used both in the browser and in node.js

// ^^^ we use these three in es5, but as of es6, javascript natively supports a module format >>>
// 4- ES6 Modules => used in Browser

// NOTE: WERE GONNA FOCUS ON COMMONJS AND ES6 MODULES BECAUSE COMMONJS IS USED IN NODE.JS AND ES6 MODULES IS USED IN BROWSER, so pretty much you dont needa learn the other modules unless youre maintaining a legacy application
