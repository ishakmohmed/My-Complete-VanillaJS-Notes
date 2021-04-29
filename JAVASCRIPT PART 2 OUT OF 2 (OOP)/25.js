// NOTE: I UNDERSTAND 95% OF WHATEVER MOSH SAID IN THIS VIDEO, BUT WHEN YOU'RE REVISING, I WOULD SUGGEST YOU TO REWATCH THIS VIDEO NAMED "THE "THIS" KEYWORD";

//--------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// video title: the "this" keyword! <<< REFER NOTE ABOVE THE 2 LINES OF DASHES

"use strict"; // this is strict mode, if you enable it, js engine will be more sensitive (i bookmarked a page on chrome on what strict mode does), so itll do more error checking, if there are errors that will silently fail, its gonna turn them into exceptions, and ALSO, ITLL CHANGE THE BEHAVIOR OF THE "THIS" KEYWORD IN FUNCTIONS: if you call method as a function like draw() down there, "this" by default will no longer point to the global object, instead it will be set to undefined, and the reason for this is to prevent us from accidentally modifying the global object cause thats a bad practice. ONE MORE THING IS THAT BY DEFAULT THE BODY OF OUR CLASSES (class { //... }) WILL BE EXECUTED IN STRICT MODE, ALTHOUGH YOU DON'T EXPLICITLY WRITE THE "use strict" string, and this will prevent us from accidentally modifying the global object.

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// Method call
c.draw(); // in console, you'll see the Circle object because "this" will point to that object

const draw = c.draw; // c.draw means getting reference (not calling the method) to draw method, no parantheses after draw, means im not calling that method, and finally im storing it in a constant named draw
console.log(draw); // in the console, the output is the draw function

// Function Call
draw(); // in the console, youll see the window object, because its a function call, youre calling it as a standalone function that is not part of an object, so by default, "this" will point to global object, which is window in browser, and global in node, this is otherwise if you use "use strict" or put this method inside a C-L-A-S-S, in this case, if you open console right now, you'll see that draw() in this line will return undefined like really...

class AmazingCircle {
  drawww() {
    console.log(this);
  }
}

const xyz = new AmazingCircle();
const drawww = xyz.drawww;
drawww(); // if you check console, the output of this line will the undefined although you did or did not write "use strict" cause by default body of classes are executed in strict mode, NOTE THAT drawww() in this line refers to the variable in the above line, not the drawww method in the class AmazingCircle. FMI > in above line, you're getting reference to the drawww method and storing it in a constant and then calling it right away, it seems that although you're calling it right away, it means you created an object first and then got reference to that method, but fmi again, in this line if you look at the code, it looks like youre calling  a method right away, so that means youre calling a method right away, you dont care what was the history of this "method"; <<< I guess this is how it works
