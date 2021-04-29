// ITS EXERCISE TIME!!!! - OBJECTS EDITION

// EXERCISE 1 (ADDRESS OBJECT) >>>

const address = {
  street: "abc",
  city: "def",
  zipCode: 123,
};

function showAddress(addressObject) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

//--------------------------------------------
// EXERCISE 2 (FACTORY AND CONSTRUCTOR FUNCTIONS) >>>>>.

// FACTORY FUNCTION
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let addressX = createAddress("street1", "city1", 123);
console.log(addressX);

//CONSTRUCTOR FUNCTION
function CreateAddress2(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let addressY = new CreateAddress2("fbdbdsb", "agag", 23434);
console.log(addressY);

//--------------------------------------------------------------------
// EXERCISE 3 (OBJECT EQUALITY) >>>
let addressOne = new CreateAddress2("a", "b", "c");
let addressTwo = new CreateAddress2("a", "b", "c");

// to check if they (objects) are referencing to same object...
function areSame(addressOne, addressTwo) {
  return addressOne === addressTwo; // true if they're adressing same object;
}

let result = areSame(addressOne, addressTwo);
console.log(result);

// to check if both values are equal for every value...
function areEqual(addressOne, addressTwo) {
  return (
    addressOne.street === addressTwo.street &&
    addressOne.city === addressTwo.city &&
    addressOne.zipCode === addressTwo.zipCode
  );
}

let result2 = areEqual(addressOne, addressTwo);
console.log(result2);

//**********************************************************

// EXERCISE 4 - BLOG POST OBJECT >>>>>>>>>>>>>>>>>

const blogPost = {
  title: "HACKER-MAN",
  body: "LOL",
  author: "JOHN SMITH",
  views: 100000,
  comments: [
    { author: "a", body: "b" },
    { author: "f", body: "g" },
  ],
  isLive: true,
};

console.log(blogPost);

//EXERCISE 5 - CONSTRUCTOR FUNCTIONS >>>>>>>>>

function CreateBlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; // cause one views number for everyone
  this.comments = []; // cause many comments for everyone
  this.isLive = false;
}

console.log(new CreateBlogPost("ab", "cd", "ef"));
//----------------------------------------------------------------------

// EXERCISE 6 - PRICE RANGE OBJECT >>>
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];
