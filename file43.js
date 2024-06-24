// function inside function 

const app = () => {
    const myfunc = () => {
        console.log("Hello");
    }
    const addTwo = (num1 , num2) => {
        return num1 + num2;
    }
    console.log("inside app");
    myfunc();
    console.log(addTwo(2,4));
}

app();