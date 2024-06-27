// reduce method 

const numbers = [1,2,3,4,5,10];
// aim --> sum of all the numbers in array 
// its gives one value in return 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});

// here we can add a initial value too which will become the accumulator 
console.log(sum);

// the return will become the accumulator in next run 

// lets see some real world examples 

const userCart = [
    {productId : 1 , productName : "Mobile" , price: 150000},
    {productId : 2 , productName : "Laptop" , price: 284000},
    {productId : 3 , productName : "TV" , price: 200000},
]

// we can add total amount using for loop but reduce will make it more convenient 

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
},0)

console.log(totalAmount);