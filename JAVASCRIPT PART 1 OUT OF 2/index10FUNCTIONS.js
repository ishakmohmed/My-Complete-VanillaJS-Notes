// Function Declaration (By convention no semicolon && YOU CAN CALL IT BEFORE DECLARED- REASON IS HOISTING PROCESS, WHERE JS ENGINE WILL AUTOMATICALLY MOVE FUNCTION DECLARATION TO THE TOP, AND HOISTING IS DONE AUTOMATICALLY BUT ONLY FOR FUNCTION DECLARATION, NOT FUNCTION EXPRESSION)
function walk() {
  console.log("WALK");
}

// Anonymous Function Expression (Need semicolon cause it's a variable && NO HOISTING!!!!!!!!!!!!!!!!)
let run = function () {
  console.log("RUN");
};

let move = run;
run();

move();

// Named Function Expression (Need semicolon cause it's a variable && NO HOISTING !!!!!!!!!!!!!!!!!!)
let runn = function runFast() {
  console.log("LETS RUN");
};

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//@@@@@@@@@@@ NOTE: 1 + undefined (like when you don't initialize a number) = NaN, undefined + undefined = NaN;@@@@@@@@@@@@@

//@@@@@@@@@@  NOTE: when you pass 5 arguments to a function that takes 2 arguments, only the first 2 arguments are dealt with!   On the other hand, if you pass 10 arguments to a function that takes 30 arguments, the other 20 are set as undefined! @@@@@@@@@@@@@@

function justToLogArguments(a, b) {
  console.log(arguments); // arguments is a special object in javaScript
  return a + b;
}

console.log(justToLogArguments(7, 8));

// OUTPUT OF ARGUMENTS IN CONSOLE >>>>>>>>>>>>>>>
// this one is an object, not an array (although it looks like an array), but surprisingly it has got iterator, so you can use for of loop in this thing although it is an object!

// Arguments(2) [7, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 7 <<<<<<<<< 0 is first index, 7 is first argument
// 1: 8
// callee: ƒ justToLogArguments(a, b) <<< callee: currently executing function
// length: 2
// Symbol(Symbol.iterator): ƒ values() <<<<< Symbol.iterator means this obj has iterator
// __proto__: Object

//------------------------------------------------------

// LET'S SEE HOW TO USE arguments (understand that you can iterate over arguments)>>>>>>>>>>>>>

function addUnknownAmountOfNumbers() {
  let total = 0;
  for (let value of arguments) total += value; //basically "arguments" just comes outta nowhere!

  return total;
}

console.log(
  "Output of addUnknownAmountOfNumbers() is >>> " +
    addUnknownAmountOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 10, 100)
);

//------------------------------------------------------

// A BETTER WAY (USING REST OPERATOR) THAN USING ARGUMENTS LIKE  in ^^^^^^^^^^^^^^^^^^^^^^^^ >>>

function aaddddNums(...args) {
  //btw, args here is just a custom var unlike fixed var like "arguments" above, and its an ARRAY!
  //this is the Rest operator, looks like spread operator, but since it's declared in the place of arguments in a function, so you name it as Rest operator!
  return args.reduce((a, b) => a + b);
}

console.log(aaddddNums(7, 8, 9, 10)); // note: everything works fine, it might not work as expected in this file, but if you copy this code snippet to another file, then it'll work fine!

// $$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$

// NOTE: Rest parameter must be last formal parameter, means it needs to be the last parameter in parantheses of functions! The reason its called Rest parameter is because we can have 0 or more parameters before it, and the "rest" of the parameter must be a Rest parameter!

function shoppingTotalWithDiscount(discount, ...eachPrice) {
  const total = eachPrice.reduce((a, b) => a + b);
  return (1 - discount) * total;
}

console.log(shoppingTotalWithDiscount(0.5, 10, 10));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// LETS TAKE A LOOK AT DEFAULT VALUES FOR A PARAMETER OF FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function interest(principal, rate, years) {
  rate = rate || 3.5; //rate is whatever passed, if no default value 3.5 (truthy)
  years = years || 5; // years is whatever passed, if no default value is 5 (truthy)
  return ((principal * rate) / 100) * years;
}

console.log(interest(150000, 5, 10));

// BETTER WAY TO SET DEFAULT VALUES INSTEAD OF TRUTHY IN ES6 >>>>>>>>>>>>>>>.

function interestCalculator(principal, rate = 3.5, years = 5) {
  // but if you use this technique, when you set default value for a parameter, the parameters after that need to have default values too! BBBBBBBBBBUUUUUUUUUUTTTTTTTTTT if you don't wanna do that, means if you wanna pass default value to only 1 parameter, then make that parameter as the last one in the parantheses!
  return ((principal * rate) / 100) * years;
}

console.log(interestCalculator(150000, 5, 10)); // if you don't wanna pass the middle value relying in default value, you can > interestCalculator(150000, undefined, 10);
