// EVERYTHING ABOUT FUNCTIONS

//@@@@@@@@@@  ADDING ELEMENTS @@@@@@@@@@
const numbers99 = [3, 4];
// FOR ALL THESE 3 TECHNIQUES, WEIRD WAY TO REMEMBER - IT ADDS AS A BUNDLE INSIDE PARENTHESES, NOT ONE BY ONE;
// Add to end
numbers99.push(5, 6);
// Add to beginning
numbers99.unshift(1, 2); // pushes elements to the right and adds new elements to beginning
// Add to middle
numbers99.splice(2, 0, "a", "b"); // AT 2 element, delete 0 (or I guess replaces 0 elements at index 2) which is none or something like that, from the target add 'a' and 'b' before that element;
console.log(numbers99);
//----------------------------------------------------------

//@@@@@@@@@@@@ FINDING ELEMENTS (PRIMITIVES) @@@@@@@@@@
const numbers777 = [1, 2, 3, 4];

numbers777.indexOf("a"); // if console.log > result is -1, just like in Java
numbers777.indexOf(1); // result is 0;
numbers777.lastIndexOf(); // SELF EXPLANATORY;
numbers777.indexOf(1) !== -1; // if true, that means this element exists in this array, but the BETTER APPROACH WOULD BE LIKE IN THE BELOW LINE;
numbers777.includes(1); // if true, this element exists;
numbers777.indexOf(1, 2); // means you wanna search for 1, but start at index2, but when you output the result, you take into consideration all index;

//---------------------------------------------------------------

// @@@@@@@@@@@ FINDING ELEMENTS (REFERENCE TYPES) @@@@@@@@@@@@@@@@
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
// needa use find() or findIndex() method, and the key thing is that you needa pass a function inside this method, and inside that function needa pass an argument (that represents each elements in the array) to iterate through!
const course = courses.find(function (course) {
  //predicate/call back function because it is called back. NOTE!!!!!!!!: instead of find(), there's also findIndex(), and it returns the index (if exist > index, if doesnt exist > -1);
  return course.name === "a";
});

console.log(course); // it will return the object with the id and name > {id: 1, name: "a"} and NOT BOOLEAN LIKE TRUE OR FALSE BECAUSE THIS IS THE FIND METHOD, IT FINDS STUFFS!

// NOTE^: THE FIND METHOD RETURNS THE FIRST ELEMENT THAT IT'S SEARCHING FOR. IF IT DOESN'T EXIST, IT RETURNS UNDEFINED;

//---------------------------------------------------------------
//@@@@@@@@@@@@@ ARROW FUNCTIONS @@@@@@@@@@@@@@@@@@@@@

// better approach to predicate functions in ES6 > arrow function
const course1 = courses.find((course) => course.name === "a");
console.log(course1);
// STEP1: remove the word "function" and replace with arrow after argument (if has 1 parameter, can remove parantheses, if no parameter, insert empty parantheses)

// STEP2: after all these, if function is a single line of code and it is returning a value, get rid of return keyword, remove curly braces, and put everything in one line (without semicolon inside the bracket).
//--------------------------------------------------------------

//@@@@@@@@@@ REMOVING ELEMENTS @@@@@@@@@@@@@@@@@@
const numbers00000 = [1, 2, 3, 4];

//End
const last = numbers00000.pop();
console.log(numbers00000); // focus > in above line I stored result in last, but I am consoling numbers here, but the result will be array with the last number removed!!!

// Beginning
//same like with end, but you use >>>
const first1 = numbers00000.shift();

//END
//you know this, its the same splice method
numbers00000.splice(2, 1); // at 2 index, delete 1 element.... if you add more arguments to this method, you will end up adding those arguments as elements (just like you did above).

//----------------------------------------------------

//@@@@@@@@@@@ EMPTYING AN ARRAY @@@@@@@@@@@@@@@@

let set = [1, 2, 3, 4];
let another = set;

// Solution 1 (reassigning to a new empty array) MOSH LIKE 1&2
// numbers = [];
// the problem is even after emptying the numbers in above line, the another will still have the elements declared in the original array, which means numbers isnt gonna be garbage collected. You can use this solution if there's no references to the array that you're gonna empty

//Solution 2 (truncating the array) MOSH LIKES 1&2 (but prefers 2 even more!)
// numbers.length = 0;
// The good thing is that it's gonna empty the numbers and thats gonna be applied to numbers as well as the "another" variable like in this case!

//Solution 3 (splice method)
// numbers.splice(0, numbers.length);

//Solution 4 (the pop method) - MOSH DOESNT LIKE THIS METHOD!
// while (numbers.length > 0)
//   numbers.pop();

//-------------------------------------------------------------------
// @@@@@@ COMBINING AND SLICING ARRAYS (ES6 ALTERNATIVE IS BELOW EXCEPT FOR SLICING SPECIFICALLY) @@@@@@@

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // returns a new array
const slice = combined.slice(2, 4); // take the first index, don't take the 2nd index, so we get 3 and 4;
//NOTE ^^^ for combine.slice(), you can also not include the second index, so take  the first index, and take everything till end!!!!!!!!!!!!!!!!!! //ANOTHER NOTE: for combine.slice(), you can also not include the first index & second index at the same time, and you will get a copy of the array that you're dealing with, WEIRD WAY TO REMEMBER>>>> IF YOU DONT SPECIFY THE LEFT AND RIGHT INDEX IN SLICE, THAT MEANS YOU'RE SLICING THE WHOLE THING!!!!!!!!!!!!!

// if values are primitive types, the values are copied, if reference types, only the references are copied (not the value), so let's see what happens considering this fact in mind >>>>>>

