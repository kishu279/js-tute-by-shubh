// factory functions

const user1 = {
  firstName: "Prachi2",
  lastName: "patil",
  email: "prachi@exmaple.com",
  age: 8,
  address: "h.no 00 , kolkata , west bengal",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

// const user2 = {
//   firstName: "Prachi",
//   lastName: "patil",
//   email: "prachi@exmaple.com",
//   age: 8,
//   address: "h.no 00 , kolkata , west bengal",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// const user3 = {
//   firstName: "Prachi 3",
//   lastName: "patil",
//   email: "prachi@exmaple.com",
//   age: 8,
//   address: "h.no 00 , kolkata , west bengal",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// if we don't want to face this problem we can make a function for this
// function that creates objects
// 1) add key value pair
// 2) objects ko return krega

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user, (age = age);
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

// console.log(user1);
const aboutUser = user1.about();
// console.log(aboutUser);

const newUser = createUser(
  "Subhajit",
  "Chaudhhury",
  "subh@example.com",
  17,
  " h.no 06"
);
console.log(newUser);
const is18 = newUser.is18();
console.log(is18);
