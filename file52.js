// map method

// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

const numbers = [ 3,4,6,1,8];
const square = function(number){
    return number*number;
    // its very crucial to return while using map 
}

const squareNumber = numbers.map(square);
console.log(squareNumber);



const users = [
    {firstName: "Subh", age:"19"},
    {firstName: "Neha", age:"19"},
    {firstName: "Anisha", age:"20"},
    {firstName: "Ayush", age:"21"},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);