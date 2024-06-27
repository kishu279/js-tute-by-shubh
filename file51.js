// important array methods 

const numbers = [1,2,3,4];

function myFunc (number , index ){
    console.log(`index is ${index} number is ${number}`);
}


numbers.forEach(myFunc);
// runs for each element as loop 

const users = [
    {firstname: "subh", age:"19"},
    {firstname: "neha", age:"19"},
    {firstname: "Anisha", age:"20"},
    {firstname: "Ayush", age:"21"},
]

users.forEach(function(user){
    console.log(user.firstname);
}) // we can make this a arrow function too 

for (let user of users){
    console.log(user.firstname);
}

// this both is gonna perform the same 