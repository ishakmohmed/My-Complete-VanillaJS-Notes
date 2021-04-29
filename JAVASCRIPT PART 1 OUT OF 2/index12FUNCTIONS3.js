// Try and Catch
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value isnt String"); // this is exception because youre throwing an error, not simply creating an error object (which is error)!

    const parts = value.split(" ");
    if (parts.length !== 2)
      throw new Error(
        "WHAT THE FLIP IS WRONG WITH UR NAME? Enter a first and last name!"
      );
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  alert(e); //THIS IS A SUPER ANCIENT and POOR WAY, MOSH SAID SOMETHING LIKE THAT!
}

console.log(person);
