/////////////////////////////////
// Lecture: let and const

// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);
document.write(`const name6 = "Jane Smith"; is ${name6}.` + "<br>" + "<br>");

// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    console.log("var is bad to allowed undefined-firstName:" + firstName);
    var firstName = "John";
    var yearOfBirth = 1990;
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
  //console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = "John";
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driversLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log("scoped:" + i);
  document.write(`for (let i = 0; i < 5; i++) : is ${i}.` + "<br>");
}
console.log("scoped i won't overwirte outsided i:" + i);
document.write(
  `scoped i won't overwirte outsided i: is ${i}.` + "<br>" + "<br>"
);

var ii = 23;
for (var ii = 0; ii < 5; ii++) {
  console.log("var not for loop{} scoped:" + ii);
  document.write(`for (var ii = 0; ii < 5; ii++)  : is ${ii}.` + "<br>");
}
console.log("var in for loop{} will overwirte outsided ii:" + ii);
document.write(
  `var in for loop{} will overwirte outsided ii: is ${ii}.` + "<br>" + "<br>"
);

/////////////////////////////////
// Lecture: Blocks and IIFEs
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log("var still accessiable out of {} scoped IIFE-var c:" + c);
document.write(
  `var still accessiable out of {} scoped IIFE-var c is ${c}.(function () {
  var c = 3;
})(); not accesible out of {}` +
    "<br>" +
    "<br>"
);
// ES5
(function () {
  var c = 3;
})();

//console.log(c);

/////////////////////////////////
// Lecture: Strings and string template literal

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6:`-back ticks to use template
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);
document.write(
  `-back ticks to use template is ${calcAge(yearOfBirth)}.` + "<br>" + "<br>"
);

const n = `${firstName} ${lastName}`;
console.log("starWith:" + n.startsWith("j"));
console.log("endWith:" + n.endsWith("Sm"));
console.log("Contain:" + n.includes("oh"));
console.log("Repeat:" + `${firstName} `.repeat(5));
document.write(
  `let firstName = "John";
let lastName = "Smith";const n = ${firstName} ${lastName}; ${n.startsWith(
    "j"
  )}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
  return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map((el) => 2016 - el);
console.log(ages6);
document.write(
  `var ages5 = years.map(function (el) {
  return 2016 - el;
});,let ages6 = years.map((el) => 2016 - el); is ${ages6}.` +
    "<br>" +
    "<br>"
);
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
document.write(
  `ages6 = years.map((el, index) => Age element index + 1: 
    2016 - el
  .); is ${ages6}.` +
    "<br>" +
    "<br>"
);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
document.write(
  `ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return Age element .;
}); is ${ages6}.` +
    "<br>" +
    "<br>"
);

/////////////////////////////////
// Lecture: Arrow functions 2

const myFunction = () => {
  console.log("arrow function as function" + this);
  document.write(
    `const myFunction = () => {
  console.log("arrow function as function" + this); is ${this}.` +
      "<br>" +
      "<br>"
  );
};
// call it
myFunction();

const myObject = {
  myMethod: () => {
    console.log("arrow function as method" + this);
  },
};
myObject.myMethod();

// ES5

var box55 = {
  color: "green",
  position: 1,
  clickMe: function () {
    //  var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "function call from global or outside of object,This is box number " +
        self.position +
        " and it is " +
        self.color;
      alert(str);
    });
  },
};
box55.clickMe();
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "function call from global or outside of object fixed by assign this to self,This is box number " +
        self.position +
        " and it is " +
        self.color;
      alert(str);
    });
  },
};
box5.clickMe();
var TryIt = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".it").addEventListener("click", function () {
      var txt;
      if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
      document.getElementById("demo").innerHTML = txt;
    });
  },
};
TryIt.clickMe();
document.write(
  `The clickMe: function () {
    document.querySelector(".it").addEventListener("click", function () {
      var txt;
      if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
      document.getElementById("demo").innerHTML = txt;
    });
  },.` +
    "<br>" +
    "<br>"
);

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box66.clickMe();

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
  return arr;
};

var friends = ["Bob", "Jane", "Mark"];
let john1 = new Person("John").myFriends5(friends);
document.write(
  `Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(
      function (el) {
        return this.name + " is friends with " + el;
      }.bind(this)
    );
    console.log(arr);
    return arr;
  };new Person("John").myFriends5(friends);is ${john1}.` +
    "<br>" +
    "<br>"
);

// ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person("Mike").myFriends6(friends);
/////////////////////////////////
// Lecture: Destructuring

