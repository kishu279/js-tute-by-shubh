// this a memory related problem

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user, (age = age);
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

// console.log(user1);
// console.log(aboutUser);

const user1 = createUser(
  "Subhajit",
  "Chaudhhury",
  "subh@example.com",
  19,
  " h.no 06"
);
const user2 = createUser(
  "Prachi",
  "patil",
  "prachi@example.com",
  8,
  " h.no 07"
);

const user3 = createUser(
  "Vidyadhar",
  "Chaudhhury",
  "vidya@example.com",
  19,
  " h.no 06"
);

console.log(user1);
console.log(user2);
console.log(user3);
