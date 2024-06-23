// objects inside array 
// this is very useful in real world application 

const users = [
    {userId :1 , FirstName : "Subh", gender: "Male"},
    {userId :2 , FirstName : "neha", gender: "female"},
    {userId :3 , FirstName : "megha", gender: "female"},
    {userId :4 , FirstName : "ujjwal", gender: "male"},
]

for (let user of users){
    // console.log(user);
    console.log(user.FirstName);
}

// nested destructuring

const users2 = [
    {userId :1 , FirstName : "Subh", gender: "Male"},
    {userId :2 , FirstName : "neha", gender: "female"},
    {userId :3 , FirstName : "megha", gender: "female"},
    {userId :4 , FirstName : "ujjwal", gender: "male"},
]

const [ user1 , user2 , user3 ] = users2;
console.log(user1);

// if we want the userId of user  and gender of user3 how can we do that ??

const [{FirstName}, , {gender}] = users2;
console.log(FirstName);
console.log(gender);