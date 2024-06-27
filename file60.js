// splice method
// start delete and insert 
// this method changes the old array 

const myArray = ['item1','item2','item3'];

// delete 
myArray.splice(1,1);
// this returns too we can store this in a variable
console.log(myArray);

myArray.splice(1,0,'inserted item');
console.log(myArray);

// how to insert and delete together 
const deletedItem = myArray.splice(1,2,"inserted item 1" , 'inserted Item 2 ');
console.log(myArray);
console.log(deletedItem);