var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log("declared but not initialize:" + job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "John and MArk";
//var if = 23;

/*****************************
 * Variable mutation and type coercion
 */

var firstName = "John";
var age = 28;

// Type corellation
console.log(
  "javascript auto type coercion,exp:number to string to + operator: " +
    firstName +
    " " +
    age
);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  "javascript auto type coercion,exp:boolen to string to + operator,java not have this type auto coerction: " +
    firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";

//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//var lastName = prompt('What is his last Name?');
//console.log(firstName + ' ' + lastName);
//console is better than alert that alert you have to click ok to make it go, or not won't execute followed code.
///*****************************
//* Basic operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log("typeof operator: " + typeof johnOlder);
document.write(
  `var johnOlder = ageJohn < ageMark;typeof johnOlder is ${typeof johnOlder}.` +
    "<br>" +
    "<br>"
);
console.log("typeof operator: " + typeof ageJohn);
console.log("typeof operator: " + typeof "Mark is older tha John");
var x;
console.log("typeof operator: " + typeof x);

/*****************************
 * Operator precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(
  "+,- operator precedence higher than  logic operator:  " + isFullAge
);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

/*****************************
 * CODING CHALLENGE 1
 */

//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
//
//1. Store Mark's and John's mass and height in variables
//2. Calculate both their BMIs
//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
//
//GOOD LUCK 😀

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

///*****************************
//* If / else statements
//*/
///*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log("if else exp: " + firstName + " is married!");
} else {
  console.log("if else exp: " + firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(
    "if by boolen variable directly ,if (isMarried): " +
      firstName +
      " is married!"
  );
} else {
  console.log(
    "if by boolen variable directly ,if (isMarried): " +
      firstName +
      " will hopefully marry soon :)"
  );
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's.");
} else {
  console.log("John's BMI is higher than Marks's.");
}

/*****************************
 * Boolean logic
 */

var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
  document.write(
    `if(){}else if(){}else if(){}else{} ${firstName} is a young man..` +
      "<br>" +
      "<br>"
  );
} else {
  console.log(firstName + " is a man.");
}

///*****************************
//* The Ternary Operator and Switch Statements

var firstName = "John";
var age = 15;

// Ternary operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");
age >= 18
  ? console.log(firstName + " drinks beer.")
  : document.write(
      `var age = 15;age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice."); ${firstName} drinks juice.` +
        "<br>" +
        "<br>"
    );

var drink = age >= 18 ? "beer" : "juice";
console.log(
  "logic operator precedence higher than assignment than Ternary: " + drink
);
document.write(
  `var age = 15;var drink = age >= 18 ? "beer" : "juice"; ${drink}.` +
    "<br>" +
    "<br>" +
    "<br>"
);
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "Ternary is same function as if else but shorter: " + "juice";
}

// Switch statement
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(
      "switch (job),and use break to exit, ornot will keep try other branches : " +
        firstName +
        " teaches kids how to code."
    );
    document.write(
      `var job = "instructor";switch (job){case"": break;:case"":break; default:switch (job),and use break to exit, ornot will keep try other branches : } ${firstName} teaches kids how to code.` +
        "<br>" +
        "<br>"
    );
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(
      "switch (true) is the trick of execute all cases of ranges in switch : " +
        firstName +
        " is a man."
    );
}

/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = "";

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log(
    "falsy values: undefined, null, 0, '', NaN :if (height || height === 0) " +
      height +
      "Variable has NOT been defined"
  );
  document.write(
    `height = "";falsy values: undefined, null, 0, '', NaN :if (height || height === 0)${height}  Variable has NOT been defined.` +
      "<br>" +
      "<br>"
  );
}

// Equality operators
height = 23;
if (height == "23") {
  console.log("The == operator does type coercion!");
  document.write(
    `height = 23;if (height == "23")  console.log("The == operator does type coercion!").` +
      "<br>" +
      "<br>"
  );
}

//* CODING CHALLENGE 2

//John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
//
//1. Calculate the average score for each team
//2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
//3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//
//4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
//5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
//
//GOOD LUCK 😀

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + " points");
} else {
  console.log("There is a draw");
}

