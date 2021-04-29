// EXERCISE 1 - SUM OF ARGUMENTS >>>>>>>>>>>>>>>

function sum(...items) {
  // rest operator converts multiple items to array (fmi it stores the result in an array called items itself), but if you pass an array itself, it puts the array in an array!. SO YOU CAN CHECK IT THE ITEMS ARRAY HAS A SINGLE ELEMENT, AND THE FIRST ELEMENT IS AN ARRAY ITSELF (which has all ur numbers) >>>>>>>>>>>>
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]]; // now its not array in array, but just array!!!!

  return items.reduce((a, b) => a + b);
}

//=================================

// EXERCISE 2- AREA OF CIRCLE >>>>>>>>>>
const circle = {
  radius: undefined,
  area: undefined,
  set fixRadius(rad) {
    this.radius = rad;
  },
  get getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

circle.fixRadius = 2;
console.log(circle.getArea);

//===========================================
// EXERCISE 3 - ERROR HANDLING

// IM GONNA COPY BACK THE PREVIOUS SOLUTION FROM PREVIOUS VIDEOS FIRST AND THEN ADD ERROR HANDLING

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurences(null, 1); // actually, you can also only place this line in the try block!
  console.log(count);
} catch (e) {
  console.log(e.message); // remember the .message (ur custom error string)! // in one of the previous videos, Mosh did >>> console.log(e) only!
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("DUUUDE, THATS NOT AN ARRAY!");

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
