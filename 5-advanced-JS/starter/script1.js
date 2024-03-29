// Lecture: Function constructor

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
    let age = 2020 - this.yearOfBirth;
    return age;
  };
};

//Person.prototype.calculateAge  = function() {
//    console.log(2016 - this.yearOfBirth);
//};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");
document.write(
  `var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
  };
}; is ${john.calculateAge()}.` +
    "<br>" +
    "<br>"
);
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

///////////////////////////
Lecture: Object.create;

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: {
    value: "Jane",
  },
  yearOfBirth: {
    value: 1969,
  },
  job: {
    value: "designer",
  },
});

/////////////////////////////
// Lecture: Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: "John",
  age: 26,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon",
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);

/////////////////////////////
// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = []; //arrayResult
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i])); //array build in push //method push value into array
  }
  return arrRes; //return arrayresult
}

function calculateAge(el) {
  //call back function
  return 2020 - el;
}

function isFullAge(el) {
  //call back function
  return el >= 18;
}

function maxHeartRate(el) {
  //call back function
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
document.write(
  `var years = [1990, 1965, 1937, 2005, 1998];function arrayCalc(arr, fn) {
  var arrRes = []; //arrayResult
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i])); //array build in push //method push value into array
  }
  return arrRes; //return arrayresult
} is ${ages}.` +
    "<br>" +
    "<br>"
);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

/////////////////////////////
// Lecture: Functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
      return name + "what u teach?";
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");
designerQuestion("jane");
designerQuestion("Mark");
designerQuestion("Mike");

interviewQuestion("teacher")("Mark");
document.write(
  `Functions returning functions
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
},var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");interviewQuestion("teacher")("Mark");is ${interviewQuestion(
    "teacher"
  )("Mark")}.` +
    "<br>" +
    "<br>"
);
/////////////////////////////
// Lecture: IIFE
//////////////IIFE1
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function () {
  var score = Math.random() * 10;
  console.log("ifei1-1", score >= 5);
})();

//if try outside: console.log(score);//error because no access inside ifei

let ifei2 = (function (goodLuck) {
  var score = Math.random() * 10;
  console.log("ifei1-2", score >= 5 - goodLuck);
  return score >= 5 - goodLuck;
})(5);
document.write(
  `(function (goodLuck) {
  var score = Math.random() * 10;
  console.log("ifei1-2", score >= 5 - goodLuck);
})(5); if try outside: console.log(score);//error because no access inside ifei,:is ${ifei2}.` +
    "<br>" +
    "<br>"
);
//////////////IIFE2
var studentEnrollment = (function () {
  //private variables which no one can change
  //except the function declared below.
  var count = 0;
  var prefix = "S";
  // returning a named function expression,count & prefix are the 2 private
  //variables which can’t be changed by anyone & can only be accessible to the inner function (here its innerFunc).
  //This access is possible only by the feature called Closure.
  function innerFunc() {
    count = count + 1;
    return prefix + count;
  }
  return innerFunc;
})();
var x = studentEnrollment(); // S1
console.log("IIFE2", x);
var y = studentEnrollment(); // S2
console.log("IIFE2", y);
/////////////////////////////
// Lecture: Closures
function createAnimal(name, job) {
  // "Private" variables here
  let _name = name;
  let _job = job;

  // Public variables here
  return {
    // Getter Methods
    getName() {
      return _name;
    },
    getJob() {
      return _job;
    },
    // Setter Methods
    setName(newName) {
      _name = newName;
    },
    setJob(newJob) {
      _job = newJob;
    },
  };
}
//
//  We can then invoke the factory function to create new instances of an animal object. Note that every time we invoke the factory function, a new closure is created. Therefore, each returned object has access to its own closure.

const presto = createAnimal("Presto", "Digger");
const fluffykins = createAnimal("Fluffykins", "Jumper");
// So what have we achieved by doing this? Well, with the power of closures, we have essentially emulated "private" variables in JavaScript.
// These properties will be inaccessible
console.log("closure make private variables possible", presto._name); // undefined
console.log(presto._job); // undefined
console.log(fluffykins._name); // undefined
console.log(fluffykins._job); // undefined

// Getter methods have access to the closure
console.log(presto.getName()); // 'Presto'
console.log(presto.getJob()); // 'Digger'
console.log(fluffykins.getName()); // 'Fluffykins'
console.log(fluffykins.getJob()); // 'Jumper'

// Setter methods can mutate the variables in the closure
presto.setName("Quick");
presto.setJob("Bone Finder");
fluffykins.setName("Mittens");
fluffykins.setJob("Fish Eater");

console.log(presto.getName()); // 'Quick'
console.log(presto.getJob()); // 'Bone Finder'
console.log(fluffykins.getName()); // 'Mittens'
console.log(fluffykins.getJob()); // 'Fish Eater'