if (scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else {
  console.log("There is a draw");
}

// Functions

function calculateAge(birthYear) {
  var d = new Date();
  var n = d.getFullYear();
  return n - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(
  "function with one para and use ',' seperate different items in console log: " +
    ageJohn,
  ageMike,
  ageJane
);
document.write(
  `function calculateAge(birthYear){  var d = new Date();
  var n = d.getFullYear();return n - birthYear;}. ',' seperate different items in console log: "
    ageJohn,
  ageMike,
  ageJane: ${ageJohn},${ageMike},${ageJane}.` +
    "<br>" +
    "<br>"
);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

// Function Statements and Expressions

// Function declaration
function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(
  "function expression with 2 para: " + whatDoYouDo("teacher", "John")
);
document.write(
  `function expression with 2 para:var whatDoYouDo = function (job, firstName){switch (job) {}}.whatDoYouDo("teacher", "John"). ${whatDoYouDo(
    "teacher",
    "John"
  )}.` +
    "<br>" +
    "<br>"
);
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

//* Arrays

// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log("array index begin from 0,names[2]:  " + names[2]);
console.log("array size,names.length:  " + names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(
  "Mutate array data,exp last,names[names.length]:reassign array element:  " +
    names
);
document.write(
  `var names = ["John", "Mark", "Jane"];Mutate array data,change the last one,names[names.length]="Mary"; new array: ${names}.` +
    "<br>" +
    "<br>"
);
// Different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue"); //array push add at end
john.unshift("Mr."); //array unshift add at beginning
console.log(
  "javascript array can have Different data types,array push add at end,array unshift add at beginning :  " +
    john
);
document.write(
  `var john = ["John", "Smith", 1990, "designer", false];john.push("blue"); //array push add at end
john.unshift("Mr."); //array unshift add at beginning.javascript array can have Different data types,array push add at end,array unshift add at beginning :   ${john}.` +
    "<br>" +
    "<br>"
);
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(" array john.indexOf(1990)  :  " + john.indexOf(1990));
console.log(
  " if array element not in array index return -1 :john.indexOf(23)  " +
    john.indexOf(23)
);
document.write(
  `array return element index:john.indexOf(1990)  : ${john.indexOf(
    1990
  )},if array element not in array index return -1 :john.indexOf(23): ${john.indexOf(
    23
  )}` +
    "<br>" +
    "<br>"
);
var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(
  "array indexof used to judge if element inside by ternary:  " + isDesigner
);
document.write(
  `array indexof used to judge if element inside by ternary:var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer"; ${isDesigner}.` +
    "<br>" +
    "<br>"
);
//* CODING CHALLENGE 3

//John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
//
//To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
//In the end, John would like to have 2 arrays:
//1) Containing all three tips (one for each bill)
//2) Containing all three final paid amounts (bill + tip).
//
//(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
//
//GOOD LUCK 😀

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(
  "pass array element as function para,tipCalculator(bills[0]),combined 2 arrays-bills[0] + tips[0]:if console log not want + operator to join then use ','to seperate them  ",
  tips,
  finalValues
);
document.write(
  `var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];pass array element as function para,
 ${tips},${finalValues}.` +
    "<br>" +
    "<br>"
);
//* Objects and properties

//Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log("Object literal-john.firstName: ", john.firstName);
document.write(
  `var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
}; Object literal-john.firstName:is ${john.firstName}.` +
    "<br>" +
    "<br>"
);
console.log("Object literal-john['lastName']: ", john["lastName"]);
var x = "birthYear";
console.log("Object literal-john[x]: ", john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log("mutate Object properties,john.job,john['isMarried']: ", john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log("new Object syntax: ", jane);
document.write(
  `new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";is ${jane}.console can see the object not document.write` +
    "<br>" +
    "<br>"
);

//* Objects and methods

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }, //function expression here
};

john.calcAge();
console.log(
  "Object method-function expression, this.age = 2018 - this.birthYear;method add a property:key and value : ",
  john
);
document.write(
  `var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }, //function expression here
}; john.calcAge();is:${john.age}` +
    "<br>" +
    "<br>"
);

//* CODING CHALLENGE 4

//Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
//1. For each of them, create an object with properties for their full name, mass, and height
//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
//3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
//
//Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
//
//GOOD LUCK 😀

var john = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    "john.calcBMI() > mark.calcBMI():obj call method as logic > operator para ",
    john.fullName + " has a higher BMI of " + john.bmi
  );
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same BMI");
}
document.write(
  `var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
}; ${john.calcBMI() > mark.calcBMI()}.` + "<br>"
);

//* Loops and iteration

// for loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
  document.write(
    `continue: var john = ["John", "Smith", 1990, "designer", false, "blue"] if (typeof john[i] !== "string") continue; is ${john[i]}.` +
      "<br>"
  );
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  document.write(
    `break: var john = ["John", "Smith", 1990, "designer", false, "blue"] if (typeof john[i] !== "string") continue; is ${john[i]}.` +
      "<br>"
  );
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log("array Looping backwards begin from john.length - 1 ", john[i]);
}

