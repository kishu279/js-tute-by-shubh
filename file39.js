// function declaration

function singHappyBirthday(){
    console.log("Happy birthday to you ");
}

singHappyBirthday();

function addTwoNumbers(a,b){
    return a+b;
}

const addednumber = addTwoNumbers(4,6);
console.log(addednumber);


function isEven (n){
    if(n%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(10));

function findTarget(arr , target){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]===target){
            return i ;
        }
    }
    return -1 ;
}


const myArray = [1,3,8,90];
const ans = findTarget(myArray, 8);
console.log(ans);

