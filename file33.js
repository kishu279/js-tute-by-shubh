// dot vs bracket notation 

const key = "email";

const person = {
    name: "subh",
    age:22,
    "person hobbies" : ['guitar','coding','listening music']
};

console.log(person['person hobbies']); 

person[key] = 'subhajitchaudhuryexample@gmail.com';
console.log(person);
