// for loop in array 

// Creating an array with 5 elements
const myArray = [1, 2, 3, 4, 5];
const fruits = ["apple","grapes","banana","avacardo"];

console.log(myArray.length);
console.log(myArray[myArray.length-1]);
console.log(myArray); // Output: [1, 2, 3, 4, 5]


let fruits2 = [];

for(i=0;i<=fruits.length-1;i++){
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits2)
}
