// class name animal
//  two property name and age
// method eat

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

const sweetPrachi = new girl("Prachi", 8);
console.log(sweetPrachi);
console.log(sweetPrachi.eat());
console.log(sweetPrachi.isCute());
console.log(sweetPrachi.isSuperCute());

// dog class

class Dog extends girl {} // this is working same
// dog --> sub class
// girl --> parent class
// dark meanings --> now this is even more darker

const haramiKutta = new Dog("Shino", 8);
console.log(haramiKutta.eat());
console.log(haramiKutta.isCute());
console.log(haramiKutta.isSuperCute());
