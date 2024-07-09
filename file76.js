// class keyword
//2015 / es6
// class are fake

class createUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    (this.lastName = lastName), (this.email = email);
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
}

const user1 = new createUser(
  "Subhajit",
  "Chaudhhury",
  "subh@example.com",
  19,
  " h.no 06"
);
const user2 = new createUser(
  "Prachi",
  "patil",
  "prachi@example.com",
  8,
  " h.no 07"
);

const user3 = new createUser(
  "Vidyadhar",
  "Chaudhhury",
  "vidya@example.com",
  19,
  " h.no 06"
);

// new keyword is must to call the constructor

console.log(user1);
console.log(user1.firstName);
console.log(user2.firstName);

// if we want to see the prototype of user1
console.log(Object.getPrototypeOf(user1));
