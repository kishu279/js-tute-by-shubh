//nested if else 

// winning number 19 
// 19 your guess is right 
// 17 too low 
// 29 too high 

let winningNumber = 19 ;
let userGuess = 29;


if(userGuess === winningNumber){
    console.log("your guess is right");
}else{
    if(userGuess<winningNumber){
        console.log("too low");
    }else{
        console.log("too high");
    }
}