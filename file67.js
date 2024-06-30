// CALL APPLY BIND

// function hello() {
//   console.log("Hello world");
// }

// hello.call();

// const user1 = {
//   firstName: "Neha",
//   age: 19,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
  firstName: "Subh",
  age: 19,
};

const user2 = {
  firstName: "neha",
  age: 20,
};

//call
about.call(user2, "coding", "shreya ghosal");

// apply
about.call(user2, ["coding", "shreya ghosal"]);

// bind
const func = about.bind(user1, "guitar", "imagine dragons");
func();
