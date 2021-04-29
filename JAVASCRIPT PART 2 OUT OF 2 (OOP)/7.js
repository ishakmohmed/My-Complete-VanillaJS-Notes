// Prototypes >>>

// NOTES  FROM  THE FIRST  TWO  VIDEOS  UNDER  PROTOTYPES  CATEGORY >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// two types of inheritance > classical and prototypical
// classical: concept like in Java
// prototypical: prototype is a parent of another object

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// note: every object in JavaScript have one Prototype except the root object!
// Object is like the main prototype in JS, just like in Java
// in console, define x = {};, then hit x only and enter, then you'll see >>>

// __proto__: Object; <<< means, the prototype for this object is Object, ofc, you can expand this to see the properties and methods, for example if you type in x.toString() which is available (toString()) when you expand it, you'll get "[object Object]" <<< with the quotes, basically x inherited toString() from its prototype!

// NOTE: IF YOU WANNA GET THE prototype of an object, say x, you do >>>
// Object.getPrototypeOf(x) <<< of course, you can compare this thing of x with that of y
// there's also another way than to use getPrototypeOf() >>>
// NOTE: x.__proto__ === y.__proto__ <<< this property is deprecated, but you can use it in the console when debugging application.

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: multi-level inheritance >>>

let myArray = []; // in console, the __proto__ for this array is Array(0)(Mosh named it Array base), it has properties and methods, for example like indexOf, push, pop, forEach, includes, etc.

// However, this Array(0)'s prototype is Object, so myArrays's prototype is Array(0), and Array(0)'s prototype is Object, so this is multi-level inheritance, which means, every object will directly or indirectly inherit from the root object.

function Shape() {
  this.name = "triangle";
}

let someShape = new Shape(); // IMPORTANT NOTE AND MESSAGE: objects created by a given constructor will have the same prototype.

// NOTE: all Shape objects created by the Shape constructor will have the same prototype, and similarly, all arrays created by the array constructor will have the same prototype.

// NOTE: shape object inherits from shape base (constructor: f Shape()), and shape base inherits from object base.

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: Property Descriptors >>>

let person = {
  name: "Mosh",
};

// from my observation, ^^ this is true in this case, but in the next file, I can iterate through an object (c1) which was created using CONSTRUCTOR FUNCTION and I got (instance + prototype) members.
for (let key in person) // IMPORTANT note: none of the property and methods defined in the object base are visible here. Same happens even when you use Object.keys(person). This is because, in JS, properties have attributes and sometimes these attributes prevent us from enumerating our property.
  console.log(key);
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString"); // fmi observation, using getOwnPropertyDescriptor(), you're diving deep into a single property in an object!
console.log(descriptor);

// output is >>>>>>>>>>>>>>>>>>>>>
// {writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true   <<< can delete member if you want to
// enumerable: false    <<< this is why when you iterate over that object up there, you can't see this property
// value: ƒ toString()
// writable: true     <<< means we can override this method
// __proto__: Object

Object.defineProperty(person, "name", {
  // this time im using the same thing, but not for getter and setter like i did in one of the previous files.
  writable: false, // <<< so if i set, person.name = "John", and log it on console, name is not gonna be changed
  enumerable: false, // <<< will not show in Object.keys(person)
  configurable: false, // <<< now we can't delete this property
});

// by default all properties are WRITEABLE, ENUMERABLE AND CONFIGURABLE!

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// video title: constructor prototypes >>>

function Circle(radius) {
  this.radius = radius;
}

let myCircle = new Circle(99);

// LOOK (remember that functions are objects too) >>>
Circle.prototype; // <<< this is the object that will be used as the prototype for all objects created by this constructor
// myCircle.__proto__     <<< Mosh said use in console only!

// ^^^ these 2 (parent for this created object and the prototype for this constructor) displays same result!

//--------------------------------------------------

// ANOTHER EXAMPLE >>>

let someArray = [];

// someArray.__proto__ <<< use in console
Array.prototype; // Array constructor

// ^^^ these two has the same prototype, like the same Array base which has concat(), pop(), etc...

//--------------------------------------------------

// finally, one more example >>>

// same goes with Circle object,
// THE MOST IMPORTANT POINT IS THAT Circle.prototype === c1.__proto__ , so they're both referencing the same object in memory, which is the CCCCCCCCCIIIIIIIIIIIIIRRRRRRRRRRRRRRRRCCCCCCCCCCLLLLLLLLLLLLLLEEEEEEEEEEEEEE BBBBBBBBBBBAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE, <<< MOSH LITERALLY SAID THAT, TRUST ME, JUST TRUST THIS LINE!
