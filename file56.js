// find method 

const myArray = ['hello','cat','dog','lion'];
const isLength = (string) =>{
    return string.length === 3;
}

// const res = myArray.find(isLength);z
const res = myArray.find((string) => string.length ===3);
console.log(res);

const users = [
    {userId: 1 , userName : "Subh"},
    {userId: 2 , userName : "Ayush"},
    {userId: 3 , userName : "Neha"},
    {userId: 4 , userName : "LOST"},
    {userId: 5 , userName : "HAZEL"},
]

// we can use this method on unique values 

const resOfUser = users.find((user)=>user.userId===3);
console.log(resOfUser);