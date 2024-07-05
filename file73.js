// prototype

function hello() {
  console.log("hello world");
}

// const hello = { key1: "value1" };

// hello();

// this is a simple function
// javascript >>>> function ---> function + object

// console.log(hello.name);

// you can also add your own properties to a function

hello.myOwnProperty = "hola amigo";
console.log(hello.myOwnProperty);

// name property ---> tells name

// function provides more useful properties
// call apply bind

console.log(hello.prototype);
// only functions provide the prototype property

if (hello.prototype) {
  console.log("prototype is present");
} else {
  console.log("prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "lalala";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());