// ES5
var john = ["John", 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ["John", 26];
console.log("Destructuring Name:" + name);
console.log("Destructuring age:" + age);
document.write(
  ` Destructuring:const [name, age] = ["John", 26]; ${name} , ${age}.` +
    "<br>" +
    "<br>"
);
const obj = {
  firstName6: "John",
  lastName6: "Smith",
};

const { firstName6, lastName6 } = obj;
console.log("Destructuring FirstName:" + firstName);
console.log("Destructuring LastName:" + lastName);
document.write(
  `const obj = {
  firstName6: "John",
  lastName6: "Smith",
};const { firstName6, lastName6 } = obj; and ${firstName6} , ${lastName6}.` +
    "<br>" +
    "<br>"
);
function calcAgeRetirement(year) {
  const { firstName6: a, lastName6: b } = obj;
  console.log("Destructuring FirstName and rename a:" + a);
  console.log("Destructuring LastName and rename b:" + b);
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log("Destructuring function returned array:age:" + age2);
console.log("Destructuring function returned array retriement:" + retirement);
document.write(
  `function calcAgeRetirement(year) {
  const { firstName6: a, lastName6: b } = obj;
  console.log("Destructuring FirstName and rename a:" + a);
  console.log("Destructuring LastName and rename b:" + b);
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
  }
    const [age2, retirement] = calcAgeRetirement(1990); ${age2}; ${retirement}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll(".box");
console.log(boxes);
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//ES5
for (var ii = 0; ii < boxesArr5.length; ii++) {
  if (boxesArr5[ii].className === "box blue") {
    continue;
    //break//will stop and not execute next line
  }
  boxesArr5[ii].textContent = "I changed to blue!";
}
document.write(
  `const boxes = document.querySelectorAll(".box");var boxesArr5 = Array.prototype.slice.call(boxes);
//it converts an arguments object into an Array //
  boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});for (var ii = 0; ii < boxesArr5.length; ii++) {
  if (boxesArr5[ii].className === "box blue") {
    continue;
    //break//will stop and not execute next line
  }
  boxesArr5[ii].textContent = "I changed to blue!";
} .//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}` +
    "<br>" +
    "<br>"
);
//ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(">=18 returned array:age:", full);
console.log("index of value true: ", full.indexOf(true));
console.log("array element of value true: ", ages[full.indexOf(true)]);
document.write(
  `var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
  return cur >= 18;
});
full is: ${full}; array element of value true is ${ages[full.indexOf(true)]}.` +
    "<br>" +
    "<br>"
);
//ES6
console.log(
  "index of value true: ",
  ages.findIndex((cur) => cur >= 18)
);
console.log(
  "array element of value true: ",
  ages.find((cur) => cur >= 18)
);
document.write(
  ` "index of value true: ",
ages.findIndex((cur) => cur >= 18): ${ages.findIndex(
    (cur) => cur >= 18
  )} and  "array element of value true: ",
ages.find((cur) => cur >= 18) is: ${ages.find((cur) => cur >= 18)}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////////
// Lecture: Spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log("array apply method: ", sum2);
document.write(
  `Spread operator,,function addFourAges(a, b, c, d) {
  return a + b + c + d;
}var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);:${sum2} //ES6
const sum3 = addFourAges(...ages);.` +
    "<br>" +
    "<br>"
);
//ES6
const sum3 = addFourAges(...ages);
console.log("ES6 array Spread operator: ", sum3);
document.write(
  `//ES6
const sum3 = addFourAges(...ages); is ${sum3}.` +
    "<br>" +
    "<br>"
);
const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log("ES6 array Spread operator: ", bigFamily);
document.write(`ES6 array Spread operator:is ${bigFamily}.` + "<br>" + "<br>");
const h = document.querySelector("h1");
const boxess = document.querySelectorAll(".box"); //nodelist because querySelectorAll
const all = [h, ...boxess];
console.log("ES6 array Spread operator: ", all);
Array.from(all).forEach((cur) => (cur.style.color = "purple"));

// Lecture: Rest parameters

//ES5
function isFullAge5() {
  console.log(
    "console.log(arguments):looks like array but not,so need use slice ",
    arguments
  );
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (cur) {
    console.log("calculate if age is fullage:>=18 ", 2016 - cur >= 18);
  });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6

function isFullAge6(...years) {
  console.log(
    "...years will change paras into array already by ... operator",
    years
  );
  let fullage6 = [];
  years.forEach((cur) => {
    console.log(2016 - cur >= 18);
    fullage6.push(2020 - cur > 18);
  });
  return fullage6;
}
document.write(
  `function isFullAge6(...years) {
    years.forEach((cur) => console.log(2016 - cur >= 18));
} is ${isFullAge6(1990, 1999, 1965, 2016, 1987)}.` +
    "<br>" +
    "<br>"
);
isFullAge6("...years: Rest parameters:       ", 1990, 1999, 1965, 2016, 1987);

//ES5

function isFullAge55(limit) {
  //limit is arguments/paras of fullage
  var argsArr = Array.prototype.slice.call(arguments, 1); //slice after first element
  console.log(
    "Array.prototype.slice.call(arguments, 1);//slice after first element:   ",
    argsArr
  );
  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= limit);
  });
}

//isFullAge5(16, 1990, 1999, 1965);
isFullAge55(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge66(limit, ...years) {
  console.log("ES6 will read para  years after first para smartly ", years);
  let fullage66 = [];
  years.forEach((cur) => {
    console.log(2016 - cur >= limit);
    fullage66.push(2020 - cur >= limit);
  });
  return fullage66;
}

isFullAge66(16, 1990, 1999, 1965, 2016, 1987);
document.write(
  `function isFullAge66(limit, ...years) {
  console.log("ES6 will read para  years after first para smartly ", years);
  let fullage66=[];
  years.forEach((cur) =>{console.log(2016 - cur >= limit);fullage66.push(2020 - cur >= limit)} );
  return fullage66;
}
 is ${isFullAge66(16, 1990, 1999, 1965, 2016, 1987)}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////////
