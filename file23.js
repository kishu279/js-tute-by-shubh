// intro to array --> arrays are ordered collection of items 
// we can store any type of the databases in an array we can even store array in arrays
// reference type 



// how to create arrays ??
let fruits = ["apple", "mango","banana"];
let numbers = [1,2,3,4];
let mixed = [1,2,3,4,"string",null,undefined];
let hello = 7;

console.log(mixed);
console.log(numbers);
console.log(fruits);

// how do we change elements in an array ??
fruits[0]="pineapple";
console.log(fruits);
console.log(typeof fruits);

// arrays are mutable

// how to check if its actually an array ?

console.log(Array.isArray(fruits));
console.log(Array.isArray(hello));

