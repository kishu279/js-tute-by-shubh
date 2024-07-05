const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);

// by creating a empty object
// const obj3 = {};
// there is one more way to create empty object

console.log(obj2);
console.log(obj2.key1);

// how this is happening ??

// __proto__
// official ecmascript documentation
// [[prototype]] and __proto__ // both are same
// prototype // this ia a different we will study in next file

console.log(obj2.__proto__);
