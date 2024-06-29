// sets ( it is a iterable)
// store data
// sets also have its own method
// No index based access
// Order is not guaranteed
// Unique items only ( no duplicates allowed);

// how to declare a set
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(4);
numbers.add(4);
console.log(numbers);

if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

for (let number of numbers) {
  console.log(number);
}

const myArray = [1, 1, 2, 4, 5, 6, 7, 8, 8, 8, 3];
const uniqueElements = new Set(myArray);

console.log(myArray);
console.log(uniqueElements);
console.log(uniqueElements.size);
