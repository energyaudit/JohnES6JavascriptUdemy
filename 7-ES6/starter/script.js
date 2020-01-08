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
