// spread operator in objects 

const newArray = [ ... "Subhajit"];
console.log(newArray);

// we cant use integer instead of strings because integers are not iterable

const obj1 = {
    key1 : "value1",
    key2 : "value2"

    // we cant use same key two times 
}

const obj2 = {
    // if we add another key named key here 1 then it will change the value of key1 depending upon the order written in the variable
    key1 : 'valueUnique',
    key3 : 'value3',
    key4 : 'value4'

    // we cant use same key two times 
}

const newObj = { ...obj1, ...obj2};
const newObj2 = {...obj2, ...obj1};
console.log(newObj);
console.log(newObj2);