//* CODING CHALLENGE 5

//Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
//
//This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
//John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
//Implement a tip calculator using objects and loops:
//1. Create an object with an array for the bill values
//2. Add a method to calculate the tip
//3. This method should include a loop to iterate over all the paid bills and do the tip calculations
//4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
//
//
//EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
//Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
//
//5. Implement the same functionality as before, this time using Mark's tipping rules
//6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
//7. Calculate the average tip for each family
//8. Log to the console which family paid the highest tips on average
//
//GOOD LUCK 😀

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

////////////////////////////////// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
////////////////////////////////let in loop
var funcs = [];
for (var i = 0; i < 5; i++) {
  //use var
  funcs.push(function () {
    console.log("use var: ", i);
    document.write(
      `use var the value of i won't change in each step of loop:${i}.` + "<br>"
    );
  });
}
funcs[0]();
console.log(funcs[0]);
funcs[1]();
funcs[4]();
document.write(
  `for (let i = 0; i < 5; i++) {
  //use let,i value will change in each step of loop
  funcs1.push(function () {
    console.log("use let: ", i);
  });for (var i = 0; i < 5; i++) {
  //use var the value of i won't change in each step of loop
  funcs.push(function () {
    console.log("use var: ", i);
  });
},${fun0},${fun1},${fun4},+ "<br>"+ "<br>".`
);
var funcs1 = [];
for (let i = 0; i < 5; i++) {
  //use let
  funcs1.push(function () {
    console.log("use let: ", i);
    document.write(
      `use let,i value will change in each step of loop: ${i}.` + "<br>"
    );
  });
}
var fun0 = funcs1[0](); //there is no return ,so it is a void even you want to write to document
var fun1 = funcs1[1]();
var fun4 = funcs1[4]();
console.log(funcs1[0]());

////////////////////////////////rest operator,get args as array
function sum(...numbers) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(
  "rest operator,get args as array: ",
  sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
);
document.write(
  `rest operator,function sum(...numbers) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
} sum(1, 2, 3, 4, 5, 6, 7, 8, 9): ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}.` + "<br>"
);
let numbers = [1, 2, 3, 4, 5, 6];
function sum(num1, num2, num3, num4, num5, num6) {
  return num1 + num2 + num3 + num4 + num5 + num6;
}
console.log("spread operator,spread array as args: ", sum(...numbers));
let a = [2, 3, 4];
let b = [1, ...a, 5];
console.log("spread operator,spread array as args: ", b);
document.write(
  `spread operator,let a = [2, 3, 4];
let b = [1, ...a, 5]; is ${b}.` +
    "<br>" +
    "<br>"
);

////////////////////////////////must use bind for nested function name(params) {
var person = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    var name = function () {
      console.log(this.firstName + " " + this.lastName);
    };
    return name();
  },
};
person.getFullName();

