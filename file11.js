// undefined 
// Null 

let firstName ;
console.log(typeof firstName);

let myVar = null ;
console.log(myVar);
console.log(typeof null);
// because this a very famous error in javascript 

//BigInt 
let num = 238747923874238974923184712398472391847239847091238470912834712039834701923874;
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
let num2 = BigInt(num);
console.log(num2);
console.log(num);

// You cannot add bigInt with int 
