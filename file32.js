// objects are reference type 
// arrays are good but not sufficient for the real world data 
// objects stores key value pairs
// object don't have index

//how to create an object ??

const person = {
    name : "subh",
    age : 21,
    hobbies : ['guitar','coding','listening music']
};
console.log(person);

// how can we access data from objects ?

console.log(person["name"]); //bracket notation
console.log(person.name);

// how can we add key value pair to objects
person.gender = "male";

console.log(person);