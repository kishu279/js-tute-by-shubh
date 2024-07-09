// new keyword

// let numbers = [1, 2, 3];
let numbers = new Array(1, 2, 3);
console.log(Array.isArray(Array.prototype)); // this is returning an object

console.log(Object.getPrototypeOf(numbers));

console.log(numbers);

// arrays prototype was an array

// in javascript arrays are also an object

function hello() {
  console.log("hello");
}
// prototype
// that prototype will be in an object

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype); // now this is an array
hello.prototype.push("1");

// that proto
// {}
// new instance {}
// it returns this object
