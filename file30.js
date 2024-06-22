// for in loop 

const fruits = ["apple","grapes","banana","avacardo"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}

console.log(fruits2);