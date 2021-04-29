// GETTERS AND SETTERS **************************************************************

const xPerson = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName1() {
    // "issue is that 1- it's read only, 2- itd be nicer instead of calling this method like method(), we call it like property - so how do we do this?" -Mosh Hamedani
    return `${xPerson.firstName} ${xPerson.lastName}`;
  },
};

console.log(xPerson.fullName1());

//---------------------------------------------

// with getter and setter >>>

const person = {
  firstName: "Mohmed",
  lastName: "Ishak",
  get fullName() {
    // getter has the get keyword, same goes with setter- it has set keyword
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    // refer crisitano ronaldo to see how to set it!
    // you can't use this as a function, instead you need to person.fullname = "Cristiano Ronaldo". value here is the stuff to the right of '=' after person.fullname;
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
// usually in chromeDevTools, getters are (...) but just click them (to "get" them) and you'll see the stuffs!
person.fullName = "Cristiano Ronaldo"; //im treating .fullName as setter

console.log(person);
console.log(person.fullName); // im treating .fullName as getter
