// approach 1 to a whole new problem, here we go >>>

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // this.title is undefined! This is because the keyword this references the window object because showTags() is a method but the function in the forEach loop is not a method, its just a normal function (not a method in the video object) that references window object!
    }, this); // this is the fix for above problem. 2nd parameter for forEach function takes an object (such as this or { name: 'ishak'}) and "this" will reference that object!
  },
};

// ^^^ referring "this" as a second parameter, this right there refers to the currect object, which is the video object.

//            ANOTHER APPROACH >>>>>>>>>>>>>>>>>>>>
//        MOSH: "I JUST WANT YOU TO UNDERSTAND THIS BUT DON'T USE THIS APPROACH!"

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // usually, developers would use "self" or "that"
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

//            ANOTHER APPROACH >>>>>>>>>>>>>>>>>>>>
// I can use these approaches to change the value of "this" in the function below!

function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Mosh" }); // first param in call method accepts an obj and this refer that!
playVideo.apply({ name: "Mosh" }); // same with above, but if you wanna pass extra multiple argument(s), needa pass as array!
//================================================================
const fn = playVideo.bind({ name: "Mosh" }); // same with above, but it doesnt call the playVideo function, rather it returns a new function and sets "this" to point to the passed object permanently. so when you call fn after that, this is gonna point where you want to every single time.

// for above, if you wanna call the returned function immediately, do this >>>

playVideo.bind({ name: "Mosh" })();
