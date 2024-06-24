// 3rd way 
// arrow function ()=>{}

const singHappyBirthday = () => {
    console.log("happy birthday to you!!");
}

singHappyBirthday();

const addTwoNumbers = (a,b) => {
    return a+b;
}
addedResult = addTwoNumbers(5,4);
console.log(addedResult);

const findTarget = (arr , target) =>{
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
