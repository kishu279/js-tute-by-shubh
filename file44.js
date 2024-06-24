// lexical scope 

function app(){
    const myvar = "value1";
    function myFunc(){
        // const myvar = "value69";
        console.log("inside myFunc", myvar);
    }
    console.log(myvar);
    myFunc();
}

app();