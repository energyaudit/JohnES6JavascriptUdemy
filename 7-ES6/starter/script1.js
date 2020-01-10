/////////////////////////////////
// Lecture: let and const


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);

// ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log("var is bad to allowed undefined-firstName:" + firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }


    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {

    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log("scoped:" + i);
}

console.log("scoped i won't overwirte outsided i:" + i);

var ii = 23;

for (var ii = 0; ii < 5; ii++) {
    console.log("var not for loop{} scoped:" + ii);
}

console.log("var in for loop{} will overwirte outsided ii:" + ii);

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


// ES5
(function () {
    var c = 3;
})();

//console.log(c);

/////////////////////////////////
// Lecture: Strings and string template literal


let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6:`-back ticks to use template
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log("starWith:" + n.startsWith('j'));
console.log("endWith:" + n.endsWith('Sm'));
console.log("Contain:" + n.includes('oh'));
console.log("Repeat:" + `${firstName} `.repeat(5));

/////////////////////////////////
// Lecture: Arrow functions


const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

/////////////////////////////////
// Lecture: Arrow functions 2

const myFunction = () => {
    console.log("arrow function as function" + this);
};
// call it
myFunction();

const myObject = {
    myMethod: () => {
        console.log("arrow function as method" + this);
    }
};
myObject.myMethod();



// ES5

var box55 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        //  var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'function call from global or outside of object,This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box55.clickMe();
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'function call from global or outside of object fixed by assign this to self,This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends);
/////////////////////////////////
// Lecture: Destructuring


// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log("Destructuring Name:" + name);
console.log("Destructuring age:" + age);

const obj = {
    firstName6: 'John',
    lastName6: 'Smith'
};

const {
    firstName6,
    lastName6
} = obj;
console.log("Destructuring FirstName:" + firstName);
console.log("Destructuring LastName:" + lastName);

const {
    firstName6: a,
    lastName6: b
} = obj;
console.log("Destructuring FirstName and rename a:" + a);
console.log("Destructuring LastName and rename b:" + b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log("Destructuring function returned array:age:" + age2);
console.log("Destructuring function returned array retriement:" + retirement);
