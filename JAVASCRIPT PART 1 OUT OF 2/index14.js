// THE THIS KEYWORD!

// THIS REFERENCES OBJECT THAT IS EXECUTING THE CURENT FUNCTION!

// if method, this references object itself,
// if normal function, this references global object, which is the window object in browsers, and global in node.js

const video = {
  title: "a",
  play() { // this is a method!
    console.log(this); // read notes above, its pretty simple to understand
  },
};

function playVideo() {
  console.log(this); // read notes above, answer you'll see the window (global) object in browser
}

// HOWEVER, ITS A LITTLE DIFFERENT WITH CONSTRUCTOR FUNCTIONS!

function Video(title) {
  this.title = title;
  console.log(this); // instead of outputting the window object, itll output a new object > Video { title: "I have passed a string"} , cause when you use the new operator, it creates a new empty obj, and sets this in constructor function to point to the empty object!
}

const v = new Video("I have passed a title");
