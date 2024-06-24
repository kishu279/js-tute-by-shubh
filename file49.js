// callback function 


function callback (){
    console.log("subh is calling a callback");
}

const addition = function (a,b, callback){
    var result = a+b;
    console.log("result:" +result);
    callback();
}

addition(3,4, callback);

// we can also the function inline or external it doesn't matters its upto you 

addition(2,3,function(){
    console.log("addition completed");
})




