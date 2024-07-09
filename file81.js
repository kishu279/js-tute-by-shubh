// static methods are those methods which are directly class related

class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static classInfo() {
    return "this is person info";
  }

  static desc = "static property";

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
  eat() {
    return `${this.firstName} is eating`;
  }
  isSuperCute() {
    return this.age <= 10;
  }
  isCute() {
    return true;
  }
}

const person1 = new person("Harsh", "Sharma", 19);
console.log(person1.eat());
const ans = person.classInfo();

console.log(ans);
console.log(person.desc);