//////////////Closures1
var a = 10;
function app() {
  var b = 2;
  var d = 3;
  function add() {
    var c = a + b;
  }
  return add;
}
var x = app();
console.dir(x);
//////////////Closures2
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log("Closures", retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(
  "makeAdder is a function factory — it creates functions which can add a specific value, In the above example we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10. add5 and add10 are both closures.They share the same function body definition, but store different lexical environments.In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10"
);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
document.write(
  `function makeAdder(x) {
  return function (y) {
    return x + y;
  };
} ,makeAdder is a function factory —,var add5 = makeAdder(5);
var add10 = makeAdder(10),They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
is ${add5(2)}, ${add10(2)}.` +
    "<br>" +
    "<br>"
);

/*
In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. In the above example we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10.
add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
*/

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("teacher")("John");

/////////////////////////////
// Lecture: Bind, call and apply

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

document.write(
  `function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
} ,var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));is ${fullJapan}.` +
    "<br>" +
    "<br>"
);

/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans) {
//     if (ans === this.correct) {
//       console.log("Correct answer!");
//     } else {
//       console.log("Wrong answer. Try again :)");
//     }
//   };

//   var q1 = new Question(
//     "Is JavaScript the coolest programming language in the world?",
//     ["Yes", "No"],
//     0
//   );

//   var q2 = new Question(
//     "What is the name of this course's teacher?",
//     ["John", "Micheal", "Jonas"],
//     2
//   );

//   var q3 = new Question(
//     "What does best describe coding?",
//     ["Boring", "Hard", "Fun", "Tediuos"],
//     2
//   );

//   var questions = [q1, q2, q3];

//   var n = Math.floor(Math.random() * questions.length);

//   questions[n].displayQuestion();

//   var answer = parseInt(prompt("Please select the correct answer."));

//   questions[n].checkAnswer(answer);
// })();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans, callback) {
//     var sc;

//     if (ans === this.correct) {
//       console.log("Correct answer!");
//       sc = callback(true);
//     } else {
//       console.log("Wrong answer. Try again :)");
//       sc = callback(false);
//     }

//     this.displayScore(sc);
//   };

//   Question.prototype.displayScore = function (score) {
//     console.log("Your current score is: " + score);
//     console.log("------------------------------");
//   };

//   var q1 = new Question(
//     "Is JavaScript the coolest programming language in the world?",
//     ["Yes", "No"],
//     0
//   );

//   var q2 = new Question(
//     "What is the name of this course's teacher?",
//     ["John", "Micheal", "Jonas"],
//     2
//   );

//   var q3 = new Question(
//     "What does best describe coding?",
//     ["Boring", "Hard", "Fun", "Tediuos"],
//     2
//   );

//   var questions = [q1, q2, q3];

//   function score() {
//     var sc = 0;
//     return function (correct) {
//       if (correct) {
//         sc++;
//       }
//       return sc;
//     };
//   }
//   var keepScore = score();

//   function nextQuestion() {
//     var n = Math.floor(Math.random() * questions.length);
//     questions[n].displayQuestion();

// var answer = prompt("Please select the correct answer.exit to exit");

//     if (answer !== "exit") {
//       questions[n].checkAnswer(parseInt(answer), keepScore);

//       nextQuestion();
//     }
//   }

//   nextQuestion();
// })();

/////////////////////the callback function
function done() {
  console.log("the callback function:Done");
  return true;
}

//the parent function
function increment(num, callBack) {
  for (var i = 0; i <= num; i++) {
    console.log(i);
  }
  return callBack();
}

//the callback function is passed to the increment function
increment(10, done);
document.write(
  `function increment(num, callBack) {
  for (var i = 0; i <= num; i++) {
    console.log(i);
  }
  return callBack();
} ,the callback function is passed to the increment function
increment(10, done);is ${increment(10, done)}.` +
    "<br>" +
    "<br>"
);
/////////////////////reverse string

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log("the reversed string is:   ", reverseEachWord);
/////////////////////Implement enqueue and dequeue using only two stacks
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while (stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}
/////////////////////empty an array
var arrayList = ["a", "b", "c", "d", "e", "f"]; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList = []; // Empty the array
document.write(
  `arrayList = []; // Empty the arrayis ${arrayList}.` + "<br>" + "<br>"
);
// arrayList.length = 0;//Method 2
console.log("arrayList is empty now:  ", arrayList);
console.log(anotherArrayList);
///////////////////// check if object is array
var arrayList = [1, 2, 3];
console.log("is arrayList a array?  ", Array.isArray(arrayList));
document.write(
  `"is arrayList a array?  ", Array.isArray(arrayList) is ${Array.isArray(
    arrayList
  )}.` +
    "<br>" +
    "<br>"
);

/////////////////////fizzbuzz
for (let i = 1; i <= 20; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
}
document.write(
  `for (let i = 1; i <= 20; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
} is .` +
    "<br>" +
    "<br>"
);
document.write(
  `The sum of for (let i = 1; i <= 20; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
} is .` +
    "<br>" +
    "<br>"
);
/////////////////////anagram
var firstWord = "Mary";
var secondWord = "Army";

console.log("a is anagram of b?  ", isAnagram(firstWord, secondWord)); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}

document.write(
  `  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;is ${isAnagram("Mary", "Army")}.` +
    "<br>" +
    "<br>"
);
/////////////////////duplicate([1, 2, 3, 4, 5]);
function duplicate(arr) {
  return arr.concat(arr);
}
document.write(
  `function duplicate(arr) {
  return arr.concat(arr);
} is ${duplicate([1, 2, 3, 4, 5])}.` +
    "<br>" +
    "<br>"
);
/////////////////////type of argument
function func(x) {
  console.log("function arugments type and length");
  console.log(typeof x, arguments.length);
}
func(); //==> "undefined", 0
func(7); //==> "number", 7
func("1", "2", "3"); //==> "string", 3
/////////////////////Palindrome
function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  return str == str.split("").reverse().join("");
}
console.log("Palindrome:level", isPalindrome("level")); // logs 'true'
console.log("Palindrome:levels", isPalindrome("levels")); // logs 'false'
console.log(
  "Palindrome:A car, a man, a maraca",
  isPalindrome("A car, a man, a maraca")
); // logs 'true'
document.write(
  `function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();//To replace all separate occurrences of a non-word char in a string,
  return str == str.split("").reverse().join("");
} is ${isPalindrome("level")}.` +
    "<br>" +
    "<br>"
);