var person1 = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    var name = function () {
      console.log(this.firstName + " " + this.lastName);
    }.bind(this);
    return name();
  },
};
person1.getFullName();
document.write(
  `var person1 = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    var name = function () {
      console.log(this.firstName + " " + this.lastName);
    }.bind(this);
    return name();
  },
}; is ${person1.name}.` +
    "<br>" +
    "<br>"
);
////////////////////////////////Object Initialization Short Hand
function createuser(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
  };
}
let user = createuser("Dan", "Smith");
console.log(" Object Initialization Short Hand- before : ", user);

function createuser1(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName,
  };
}
let user1 = createuser1("Dan", "Smith");
console.log(" Object Initialization Short Hand- after: ", user1);
document.write(
  `Object Initialization Short Hand:The function createuser1(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName,
  };
} is ${user1.fullName} ` +
    "<br>" +
    "<br>"
);
///////////////////////////////Object Destructuring
let obj = {
  x: 7,
  y: 8,
  z: 9,
};
let x1 = obj.x;
let y1 = obj.y;
let z1 = obj.z;
console.log("Object Destructuring-befoe", x1, y1, z1);

let obj2 = {
  x2: 7,
  y2: 8,
  z2: 9,
};
let { x2, y2, z2 } = obj2; //x2 must exact same as x2 in obj,because it is not parameter
console.log("Object Destructuring-befoe", x2, y2, z2);
document.write(
  `let obj2 = {
  x2: 7,
  y2: 8,
  z2: 9,
};Object Destructuring ,x2 must exact same as x2 in obj,because it is not parameter
x2, y2, z2 is ${x2},${y2},${z2}.` +
    "<br>" +
    "<br>"
);

///////////////////////////////Object.assign
let item = {
  id: 1,
  content: "ES6",
  completed: false,
};
let newItem = Object.assign({}, item, { completed: true });
console.log("Object.assign", newItem, item);
let newItem2 = { ...item, completed: "spread" }; //use {} not () because ... has no bracket,just object istself use {}
console.log("spread same fun as Object.assign", newItem2); //"spread" must quoted by "" that any name not quoted will be variable and lead to undefined error
document.write(
  `let newItem = Object.assign({}, item, { completed: true }); let newItem2 = { ...item, completed: "spread" }; is ${newItem.content},${newItem2.id}.` +
    "<br>" +
    "<br>"
);
let a11, b11, rest;
[a11, b11] = [10, 20];

console.log(a11);
// expected output: 10

console.log(b11);
// expected output: 20

