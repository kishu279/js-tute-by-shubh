// block scope vs function scope

// let and const are block scope 
// var is a function scope

{
    let name = 'subh';
    // console.log(name);
}

// console.log(name);  

{
    const name = 'subh';
    // console.log(name);
}

// console.log(name);

{
    var name = 'subh';
    // console.log(name);
}

console.log(name);