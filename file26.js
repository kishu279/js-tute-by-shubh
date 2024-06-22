// how to clone and array ?

let array1 = ["item1","item2"];
let randomarray = [...array1, "item3"];

//method 1 
let array2 = ["item1","item2"]; // we wont use this method because we will have large number of elements in array 

//2nd method
let array3 = array1.slice(0);

//3rd method 
let array4 = [].concat(array1);

//4th method 
let array5 = [...array1]; // we will use this most of the times  ... this is known as spread operator 

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
console.log(randomarray);