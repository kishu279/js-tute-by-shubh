// getter and setters

class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // setName(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }
  set fullName(fullName) {
    // fullName.split(" ")
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new person("Subh", "Sharma", 19);
console.log(person1);

// we have to call the methods to run it but not in the case of properties

// console.log(person1.fullName());

// if we want to use this method full name as a property how could we do this ??
// console.log(person1.fullName); --> Subh Sharma
console.log(person1.fullName); // if we use parenthesis here it will give type error
console.log(person1.firstName);
console.log(person1.lastName);

// person1.setName("Neha", "Sharma");

// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.fullName = "Ayush sharma";
// console.log(person1);
// console.log(person1.fullName);

person1.fullName = "ayush Sharma";
console.log(person1);
