
// Lecture: Hoisting


//function 
calculateAge(1990);//hoisting,functuon can be called before //declaration
function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1965);
// retirement(1956);//will faile before declaration because it is function expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
retirement(1958)

// variables

console.log(age);//undefined hoisting,variable not defined has default value undefined all the time in javasript
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);





// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
//    console.log(c);
    console.log(a+d);
}


// Lecture: The this keyword

console.log(this);

calculateAge(1985);

function calculateAge(year) {//function is clled by gloabl object
    console.log(2016 - year);
    console.log(this);//the this is gloabl which window here
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {//here function turn to method because of object
        console.log(this);
        console.log(this.yearOfBirth);
        console.log(2016 - this.yearOfBirth);
       function innerFunction() {//even the function called from object
        console.log(this);//regular function again, so it is glabal object window
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();

