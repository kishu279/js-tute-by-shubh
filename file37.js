// object destructuring

const band = {
    bandName : " cold play ",
    famousSong : " hymn of the weekend"
}

const { bandName , famousSong} = band;
console.log(bandName);
console.log(famousSong);

const band2 = {
    bandName : " Imagine Dragons",
    famousSong: "enemy",
    year : 2005 ,
    anotherFamousSong : "thunder"
}

let { bandName : var1 , famousSong : var2 , ...restprops } = band2 ;
console.log(var1);
console.log(var2);
console.log(restprops);