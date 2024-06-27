// sort method 
// till now forEach , map , filter were not mutating the array they were returning a new array 
// whereas , reduce  was returning a single value 
// but the sort method will mutate the actual array 

const numbers = [5,8,100,12,1,126,69]; //[1,5,8,12,69,100,126]
numbers.sort();
console.log(numbers);

// why this happened ?
// javascript is not taking this as a number its taking this as string 
// And in the basis of ASCII value its sorting this

// now this has a pro and a con 
// pro : it sorts in alphabetical order 
// con : it doesn't sorts number but we have a solution for this 

const UserNames = ['subh','prachi','megha',"radhika","vidya"];
UserNames.sort();
console.log(UserNames);

// now solution of the con i am facing 
// sort also accept a callback function

const num = [5,6,100,12,1,126];
num.sort((a,b) => {
    return a-b; // descending order b - a 
});
console.log(num);

// how this works ?
// 5 , 8 
// a - b = 5 - 8 
// a - b  --> positive(greater than zero) ----> b, a 
// b - a --> negative(lesser than zero) ---> a , b 

// more realistic example 

// price low to high or high to low 

const products = [
    {productId: 1 , productName: "p1", price : 6000},
    {productId: 2 , productName: "p2", price : 300},
    {productId: 3 , productName: "p3", price : 5000},
    {productId: 4 , productName: "p4", price : 500},
    {productId: 5 , productName: "p5", price : 200},
]

// low to high

products.sort((a,b)=>{
    return a.price-b.price
});

console.log(products); // now the array is sorted

// you don't want to change the original array 

const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});

console.log(lowtohigh);