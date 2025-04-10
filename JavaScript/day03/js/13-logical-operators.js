console.log(true && false);//false
console.log(true && true);//true
console.log(false && false);//false
console.log(false && true);;//false

console.log("------------------")
console.log(true || false);//true
console.log(true || true);//true
console.log(false || false);//false
console.log(false || true);;//true

console.log("------------------")

//&& opertörü her zaman ama her zaman ilk false değerini almaya çalışır . eğerki false değeri bulamazsa son değeri alır

let x=15;
let y=20;
console.log(x&&y);//20
console.log(y&&x);//15

let a=-10;
let b=0;//false
console.log(a&&b);//0
console.log(b&&a);//0

let m=null;
let n=8;
console.log(m&&n);//null
console.log(n&&m);//null


let e=undefined;
let f="";
console.log(e&&f);
console.log(f&&e);

console.log(0n && 0 && undefined && null && "");

//|| veya operator ise daime ilk gördüğü true değerini almaya çalışır eğer true değeri yoksa son değeri alır
let num1=12;
let num2=15;

console.log(num1||num2);//12

let myNull=null;
let myUndef;

console.log(myNull||myUndef);//undefined

console.log("" && "123" || NaN);//NaN

console.log(!true);//false
console.log(!false);//true

console.log(!"123");//false
console.log(!"");//true

console.log(!11);//false
console.log(!0);//true

console.log(Boolean("123"));//true
console.log(!!!!!!!!!"123")//true

//Bir data tipini boolean yapmak için Boolean() veya !! kullanılır.
