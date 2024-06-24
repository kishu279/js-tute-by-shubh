// parameter destructuring 

// object 
// react 

const person = {
    firstname : "subh",
    gender : "male"
}

printDetails = (obj) =>{
    console.log(obj.firstname);
    console.log(obj.gender);
}

printDetails2 = (firstname , gender , age ) =>{
    console.log(firstname);
    console.log(gender);
    // console.log(obj.age);
}

printDetails2(person);