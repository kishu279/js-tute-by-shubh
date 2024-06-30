// SOME COMMON MISTAKES

const user1 = {
  firstName: "Prachi",
  age: 8,
  about: function () {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

const myFunc = user1.about.bind(user1);
myFunc();
