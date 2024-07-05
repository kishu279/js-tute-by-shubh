// arrow function

// const user1 = {
//   firstName: "Subh",
//   age: 8,
//   about: () => {
//     console.log(this);
//     console.log(this.firstName, this.age);
//   },
// };

const user1 = {
  firstName: "Subh",
  age: 8,
  about() {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

// means user1 is not the this for about function
user1.about();