[a11, b11, ...rest] = [10, 20, 30, 40, 50];
console.log("use destructuring:  ", rest);
document.write(
  ` [a11, b11, ...rest] = [10, 20, 30, 40, 50];use destructuring:rest: ${rest}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////// array destructuring
let fruits = ["apple", "banana", "grape"];
let a1 = fruits[0];
let b1 = fruits[1];
let c1 = fruits[2];
console.log("array destructuring:", a1, b1, c1);
let [a2, b2, c2] = fruits;
console.log("array destructuring1:", a2, b2, c2);
let [a3, , c3] = fruits;
console.log("array destructuring2:", a3, c3);
document.write(
  `array destructuring,let fruits = ["apple", "banana", "grape"];let [a3, , c3] = fruits;,a3, c3 is ${a3},${c3}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////// for of loop
let fruits1 = ["apple", "banana", "grape"];
for (let i in fruits1) {
  console.log("for in loop:", fruits1[i]);
}
for (let fruit of fruits1) {
  console.log("for of loop:", fruit);
}
document.write(
  `for (let i in fruits1) {
  console.log("for in loop:", fruits1[i]);
},for (let fruit of fruits1) {
  console.log("for of loop:", fruit);
} is ${fruits1}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////// array find method
let services = [
  { name: "nails", activated: false },
  { name: "haircut", activated: true },
  { name: "feet therapy", activated: true },
];
//let activateserv = services.find(service => service.activated=true); //find activated=treu and return only first one
let activateserv = services.find((service) => (service.activated = true)); //
console.log("array find method", activateserv);
document.write(
  `array find method,let services = [
  { name: "nails", activated: false },
  { name: "haircut", activated: true },
  { name: "feet therapy", activated: true },
]; let activateserv = services.find((service) => (service.activated = true)); is ${activateserv}.` +
    "<br>" +
    "<br>"
);

/////////////////////////////// ES6 map ,key can be object
let carOne = { make: "Audi" };
let carTwo = { make: "Ford" };
let carAge = new Map();
carAge.set(carOne, 3);
carAge.set(carTwo, 5);
console.log("ES6 map ,key can be object", carAge);
document.write(`ES6 map ,key can be object, is ${carAge}.` + "<br>" + "<br>");

/////////////////////////////// ES6 map for of loop
let cars = new Map(); //M must capital
cars.set("carOne", "Audit");
cars.set("carTwo", "Ford");
cars.set("carThree", "GM");
for (let [key, value] of cars) {
  console.log("ES6 map for of loop", `${key}: ${value}`);
}
/////////////////////////////// ES6 weakmap
let personOne = {}; //w and m capital,capital map key can only be objects
let personTwo = {};
let people = new WeakMap();
people.set(personOne, "David");
people.set(personTwo, "Aby");
console.log("ES6 map for of loop: ", people.get(personOne));
console.log("ES6 map for of loop: ", people.get(personTwo));
document.write(
  `ES6  ES6 weakmap,let people = new WeakMap();weakmap key must be object,
people.set(personOne, "David");  people.get(personOne)is ${people.get(
    personOne
  )}.` +
    "<br>" +
    "<br>"
);

/////////////////////////////// ES6 set use add method to insert object
/////////////////////////// and set destructuring
let cars2 = new Set();
cars2.add("Audi");
cars2.add("Ford");
cars2.add("Mercedes");
cars2.add("Audi");
console.log(
  "ES6 set not allowed duplicate 4-1,total number of cars: ",
  cars2.size
); //size no () need,it is property not method

for (let car of cars) {
  console.log("ES6 set for of loop: ", car);
}
let [a31, b31, c31] = cars2;
document.write(
  `let cars2 = new Set();ES6 set use add method to insert object,let [a31, b31, c31] = cars2; is ${a31}, ${b31},${c31}.` +
    "<br>" +
    "<br>"
);
console.log("set destructuring: ", a31, b31, c31);
/////////////////////////////// ES6 Weakset use add method to insert object
let weakCars = new WeakSet();

weakCars.add({ driver: "aby" }); //object ,so must {} in () for add method
let passenger = { passenger: "sarah" };
weakCars.add(passenger);
console.log("wekset has method: ", weakCars.has(passenger));
document.write(
  `weakCars.add({ driver: "aby" }); console.log("wekset has method: ", weakCars.has(passenger));is ${weakCars.has(
    passenger
  )}.` +
    "<br>" +
    "<br>"
);

/////////////////////////////// ES6 Weakset not allowed any change to object properties
let carSlides = [
  { car: "Audi", seen: false },
  { car: "BMW", seen: false },
  { car: "Chevron", seen: false },
  { car: "Cylinder", seen: false },
];
let carsViewed = new WeakSet(); //you cannot use carsViewed apply clicked
function clicked(carSlides) {
  //mutate each car seen property
  carSlides.forEach((car) => carsViewed.add(car));
  carSlides.forEach((car) => (car.seen = true));
}
clicked(carSlides);
console.log(carSlides);
console.log(carsViewed);
/////////////////////////////// ES6 class and inheritance
class Car5 {
  constructor(carSpec) {
    this.name = carSpec.name;
    this.model = carSpec.model;
    this.description = carSpec.description;
  }
  drive() {
    console.log("Drving...");
  }
}
//must use ({}) for new if para is object
let carobj = new Car5({ name: "ford", model: "galaxy", description: "small" });
carobj.drive();
// console.log(carobj.drive());

class Audi extends Car5 {
  //
  constructor(carSpec) {
    super(carSpec);
    this.engine = carSpec.engine;
  }
}

let audi = new Audi({
  name: "Audi",
  model: "a3",
  engine: "a313",
  description: "best audi",
});
console.log(audi);

/////////////////////////////// ES6,promise and promise all
function waitingFor(name) {
  console.log(`waiting for ${name}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Mike") {
        reject(Error("Mike is always late!"));
      } else {
        resolve(name);
      }
    }, 2000);
  });
}
// waitingFor("Abi").then(name => {
//   console.log(`great we got ${name}`);
// });

