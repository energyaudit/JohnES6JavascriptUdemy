// Lecture: Hoisting

//function
calculateAge(1990); //hoisting,functuon can be called before //declaration
//function calculateAge(year) {
//    console.log(2019 - year);
//}

calculateAge(1965);
// retirement(1956);//will faile before declaration because it is function expression
var retirement = function (year) {
  console.log(
    "Hoisting not work with function expression,so only call it after this line,retirement(1958):   ",
    65 - (2016 - year)
  );
};
retirement(1958);

// variables

console.log(
  "age declare later thans this line,variable not defined has default value undefined all the time in javasript: ",
  age
); //undefined hoisting,variable not defined has default value undefined all the time in javasript
var age = 23;

function foo() {
  console.log(
    "age is inside function so even global declare age before,scope not covered so will be undefined because of not declared before this line inside function: ",
    age
  );
  var age = 65;
  console.log(age);
}
foo();
console.log(age);

// Lecture: Scoping

// First scoping example
var a = "Hello!";
first1();

function first1() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(
      "nested function alwasys has lexcical scope so second can access first scope all way untill to global,first access lexcial to parent of global too: ",
      a + b + c
    );
  }
}

// Example to show the difference between execution stack and scope chain
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  //    console.log(c);
  console.log(
    "console.log(a+d+b+c);will not work that :third is defined in global so it return to global,so it has access only itself-d and global-a,both b and c not,if want then third must be nested into second function as above exp",
    a + d
  );
  //  console.log(a + d + b);
  //    console.log(a + d + c);
}
document.write(
  `difference between execution stack and scope chainis , "console.log(a+d+b+c);will not work that :third is defined in global so it return to global,so it has access only itself-d and global-a,both b and c not,if want then third must be nested into second function as above exp",.` +
    "<br>" +
    "<br>"
);

// Lecture: The this keyword

console.log("call from global context this:  ", this);

calculateAge(1985);

function calculateAge(year) {
  //function is clled by gloabl object
  console.log(2016 - year);
  console.log(this); //the this is gloabl which window here
}

/*If we use call and apply method with calling function, both of those methods take
 as their first parameter as execution context. that is this binding.*/
function bike() {
  console.log(this.name);
  document.write(` ${this.name}.`);
}
document.write(
  `function bike() {
    console.log(this.name)};var name = "Ninja"; var obj = {
    name: "Pulsar"
}bike()--"call from global:\n"; bike.call(obj);` + "<br>"
);
console.log("call from global:\n");
var name = "Ninja";
var obj = {
  name: "Pulsar",
};

bike(); // "Ninja"
console.log("use call binding this:bike.call(obj): \n");
bike.call(obj); // "Pulsar"

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    //here function turn to method because of object
    console.log(this);
    console.log(this.yearOfBirth);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
      //even the function called from object
      document.write(
        `inner function inside method is not method ,its scope is window agin: 
       ${this}.` +
          "<br>" +
          "<br>"
      );
      console.log(
        "inner function inside method is not method ,its scope is window agin:  ",
        this
      ); //regular function again, so it is glabal object window
    }
    innerFunction();
    let age = 2020 - this.yearOfBirth;
    return age;
  },
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,
};

console.log(
  "object method borrowing, mike.calculateAge = john.calculateAge;//function as variable:mike.calculateAge() \n "
);

mike.calculateAge = john.calculateAge; //function as variable
mike.calculateAge();
document.write(
  `object method borrowing, mike.calculateAge = john.calculateAge; is ${mike.calculateAge()}.` +
    "<br>" +
    "<br>"
);