// Lecture: Default parameters

// ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "american")
    : (nationality = nationality);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson5("John", 1990);
document.write(
  ` Default parameters;lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
nationality === undefined
  ? (nationality = "american")
  : (nationality = nationality);
is ${john},${john.lastName}.` +
    "<br>" +
    "<br>"
);
console.log("ES5 default para john:   ", john);
var emily = new SmithPerson5("Emily", 1983, "Diaz", "spanish");
console.log("ES5 default para emily:   ", emily);

//ES6
function SmithPerson6(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson6("John", 1990);
document.write(
  `ES6
function SmithPerson6(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
} is ${john},${john.lastName}.` +
    "<br>" +
    "<br>"
);
console.log("ES6 default para john:  ", john);
var emily = new SmithPerson6("Emily", 1983, "Diaz", "spanish");
console.log("ES6 default para emily:   ", emily);

/////////////////////////////////
// Lecture: Maps

const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!");

console.log(
  "key showing as number,string,bullen in following exp:   ",
  question
);
document.write(
  `const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong, please try again!"); is ${question},${question.get(
    "question"
  )},,${question.size}.` +
    "<br>" +
    "<br>"
);
console.log("get map value by key:   ", question.get("question"));
console.log("array use length and map use size:   ", question.size);

if (question.has(4)) {
  //question.delete(4);
  //console.log('Answer 4 is here')
}

//question.clear();

question.forEach((value, key) => {
  console.log(
    "map for each loop:   ",
    `This is ${key}, and it's set to ${value}`
  );
  document.write(
    `question.forEach((value, key) => ${key} is ${value}.` + "<br>"
  );
});

console.log("only console when key is number :   \n");
for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

function returnkeyNumberOnlyOfMap(inputMap) {
  let newMap = new Map();
  for (let [key, value] of inputMap.entries()) {
    if (typeof key === "number") {
      console.log(`Answer ${key}: ${value}`);
      newMap.set(key, value);
    }
  }
  return newMap;
}

console.log(returnkeyNumberOnlyOfMap(question));
document.write(
  `if (typeof key === "number") is ${returnkeyNumberOnlyOfMap(question)}.` +
    "<br>" +
    "<br>"
);
//const ans = parseInt(prompt('Write the correct answer'));
//console.log(question.get(ans === question.get('correct')));
/////////////////////////////////
// Lecture: Classes

//ES5

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  //    var age = thisYear - this.yearOfBirth;
  console.log("ES5 class calculate age :   ", age);
};
Person5.prototype.calculateAge1 = function () {
  console.log("The current age is: " + (2019 - this.yearOfBirth));
};
var john5 = new Person5("John", 1990, "teacher");
console.log(john5);
john5.calculateAge();
john5.calculateAge1();

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log("ES6 class calculate age :   ", age);
    return age;
  }
  static greeting() {
    console.log("static method called without object :   ", "Hey there!");
    document.write(
      `"static method called without object :   ", "Hey there!"` +
        "<br>" +
        "<br>"
    );
  }
}

const john6 = new Person6("John", 1990, "teacher");

Person6.greeting();
document.write(
  `//ES6,class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log("ES6 class calculate age :   ", age);
  }
  static greeting() {
    console.log("static method called without object :   ", "Hey there!");
     }
}is ${john6.calculateAge()}.` +
    "<br>" +
    "<br>"
);
console.log(john6);
age6j = john6.calculateAge();
//console.log(age6j);

/////////////////////////////////
// Lecture: Classes and subclasses

//ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log("ES5 class and subclasses calculate age :   ", age);
};

var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
class Person66 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log("ES6 class and subclasses calculate age :   ", age);
  }
}

class Athlete6 extends Person66 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log("ES6 class and subclasses  medal method :   ", this.medals);
  }
}

const johnAthlete66 = new Athlete6("John", 1990, "swimmer", 3, 10);

johnAthlete66.wonMedal();
johnAthlete66.calculateAge();

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949),
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----PARKS REPORT-----");

  // Density
  p.forEach((el) => el.treeDensity());

  // Average age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which park has more than 1000 trees
  const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("-----STREETS REPORT-----");

  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map((el) => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  // CLassify sizes
  s.forEach((el) => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

/////////////////////////////////How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}
// error if we try to access the private variable like below
// _counter;
// usage of our counter function
var c = counter();
c.add(5);
c.add(9);
// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
document.write(
  `function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
} is ${c.retrieve()}.` +
    "<br>" +
    "<br>"
);

document.write(
  `Number.isInteger(123) //true is ${Number.isInteger(123)}.` + "<br>" + "<br>"
);
