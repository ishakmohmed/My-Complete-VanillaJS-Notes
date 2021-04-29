// THE ONLY EXERCISE FOR OBJECTS SECTION: STOPWATCH EXERCISE >>>>>>>>>>>

// duration property initialize to 0 (it'll count the second from the moment you start till stop)

// start method (cannot call twice, if you do, alert "Stopwatch has already started")
// stop method (cannot call twice, if you do, alert "Stopwatch is not started")
// reset method

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// my simple implementation (didn't implement all the features, but it works perfect, every method declared here works perfect)

// function Stopwatch() {
//   this.duration = 0;

//   let startTime;
//   let stopTime;

//   this.start = function () {
//     startTime = new Date();
//   };

//   this.stop = function () {
//     stopTime = new Date();
//     this.duration = (stopTime - startTime) / 1000;   // this expression returns millisecond so divide 1000 to get seconds
//   };

//   this.reset = function() {
//     this.duration = 0;
//   }
// }

// ----------------------------------

// MOSH'S ANSWER >>>>>>>>>>>>>>>

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // I didn't use getTime() up there, but it works,  but I guess you should use getTime(), only then (maybe), it'll calculate in milliseconds or something, maybe you should always use getTime() to calculate time, not sure if this theory is correct or not, but just use it!
    duration += seconds;
  };

  this.reset = function () {
    startTime = null; // I guess if no Date, then null is a good choice!
    endTime = null; // I guess if no Date, then null is a good choice!
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
