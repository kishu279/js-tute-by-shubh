// push pop shift unshift 

let fruits = ["apple", "mango","banana"];
console.log(fruits);

fruits.push("grapes"); //push doesn't return anything 
console.log(fruits);

// push will add the given element at the end of the array 

let poppedFruit = fruits.pop()
console.log("The popped fruit is", poppedFruit); // this returns a value which we can store in a variable 

// pop will remove the last element of the array 
let fruits2 = fruits.shift();
console.log(fruits2)
// shift will remove the element from starting 

// unshift will add the element from starting 

// always use push pop instead of shift unshift because push pop is faster 
// but in the case of shift and unshift the array needs to be saved before performing any action 
