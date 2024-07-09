// same method in subclass

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
  eat() {
    return `Modified Eat: ${this.Myname} is eating`;
  }
  run() {
    return `${this.Myname} is running at ${this.speed} kmph`;
  }
}

const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());

// so the question is why the modified eat worked ?
// so js first went to the Dog class and it found the value if i didn't then it will go to the parent class
