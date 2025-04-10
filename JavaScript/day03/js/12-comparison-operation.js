let x=50;
let y="50";
let z=100;

let a=50;

console.log(x==50);//true
console.log(x==y);//true
console.log(x==z);//false

console.log(x===y);//false => çünkü data type'inada bakar
console.log(typeof(x),typeof(y));

console.log(a===x);
console.log(typeof a, typeof x);

console.log(x!=y);//false => yine sadece değere baktığı için false olur

console.log(x!=z);//true

console.log(x!==y);//true => data tipinede bakar

console.log(a!==x);//false 

console.log("------------------");

console.log(100>50);//true
console.log(100<50);//false
console.log(50>=50);//true

console.log(50>"40");//true
console.log("9">"1000");//true
console.log("100000000">"9");//false
console.log("8">"70");//true
console.log("60">"7");//false

console.log("Elma">"Armut");//true


//Eğer bir string NaN oluyorsa bu durumda karşılaştırma sonucu daima false olur
console.log(1<"Elma");//false
console.log(1>"Elma");//false
console.log(1=="Elma");//false


