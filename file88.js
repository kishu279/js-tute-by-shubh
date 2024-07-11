var sum = function (a, b, c) {
  return {
    getsumTwo: function () {
      return a + b;
    },
    getsumThree: function () {
      return a + b + c;
    },
  };
};

var store = sum(3, 4, 5); // calling
console.log(store);
console.log(store.getsumTwo());
console.log(store.getsumThree());
