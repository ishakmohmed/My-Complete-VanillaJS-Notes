variable names cannot be a reserved keyword, cannot start with number, no space, no hyphen;
const interestRate = 0.3;

below are primitive values (5 + 1 values) >>>
let name = 'Mosh'; // String Literal, a fancy name for strings;
let age = 30; // Number Literal;
let isApproved = true; // Boolean Literal;
let firstName = undefined; //   or you can just not initialize it to get undefined;
// ^^^ undefined can be a type & also a value;
let selectedColor = null; // to explicitly clear the value or a variable; // selectedColor is an object;
there's also the symbol primitive in ES6 and "we're gonna learn it later in this course";
remember the typeof keyword to check the keyword type in console;

NOTE: in reference types, there are objects, arrays, and functions;

let person = { //this curly braces is an object literal;
  name: 'Mohmed Ishak', //name is a key, Ishak is a value, together, they are key-value pairs;
  age: 30
};
console.log(person);

// dot notation >>>
person.name = 'Mo Salah';
console.log(person.name);

// bracket notation >>>
person['name'] = 'Mary'; // inside square brackets > attribute in "" or '';
console.log(person.name);

let selectedColors = ["red", "blue"]; // array literal;
selectedColors[2] = 1;
console.log(selectedColors.length);
Note: array is an object;

Note: the default values of variables in JS is undefined;

function greet(name, lastName) {
  console.log("heyyy " + name + " " + lastName);
}
greet("Rashford", "Mark");

function square(number){
  return number * number;
}
console.log(square(2));

let x = 10;
let y = 3;

console.log(x % y);
console.log(x ** y); // x to the power of y;
console.log(++x);

x+=5, or x = x + 5;
NOTE: RELATIONAL OPERATORS ARE >, <, >=, and <=;
console.log(x >= 0), result is boolean either true or false;

NOTE: EQUALITY OPERATORS ARE ===, !==, ==, and !=;
x = 10;
y = 20;

Strict Equality operator (same type + value) >>>
console.log(x === 1);
console.log(x !== 1);
Lose Equality operator () >>>
console.log("1" == 1); // operator looks at value in the left side, in this case string, so it converts right to string. Same happens for booleans;
console.log(false == 0); //operator looks left > boolean > converts right to boolean. 0 means false, 1 means true;

ternary or conditional operator >>>
let points = 110;
let type = points > 100 ? "gold" : "silver";

logical operator are &&, ||, and !. RESULT OF LOGICAL EXPRESSIONS NOT NECESSARILY T/F;
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application refused', applicationRefused);

In chrome DevTools,
# false || true >>> true;
# false || 'Mosh' >>> "Mosh"; //if operand not boolean, js engine will try to interpret it as truthy which are (?????) or falsy which are undefined, null, 0, false, '', and NaN;
# false || 1 >>> 1;
# false || 1 || 2 >>> 1. Explanation: once truthy is found, it is returned right away, other operands are ignored, and this is called Short-circuiting;

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

LETS TAKE A LOOK AT BITWISE OPERATORS >>>>>>>>>>>>>>>>>>>>>>>>>>
 
1 = 00000001;
2 = 00000010;
for 2 lines below, it looks at 1 in binary and 2 in binary's vertical values and come up with a new value;
remember it's | and & and not || and &&;
console.log(1 | 2); // Bitwise OR. Result in 3;
console.log(1 & 2); // Bitwise AND. Result is 0;

const readPermission = 4; //think in binary (...100)
const writePermission = 2; //think in binary (...010)
const executePermission = 1; // think in binary (...001)
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; //Using Bitwise OR, im adding all these permissions because bitwise or (|) adds stuffs;
console.log(myPermission); // result in console is 6;

let hasParticularPermission = (myPermission & readPermission) ? "yes" : "no";
console.log(hasParticularPermission); //output is yes unless you remove readPermission about 5 lines above;

// basically, with bitwise OR I can add permission, with bitwise AND I can check to see if user has a given permission!

<<< MOSH ABOUT BITWISE OPERATORS: 1- they're not really practical in real life 2- "if this lecture is confusing, don't worry about it" >>>
