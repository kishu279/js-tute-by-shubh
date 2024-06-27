// every method 

const numbers = [ 2,4,6,8,10];

// function isEven(number){
//     return number%2 === 0 ;
// }

// const ans = numbers.every(isEven);
const ans = numbers.every((number)=> number%2 ===0 );
console.log(ans);

const userCart = [
    {productId:1, productName: "Mobile", price:20000},
    {productId:2, productName: "Mobile2", price:21000},
    {productId:3, productName: "Mobile3", price:22000},
    {productId:4, productName: "Mobile4", price:23000},
]

// check if there is a product whose price is below 22000

const res =  userCart.every((cartItem) => cartItem.price < 21000);

console.log(res);