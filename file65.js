// methods
// function inside object

function personInfo() {
  console.log(
    `The person name is ${this.firstName} the person age is ${this.age}`
  );
}

const person = {
  firstName: "Subh",
  age: 20,
  about: personInfo,
};
const person2 = {
  firstName: "Neha",
  age: 28,
  about: personInfo,
};
const person3 = {
  firstName: "Prachi",
  age: 10,
  about: personInfo,
};

// console.log(person.about());
// console.log(personInfo);
person.about();
person2.about();
person3.about();
