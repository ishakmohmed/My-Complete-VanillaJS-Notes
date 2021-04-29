// CLONING AN OBJECT >>>>>>>
//below is an object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
// lets declare an empty object and clone above object to object below
const another = {};

for (let key in circle) {
  another[key] = circle[key];
}

console.log(another);

// ^^^^^^ look.forFewCodesAbove - this approach isn't the best way to clone an object. Here we go....

const superCircle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const secondClone = Object.assign({}, circle); //target object (it can have existing properties too in this case I'm not writing it for simplicity) - and the source object (WHICH CAN BE ONE OR MORE, AND THIIIIIIIIIIIIISSSSSSSSSSSSSSSSS ISSSSSSSS THE MOSTTTTTTTTTTTTTTT IMMMMMMMMMMPOOOOOOOORRRRRRRTANT LINE IN THIS FILEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE).... In case you want the target object to have existing properties, the code would go something like this >>> const secondClone = Object.assign({color:yellow, size: big}, circle, can add more, can add more);

console.log(secondClone);

// theres another way to clone an object, here it goes >>>>>>

const another2 = { ...superCircle }; // ... is the spread operator, it "spreads" the superCircle object and takes all the properties and methods from there and puts it in the curly braces it is in;
console.log(another2);

//--------------------------------------------------------------------------
//NOTE: JAVASCRIPT ALSO HAS A GARBAGE COLLECTOR JUST LIKE IN JAVA, AND YOU DON'T HAVE TO WORRY ABOUT MEMORY ALLOCATION AND DEALLOCATION.
//--------------------------------------------------------------------------

//Let's take a look at the Math object (documentation is bookmarked in chrome) >>

let random = Math.random();
console.log(random); // floating number between 0 and 1 just like in Java.

// to get random number between a certain range>>>

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // without floor the number will be in decimal. Just like in Java, there's Math.floor and Math.ceil and Math.abs too.
}

// there's also Math.round() that rounds to integer, Math.max() and Max.min() which can take a bunch of arguments.

console.log(getRandomNumber(95, 100));

// Let's take a look at the String object >>>>>>>>>

// primitives don't have properties and methods but objects do, but hold on, check this out >>>

// THIS IS A STRING PRIMITIVE
const message = " This is my first message ";
// primitives have no properties and methods, but when you use the dot notation, JS engine internally wraps it with object (LIKE STRING OBJECT), so you can access the methods and stuffs like that...

// THIS IS A STRING OBJECT
const another3 = new String("hi");

// NOTES NOTES NOTES NOTES NOTES NOTES NOTES >>>>>>>
// message.length - returns number of character in string (I guess not .length() like in Java)
// message[0] - returns "T"
// message.includes("my") - returns true
//message.startsWith() and endsWith();
// message.indexOf('my') - 8
// message.replace('first', 'second');
// message.toUpperCase() and .toLowerCase()
// message.trim()
// message.trimLeft() and .trimRight()

// message.split('i'); or a better idea is to split space .split(' ');
// The output is >>> (4)[" Th", "s ", "s my f", "rst message "] where i is the splitter and doesnt get returned and the cut pieces get returned as an array...
//------------------------------------------------------

// LETS TAKE A LOOK AT TEMPLATE LITERALS >>>>>>>>>>

// THE BAD IMPLEMENTATION >>>
const theMessage = "THIS IS MY \n" + "FIRST MESSAGE";

// THE GOOD IMPLEMENTATION >>>
const name = "DR. SMARTEST";
const another99 = `THIS IS MY
'first' message

Dear ${name} ${5 + 10}, 

I am smarter than you.

Regards, 
Ishak`;
// ^^^ in ${ } you can also can functions, and that is perfectly valid.

// --------------------------------------------------

// LETS TAKE A LOOK AT DATES >>>>>>>>>>>>>>...

const now = new Date(); // = new Date(); means like RIGGHHTTT NOWWWWW (UNLESS YOU ALTER IT);
const date1 = new Date("MAY 11 2020 09:00"); // I randomly tried "1 JANUARY 2020" and it worked, but when I tried it with a "HELLO", it didn't work, JUST CHECK THE DOCUMENTATION AND IT'LL TELL YOU THE FORMAT;
const date2 = new Date(2020, 4, 11, 9); // month starts from 0, note that! date means day of the month. If you want you can exclude some arguments like seconds or something and its not a problem cause itll be initialized to 0 by default.

now.setFullYear(2035); // theres also get methods.

// NOTES NOTES NOTES NOTES NOTES NOTES NOTES NOTES >>>>>>>>
// now.toDateString();
// "Mon Jun 11 2035"
// now.toTimeString();
// "18:59:52 GMT+0800 (Singapore Standard Time)"
// now.toISOString(); <<< informal: usually you wanna use this in web application when clients and server talk or something like that!
// "2035-06-11T10:59:52.662Z"
