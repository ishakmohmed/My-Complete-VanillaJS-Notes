// Primitive (value) and Reference (Objects) types >>>>

// Primitive types are Number, String, Boolean, Symbol (new in ES6), undefined, and null.

// Reference types are Object, Function, and Array (all of these are objects).

// For primitive types >>>>
let a = 10;
let b = a;

a = 20; // a is now 20, but b is still 10, because these 2 primitive values are independent of each other.

// For reference types >>>
let x = { value: 10 };
let y = x;

x.value = 20; // in console when I type x, it's 20, and when I type y, it's 20. This is because, when you create an object, that object is stored somewhere else in the memory, and the address of that memory location is stored inside that memory variable. In other, simple words, both x and y are pointing to the same object in memory.

// THE CONCLUSION IS: PRIMITIVES ARE COPIED BU THEIR VALUE, WHILE OBJECTS ARE COPIED BY THEIR REFERENCES.

let number1 = 10;

function increase1(number1) {
  number1++;
}

increase1(number1);
console.log(number1); // output is 10 cause of obvious reason. Hint: number in parameter is different with number variable, and you're logging number variable, which is 10.

//-------------------------------------------------------------------------
// BUT, FOR OBJECT, IT'S A WHOLE DIFFERENT CASE CAUSE WE'RE DEALING WITH REFERENCES.
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // The output is 11. Reason: when we call increase and pass this object, it is passed by reference, so both variables are pointing to same object, and variable in function will actually increase the original value declared above;
//---------------------------------------------------------------------

NOTE: OBJECTS ARE NOT ITERABLE!

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
// Objects aren't iterables so you can't use for of loop, but hold on, there's a way, here it goes >>>

for (let key of Object.keys(circle)) { // Object not Objects!
  // can get all keys in circle object and this will return a String array (iterable), which has properties (or key SO THAT YOU UNDERSTAND) and methods in this object. You can also use Object.keys() without for of loop, but the way you print is different, but you get it its so straightforward, just print and itll display as it is, which is string array...
  console.log(key, circle[key]);
}

for (let entry of Object.entries(circle)) {
  //instead of returning keys as string array, it returns each key-value pairs as arrayssssssss. Output in line 1 is ["radius", 1], in line 2, ["draw", f]. In simple words, you don't needa ask that you want radius and its value which is 1 cause by default it outputs you these 2 values together in a single array, and in the next line there's another array with another two values.
  console.log(entry);
}

if ("radius" in circle)
  // the "in" keyword - to see if property exists in given object.
  console.log("property exists in given object");

