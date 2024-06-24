// function returning function 

myfunc = () => {
    return [1,2,3];
}

// we can return almost anything using a function but the crazy part starts when we start returning a function using function

const ans =  myfunc();
console.log(ans);

myfuncone = () => {
    function hola (){
        console.log("Hola amigo, kaiso ho thik ho ???");
    }
    return hola;
}

const ans2 = myfuncone();
ans2();  // it has became a function expression 