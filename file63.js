// maps
// map is iterable

// stores data in ordered fashion

// stores in key value pair (like objects )
// duplicate keys are not allowed like objects

// difference between maps and objects

//object literal
// key --> String
// key --> Symbol

// const person = {
//   firstName: "Subhajit",
//   age: 19,
//   1: "one",
// };

// console.log(person.firstName);
// console.log(person["firstName"]);

// for (let key in person) {
//   console.log(typeof key);
// }

//objects completed

// -------------------------------------------------------------------------------------------------------------------

// Now we will talk about maps
// key value pair
const person2 = new Map(); // this is how we declare a map
person2.set("firstName", "Subh");
person2.set("age", 19);
person2.set(1, "one");
person2.set([1, 2, 3], "onetwothree");
person2.set({ 1: "one" }, "object literal");
// console.log(person2);

// console.log(person2["firstName"]);

// how to access from map
// we use the get method
// console.log(person2.get("age"));
// console.log(person2.get(1));

// if we want to console all keys
// console.log(person2.keys());

// for (let key of person2.keys()) {
//   console.log(key, typeof key);
// }

// objects were not iterable but maps are

for (let [key, value] of person2) {
  //   console.log(Array.isArray(key));
  console.log(key, value);
}

// in objects the key must be a string but that doesn't happens in the case of map
// key can be anything in map

// let see a realistic example

const person1 = {
  id: 1,
  firstName: "Subh",
};
const newPerson = {
  id: 2,
  firstName: "Neha",
};

// const person = new Map([
//   ["firstName", "Subh"],
//   ["age", 19],
// ]);

const userInfo = new Map();
userInfo.set(person1, { age: 19, gender: "male" });
userInfo.set(newPerson, { age: 19, gender: "female" });
console.log(userInfo);

console.log(person1.id);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(newPerson).gender);

// this is how we use maps
