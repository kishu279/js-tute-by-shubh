// how to iterate in objects 


const person = {
    name: "subh",
    age:22,
    "person hobbies" : ['guitar','coding','listening music']
};

//for in loop 
// object.keys

for(let key in person){
    console.log(key, ":", person[key]);
}

console.log(Object.keys(person));
// this object.keys will return an array 

console.log(typeof (Object.keys(person)));

const val = Array.isArray(Object.keys(person));
console.log(val);


//for of loop 

for (let key of Object.keys(person)){
    console.log(person[key]);
}