// fill method 
// value , start , end 

const myArray = new Array(10).fill(-1);
console.log(myArray);
// this is the first use case which is to fill the array 

const myArray2 = [1,2,3,4,5,6,7,8];
myArray2.fill(0,2,4)
console.log(myArray2); // this will change the original array 
