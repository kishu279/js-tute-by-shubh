// some method

const numbers = [
    3,5,8,9
]

// check is there any number which is even 

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

// true here means at least one number is even 

// nowCheck is there any product in the cart which went above 1 lakh 


const userCart = [
    {productId: 1 , productName : "Guitar" , price:20000},
    {productId: 2 , productName : "Mobile" , price:75000},
    {productId: 3 , productName : "television" , price:100000},
    {productId: 4 , productName : "laptop" , price:284000},
]

const check2 = userCart.some((cartItems) => cartItems.price > 100000)

console.log(check2);