function leave() {
  console.log("Great we got everyone!");
}

// waitingFor('Abi').then(waitingFor('Thomas').then(waitingFor('John')))
// .then(leave)
var gotImpatient = function (error) {
  console.log(error.message);
  return Promise.resolve("we are leaving");
};
console.log("promise catch error case direclty:  \n");
waitingFor("Abi")
  .then(function () {
    return waitingFor("Thomas");
  })
  .then(function () {
    return waitingFor("Mike");
  })
  .then(function () {
    return waitingFor("John");
  })
  .catch(gotImpatient)
  .then(leave);

function waitForFriend(name) {
  return function () {
    return waitingFor(name);
  };
}

waitingFor("Abi")
  .then(waitForFriend("Thomas"))
  .then(waitForFriend("Mike"))
  .then(waitForFriend("John"))
  .catch(gotImpatient)
  .then(leave);
// promise all
function waitForAll() {
  return Promise.all([
    waitingFor("Allena"),
    waitingFor("Rhoda"),
    waitingFor("Joana"),
  ]);
}
waitForAll().then((firends) => {
  console.log(`PromiseAll:   \n`);
  console.log(`great!${firends[0]} is coming`);
  console.log(`great!${firends[1]} is coming`);
  console.log(`great!${firends[2]} is coming`);
});
/////////////////////////////// get cookie
function myFunction() {
  var win = window.open("https://www.w3schools.com");
  win.focus();
}

// window.open("https://www.geeksforgeeks.org", "_blank");
var x = document.cookie;
console.log("The browser cookie is:  ", x);

////////////////////////////// get cookie1
var allcookies = document.cookie;
document.write("All Cookies : " + allcookies);

// Get all the cookies pairs in an array
cookiearray = allcookies.split(";");

// Now take key value pair out of this array
// for (var i = 0; i < cookiearray.length; i++) {
//   name = cookiearray[i].split("=")[0];
//   value = cookiearray[i].split("=")[1];
//   consol.log("Key is : " + name + " and Value is : " + value);
// }
//////////
function ReadCookie() {
  var allcookies = document.cookie;
  document.write("All Cookies : " + allcookies);

  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(";");

  // Now take key value pair out of this array
  for (var i = 0; i < cookiearray.length; i++) {
    name = cookiearray[i].split("=")[0];
    value = cookiearray[i].split("=")[1];
    document.write("Key is : " + name + " and Value is : " + value);
  }
}

console.log("FizzBuzz Test Here");
for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
////////// findMostReaptedWord in string
function findMostReaptedWord(str) {
  var res = str.split(" ");

  var count;
  var compareString;
  for (var i = 0; i < res.length; i++) {
    count = 0;
    compareString = res[i];
    for (j = 0; i < res.lenth; j++) {
      if (compareString == res[j]) {
        count++;
      }
    }
  }
}
var str = "how do you do";
document.write(
  `var str = how do you do;findMostReaptedWord in string:   ${findMostReaptedWord(
    str
  )}.` + "<br>"
);

function wordsRepeatTimes(str, word) {
  var number = str.split(word).length - 1;
  return number;
}
var r = "Geeks For Geeks ";
document.write(
  `var str = "Geeks For Geeks "in string:   ${wordsRepeatTimes(r, "Geeks")}.` +
    "<br>" +
    "<br>"
);
//////////
const arrMin = (arr) => Math.min(...arr);
arryMath = [20, 10, 5, 10];
console.log("Math.min(...arr)", arrMin(arryMath));

const arrMax = (arr) => Math.max(...arr);
console.log("Math.max(...arr)", arrMax(arryMath));
const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
console.log("Math.sum(...arr)", arrSum(arryMath));
