// filter method

const numbers = [1,3,2,6,4,5,8];

// in this task lets filter odd and even numbers
// filters method will take a callback function
// it will return true or false

const isEven = (number) => {
    return number%2 ===0;
}
const isOdd = (number) => {
    return number%2 !== 0;
}

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);