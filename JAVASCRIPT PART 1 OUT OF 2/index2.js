conditional statements are if...else and switch...case;
if else EXACTLY same like JAVA, except that you can use === this time;
switch case is EXACTLY like JAVA, except that now you can case: string, HOLD ON I JUST FOUND OUT THAT YOU CAN SWITCH STRING IN JAVA TOO, I SWITCHED MOHMED ISHAK AND NOOR AZMIYA IN ONE OF MY JAVA FILES;

loops in JS are for, while, do...while, for...in, and for...of;
     for loop is the same like in Java, but instead of int i=0, it's let i = 0;
     while loop is the same like in Java, just make sure you don't mess up the simple stuffs  like using int instead or let;
     do-while is same like Java too;
   while (true) is one of the ways to create infinite loops, just like in Java;

for (let i=0; i<10; XYZXYZXYZ){ // #####REMEMBER > you can also leave the third part in for loop empty, but make sure 2nd part is terminated with semicolon;
  console.log("Hello");
}
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

for-in loop >>>>>>>>>>>>>
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person)
  console.log(key, person[key]); //bracket notation cause you don't know what property you're gonna access;

const colors = ['red', 'green', 'blue'];

for (let index in colors)
  console.log(index, colors[index]);

for-of loop (from ES6) >>>>>>>>>>>>>>>
const colors2 = ['red', 'green', 'blue'];

for (let color of colors2)    // almost similar like in Java, except that in Java it's for each loop!
  console.log(color);

SUMMARY >>> FOR-IN LOOP TO ITERATE OVER THE ELEMENTS OF AN OBJECT, for-of is the equivalent for arrays;

break and continue same like in Java;

IT'S EXERCISE TIME >>>>>>>>>>>>>>>>>>>>>>>>>
[1]
function max(a,b){
  return (a>b) ? a : b; // return is added to the front!!!!;
}

let maxx = max(3,5);
console.log(maxx);

[2]: portrait or landscape???

function isLandscape(width, height){
  return (width > height); // this is the key point, don't add ? : cause it's longer;
}

[3] FizzBuzz
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN; //the most important line to remember, btw typeof NaN (not a number) is weirdly enough, a number!;

  // btw, return NaN, not "NaN" in quotation marks!
  else if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";
  else if (input % 3 === 0) return "fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
}

const output = fizzBuzz(false);
console.log(output);

[4]: check speed >>>>>>>>>>>>>>>
checkSpeed(100);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / 5);
  if (points >= 12) console.log("License Suspended!");
  else console.log("Points", points); // why not "Points" + points. Well, fmi, if you do that output will be Points6 as a string, but if you do it like you wrote it in this like, points will be in blue in chrome dev tools which is a number.
}

[5] count Truthy >>>>
const array = [0, null, undefined, "", 2, 3, 4, 5];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value) //it could also be if key, or other variables!
      //this line means > "if value is truthy";
      count++;
  return count;
}

[6] String properties >>>>>>>>...
const movie = {
  title: "ford vs ferrari",
  releaseYear: 2019,
  rating: 9.9,
  director: "John Cena",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string")
      //"string" with a small s;
      console.log(key, obj[key]);
}

7- Grade >>>>
const array = [80, 80, 50];

console.log(calculateGrade(array));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array){
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length; // remember .length for arrays;
}

8- Stars >>>>>>>>>>
printStars(10);

function printStars(rows) {
  for (let row = 0; row <= rows; row++) {
    let pattern = ""; //cause you wanna reset pattern for every row!
    for (let actualStars = 0; actualStars < row; actualStars++) pattern += "*";
    console.log(pattern);
  }
}

9 - PRIME NUMBERS >>>>>>>>>>
printPrimeNumber(100);

function printPrimeNumber(maximum) {
  for (let row = 2; row <= maximum; row++) {
    if (isPrime(row)) console.log(row);
  }
}

function isPrime(number) {
  for (
    let linearScan = 2;
    linearScan < number;
    linearScan++ // to check is number has factor other than 1 and itself, which is why the range starts from 2 and not 1 and doesn't end with itself;
  )
    if (number % linearScan === 0) return false;

  return true;
}
//-------------------------------------------
printPrimeNumber(100);

function printPrimeNumber(maximum) {
  for (let row = 2; row <= maximum; row++) if (isPrime(row)) console.log(row);
}

function isPrime(number) {
  for (linearScan = 2; linearScan < number; linearScan++)
    if (number % linearScan === 0) return false;

  return true; 
}

//-----------------------------------------

  <script>
    printPrime(20);

    function printPrime(maximum) {
      for (let number = 2; number <= maximum; number++) {
        let isPrime = true;

        for (let factor = 2; factor < number; factor++) {
          if (number%factor === 0) {
            isPrime = false;
            break;
          }
        }

      if (isPrime) console.log(number);
      }
    }
  </script>