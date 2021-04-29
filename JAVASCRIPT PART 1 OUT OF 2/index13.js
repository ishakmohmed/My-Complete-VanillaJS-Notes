// LOCAL VS GLOBAL SCOPE >>>

// JUST 1 THING YOU NEEDA REMEMBER > lets say you declare color=red globally, and color=blue one more time in a function. Its valid although same name, but local variable takes precedence!

//-----------------------------------------------------------------

// Let vs Var

function start() { // related to next subtopic: this is a global function (attached to window object, but we'll fix it when Mosh teaches about modules)
  for (var i = 0; i < 5; i++) {
    // problem with var, i is not limited to the code block it is defined, but func!
    console.log(i);
  }
  console.log(i); // can print cause i is var!
}

start();

// NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE: var: function-scoped, let and const: block-scoped;

var color = "red"; // attaches this global variable with window object! chromeDevTools > window.color . window object is something central, theres only 1 instance of it. If you use third party libary and it has variable with same name, that variable can override your variable!
let age = 30; // doesnt attach this global variable with window object! chromeDevTools > window.age
