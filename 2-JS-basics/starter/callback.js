///////////////call back
// add() function is called with arguments a, b
// and callback, callback will be executed just
// after ending of add() function
function add(a, b, callback) {
  document.write(`The sum of ${a} and ${b} is ${a + b}.` + "<br>" + "<br>");
  callback();
}

// disp() function is called just
// after the ending of add() function
function disp() {
  document.write("This must be printed after addition" + "<br>");
}

// Calling add() function
add(5, 6, disp);

//////////////////////////////defined the callback function directly when call it
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework("math", function () {
  console.log("Finished my homework");
});

//////////////////////////////promise1
const p1 = new Promise((resolve, reject) => {
  // eslint-disable-line no-unused-vars
  setTimeout(() => {
    resolve("promise1 resolve:AppDividend");
  }, 1000);
});

p1.then((values) => {
  console.log(values);
});

//////////////////////////////promise2
var promise = new Promise(function (resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  const z = "geeksforgeeks1";
  if (x === y) {
    resolve();
  } else {
    reject();
  }

  if (x === z) {
    //this will not execute because resolve already exit {} block
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("promise2 resolve:Success, You are a GEEK");
  })
  .catch(function () {
    console.log("Some error has occured");
  });

/////////////////flat
var arr1 = [1, 2, [3, 4]];
document.write(arr1.flat());
// [1, 2, 3, 4]
document.write("<br>");

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]
document.write("<br>");
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]
document.write("<br>");
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4.flat(Infinity));
