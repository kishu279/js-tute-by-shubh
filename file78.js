//super keyword
// we want to show the speed of the dog
// objects are also known as instances in javascript

class girl {
  constructor(Myname, age) {
    this.Myname = Myname;
    this.age = age;
  }
  eat() {
    return `${this.Myname} is eating`;
  }
  isSuperCute() {
    return this.age <= 10;
  }
  isCute() {
    return true;
  }
}

class Dog extends girl {
  constructor(Myname, age, speed) {
    // here super means the parent class
    super(Myname, age);
    this.speed = speed;
  }

  run() {
    return `${this.Myname} is running at ${this.speed} kmph`;
  }
}

const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.run());
