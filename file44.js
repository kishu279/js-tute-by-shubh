// lexical scope 

function app(){
    const myvar = "value1";
    function myFunc(){
        const myvar = "value69";
        // if we comment the above line we will get the value from outside the function 
        console.log("inside myFunc", myvar);
    }
    console.log(myvar);
    myFunc();
}

app();