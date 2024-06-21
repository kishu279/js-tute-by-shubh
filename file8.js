//typeof operator 

//data types 
// string 
// number
// boolean
// undefined
// null
// BigInt 
// Symbol 

let age = 19 ;
let myName = "Subhajit";

console.log(typeof age);

// convert number to string --> typecasting 

console.log(typeof (age + " ")); // if you add a string to a number it will change to string 

// string to number conversion 
let myString = +"18"; // if you add + before the string it will get converted to a number 
console.log(typeof myString);


let salary = 100000;
salary = String(salary);
console.log(typeof(salary));