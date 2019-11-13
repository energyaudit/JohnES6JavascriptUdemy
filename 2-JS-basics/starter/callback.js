
  ///////////////call back
   // add() function is called with arguments a, b 
   // and callback, callback will be executed just  
   // after ending of add() function 
   function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
     
   // disp() function is called just 
   // after the ending of add() function  
   function disp(){ 
   document.write('This must be printed after addition'+"<br>"); 
   } 
     
   // Calling add() function 
   add(5,6,disp);  
   
   /////////////////flat
   var arr1 = [1, 2, [3, 4]];
   document.write(arr1.flat()); 
// [1, 2, 3, 4]
document.write("<br>")

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]
document.write("<br>")
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]
document.write("<br>")
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4.flat(Infinity));     
