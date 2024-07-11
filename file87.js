// closures in javascript

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//  so here the question is can it access the a
var sum = function (a) {
  console.log("number is " + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};
// we are retaining the value of the previous function

var shop = sum(2); //calling
console.log(shop(5));
