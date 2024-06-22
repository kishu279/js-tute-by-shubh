// primitive and reference datatypes

let num1 = 6 ;
let num2 = num1 ;
console.log("the value of num 1 is", num1);
console.log("the value of num 2 is", num2);

num1++;
console.log("After incrementing");
console.log("the value of num 1 is", num1);
console.log("the value of num 2 is", num2);

//reference types
let array1 = ["item1","item2","item3"];
let array2 = [array1];

console.log("Array1", array1);
console.log("Array2", array2);

array1.push("item4");

console.log("after changing the array: ");
console.log("Array1", array1);
console.log("Array2", array2);