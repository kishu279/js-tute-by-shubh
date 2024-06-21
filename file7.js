//trim()
//toUpperCase()
//toLowerCase()
//slice()

// if we just trim we wont be able to see the updated value we need to store that information in another variable or
// change the value of the variable before console.log

let firstName = "                         Vidyadhar Pandey                        ";

console.log(firstName.length);
let newName = firstName.trim();

console.log(newName.length);
console.log(newName);

let upperName = newName.toUpperCase();
console.log(upperName);

let lowerName = newName.toLowerCase();
console.log(lowerName);

// start index
// end index

let newString = upperName.slice(0,4); // it will move from 0 to 3 
console.log(newString);