const first2 = [{ id: 69 }];
const second2 = [4, 5, 6];

const combined1 = first2.concat(second2);
first2[0].id = 33;

console.log(combined1);
// the output is
// [{ … }, 4, 5, 6]
// 0: { id: 33 }    // it changed! if only first2 contained primitive types, it wouldnt change cause of obvious reasons (hint: sequence of declarations)
// 1: 4
// 2: 5
// 3: 6

//--------------------------------------------------------------------------

//@@@@@@@@@@@@@@@ THE SPREAD OPERATOR (in ES6) @@@@@@@@@@@@@@@@@@@@@

//THIS IS THE BETTER WAY TO combine arrays (instead of concat),
const ok = [1, 2, 3];
const lol = [4, 5, 6];

const combined2 = [...ok, "hahaha", ...lol]; //self-explanatory

const copy = [...combined2];

//-----------------------------------------------------------------------------

//@@@@@@@@@@@@@@@ ITERATING AN ARRAY @@@@@@@@@@@@@@@@
const liverpool = ["Mane", "Firmino", "Salah"];

// INTRODUCTION TO forEach loop (MEEETTHOODDDDD!!!!), which takes a function, which takes an iterating argument >>>>>>>>>>>>>

liverpool.forEach((element, index) => console.log(element, index)); //in forEach loop's function, it can OPTIONALLY take a second parameter, which is the index... REMEMBER, THE 2ND ARGUMENT IS THE INDEX, but when you print it obviously you can change the sequence according to how you wish!!!!!
//------------------------------------------------------------------

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ JOINING ARRAYS @@@@@@@@@@@@@@@@@@@@@@@@
// basically you join elements in 1 array and glue it together with custom separator (optional)(default separator is comma)(remember that you can pass empty ssstttrrriiinggg as a separator when needed);
const marks = [100, 200, 300, 400, 500];
const joined = marks.join(" AND "); //this method returns a string, the ' AND ' is my custom separator, and IT IS OPTIONAL (by default the separator is a comma), which is why VS CODE displayed '?';
console.log(joined);

//----------------------------------------------------------

//@@@@@@@@@@@@@@@@@@@@@@@@@@@ SORTING ARRAYS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const numbers20 = [6, 1, 8, 3, 9, 4, 2, 6, 4, 5];
console.log(numbers20.sort()); // converts each element to a string, and sorts them

console.log(numbers20.reverse()); //reverse stuffs, self-explanatory

// things get a little crazy when you wanna sort objects, needa do some EEXXTTTRRAA  work >>>>

const courses1 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
  { id: 3, name: "html" },
  { id: 4, name: "react" },
  { id: 5, name: "flutter" },
];

// basically you're still using the sort method, but with a little modification, which is why in the note few lines above, I wrote that "needa do some EEXXTTTRRRAA work >>>>"
courses1.sort(function (a, b) {
  // needa pass 2 arguments only, regardless of the number of things in array;
  const nameA = a.name.toLowerCase(); // or toUpperCase(), but both needa be the same!
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1; // fmi, means false because less than 0, could be -0.8 or smtg;
  if (nameA > nameB) return 1; // fmi, means true because more than 0, could be 0.8 or smtg;
  return 0; // if nameA === nameB, return 0, but this is the short form!
});

console.log(courses1);

//-----------------------------------------------------------------------------------------------------------------

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ TESTING THE ELEMENTS OF AN ARRAY @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// basically we're gonna learn about every() and some() in arrays.

const setX = [1, 2, 3, 4, 5, 6, 7];

// checks for every element
const allPositive = setX.every(function (value) {
  // you can also add index as argument!
  return value >= 0;
});

// the some() method check if at least 1 element matches this criteria!
const atLeastOnePositive = setX.some(function (value) {
  return value >= 0;
});

//---------------------------------------------------------

// @@@@@@@@ FILTERING AN ARRAY @@@@@@@@@@
// &&
// &&
// @@@@@@@@@@@@@@@@@ MAPPING AN ARRAY @@@@@@@@@@@@@@@@@@@@@

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((each) => each >= 0); // returns a new, filtered array!

console.log(filtered);

// map method, you're mapping each element to whatever you want!
// below method returns an array!
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';

// instead of mapping to string like in above method, now im gonna map to an object >>>>>>

const items = filtered.map((n) => {
  return { value: n }; // [THERES A WAY TO SOLVE >>>] you can't put these in a single line, if you do so, you'll get an array of undefined elements, cause JS engine will think that whatever after => is a code block.
  // BUT BUT BUT BUT BUT, if you wanna put it in single line, WWWWWWWWWWWWWWWRRRRRRRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP { value: n} in a parantheses!
});

console.log(items);

// WHATEVER BELOW THIS IS ONLY FOR METHOD CHAINING >>>
console.log(
  "METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING METHOD CHAINING"
);
const setR = [1, -1, 2, 3];
const items2 = setR
  .filter((n) => n >= 0) 
  .map((n) => ({ value: n })) 
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items2);

//------------------------------------------------
// @@@@@@@@@@@ REDUCING AN ARRAY @@@@@@@@@@@@@@

const theNumber = [1, -1, 2, 3];

//the reduce() method reduces all the elements in the array to a single number, example: the sum is>>>5!
const sum = theNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //I guess after every calls, it's stored in the accumulator!
}, 0); //initializing accumulator to 0, or you can just NOT initialize the accumulator so it'll be initialized to the first element in the array, if you initialize to 0, therell be extra calls;

console.log("the sum is >>>" + sum);