// rest parameters 

function myfunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunc(3,4,5,6,7,8,9);

function addAll (...cars){
    let total = 0 ;
    for (let number of cars){
        total = total+number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5,6);
console.log(ans);