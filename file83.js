// hoisting

// function myfunc() {
//   console.log("This is my function");
// }

// lets change this  to function expression

console.log(myfunc);

// if its expression its undefined
// if its declaration it will print the function
var myfunc = function () {
  console.log("this is my function");
};

// expected output
// function () {
//   console.log("this is my function");
// };
