// ITS ARRAYS EXERCISE TIME!!!!!!!!!!!!!!!!!

// EXERCISE 1 - ARRAY FROM RANGE
const numbers999 = arrayFromRange(-10, 4);
console.log("NUMBERS IS >>> " + numbers999);

function arrayFromRange(min, max) {
  const output = [];

  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

//----------------------------------------------
//EXERCISE 2 - INCLUDES (WE'RE PRETENDING INCLUDES DOESN'T EXIST, SO WE'RE CREATING A FUNCTION FOR IT)
const numbers1 = [1, 2, 3, 4];
console.log(numbers1.includes(1));

function includes(array, searchElement) {
  for (let key of array) if (key === searchElement) return true;

  return false;
}
//---------------------------------------------------
// EXERCISE 3 - EXCEPT
const numbers9090 = [1, 2, 3, 4, 1, 1, 5, 6, 7, 8, 9];

const final = except(numbers9090, [1, 6, 7]);
console.log(final);

function except(array, excludedArray) {
  const arrayThatTakesStuffs = [];

  for (let key of array)
    if (!excludedArray.includes(key)) arrayThatTakesStuffs.push(key);

  return arrayThatTakesStuffs;
}

//-----------------------------------------------------
// EXERCISE 4 - MOVING AN ELEMENT

// WITH MOSH'S GUIDE >>>>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = move(numbers, 8, 1);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("DUDE, INVALID OFFSET");
    return;
  }
  // above this line - validation
  // below this line- the main thing
  const output = [...array];
  const element = output.splice(index, 1)[0]; // in splice, items that are removed will be returned as an array! //From my observation > informal > by the way, I wrote [] here because I wanna access the first item only so I can insert it later on, not as an array, but as 1 item!
  output.splice(position, 0, element);
  return output;
}

// MY OWN ATTEMPT >>>
console.log(
  "OK, IM GONNA ATTEMPT EXERCISE 4 (ARRAYS) BY MYSELF, HERE WE GO >>>"
);

const setA = [1, 2, 3, 4, 5];
const outputArray = moveAnyElement(setA, 4, -4);
console.log(outputArray);

function moveAnyElement(array, index, offset) {
  const leftRightLength = index + offset;
  if (leftRightLength < 0 || leftRightLength >= array.length) {
    // refer line above too: the logic is that lets say an array has index from 1 to 10, and in above line I wrote > index + offset, so lets say for index 3, i can move +6 so it doesnt exceed array.length, and i can move -3 so it doesnt exceed below 0;
    console.error("WHAT THE FLIP? INVALID OFFSET!");
    return;
  }

  const openedArray = [...array];
  const removedElement = openedArray.splice(index, 1)[0]; // cause splice returns array that has removed elemements in this case its just 1 element, but you don't want is as an array, but ONE element!
  openedArray.splice(leftRightLength, 0, removedElement);

  return openedArray;
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
//-------------------------------------------------------------------------------
// @@@@@@@@@@@@@@@@@ EXERCISE 5 - COUNT OCCURENCES @@@@@@@@@@@@@@@@@
const someNumbers = [1, 2, 3, 4, 1, 1];

const count = countOccurences(someNumbers, 1);
console.log(count);

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    let occurence = current === searchElement ? 1 : 0;

    return accumulator + occurence;
  }, 0); //In this case, you totally need to initialize the accumulator!
}

// ---------------------------------------------------------------

// @@@@@@@@@@@@@@@@@@@@@ EXERCISE 6 - GET MAX @@@@@@@@@@@@@@@@@@@@@@@@
const someNum = [1, 2, 3, 4, 9, 2, 21, 1, 2, 7, 16, 99];
const max = getMax(someNum);

console.log("THE MAXIMUM IS >>> " + max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((acc, elem) => (acc > elem ? acc : elem)); // the key thing you need to remember is that the reduce method takes a call back function, so when it returns stuff that's not the final stuff its gonna return, it just means "thats the final stuff its gonna return for current element/iteration!"
}

//NOTE: PLEASE REMEMBER TO USE THE REDUCE METHOD WHEN YOU WANT 1 FINAL NUMBER FROM ARRAY, LIKE LARGEST, MAXIMUM, MINIMUM, SUM, ETC;

//---------------------------------------------------

// @@@@@@@@@@@@ EXERCISE 7 - MOVIES @@@@@@@@@@

const movies = [
  { title: "a", year: "2018", rating: 4.5 },
  { title: "b", year: "2018", rating: 4.7 },
  { title: "c", year: "2018", rating: 3 },
  { title: "d", year: "2017", rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
  .filter((m) => m.year === "2018" && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating) // refer index8 notes, instead of returning 1 or 0.8 or something like that, and vice versa, im doing this! I guess you can do this for numbers, for string however, I guess you needa, if a > b, return 1, if the other way return -1, if no return 0 (you can totally refer index 8 as it has notes about arrays);
  .reverse() // I guess reverse the current order without thinking much!
  .map((m) => m.title);

console.log(titles); // in the console, you'll see a and b in an array!
