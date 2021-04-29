// exercise: move these stuffs from last exercise to prototype!
// note: actually, usually for stopwatch, you don't needa place stuffs in prototype because you'll usually need only 1 stopwatch to use in program, but if you needa create a lot of objects in real world applications, then move stuffs to prototype, but this ones just for you to understand how it works!

// function Stopwatch() {
//   let startTime, endTime, running, duration = 0;

//   this.start = function () {
//     if (running) throw new Error("Stopwatch has already started.");
//     running = true;
//     startTime = new Date();
//   };

//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch is not started.");
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };

//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started");
  this.running = false;
  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds; // needa create setter up there, cause for all other variables I only did read-only getters, if I follow that, then I can't set the value like adding seconds to it!
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

// PROBLEM: now you can modify the duration from outside without even starting the stopwatch and then stopping, so the object is unreliable.

// CONCLUSION: putting all these methods on the prototype was a very bad idea to start with, like it broke the abstraction principle (exposing the duration property), etc.

// MOSH'S EXACT WORDS: "SO ESSENTIALLY THIS STOPWATCH OBJECT IS NOW USELESS!"

// MOST QUOTED THIS FAMOUS SAYING >>>>>>>>>>>>>>

// "Premature optimization is the root of all evils."
// meaning from google: Premature optimization is spending a lot of time on something that you may not actually need.
