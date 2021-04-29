// THIS IS A BETTER AND EASIER WAY TO BE USED THAN THE PREVIOUS METHODS!

const video1 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video1.showTags();

// THIS
// IS
// THE
// ULTIMATE
// SOLUTION
// IN ES6

// THIS IS THE ULTIMATE SOLUTION IN ES6 >>>>>>>>>>>>>>>>>>>>>>>>>

// Arrow functions. Arrow functions inherit the this value!

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag); // reason it works > arrow functions inherits "this" from the containing function!
    });
  },
};

video.showTags();
