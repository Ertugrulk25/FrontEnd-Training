let para = "100";
let indirim = 10;
let vergi = 10;

console.log(para + vergi - indirim); //10000
console.log(Number(para) + vergi - indirim); //100

let isim = "Ali";
console.log(isim + vergi); //Ali10
console.log(Number(isim) + vergi); //NaN

//Eğer bir data type'i number'a cevirmek istiyorsak Number() ifadesi veya + işareti kullanılır.

console.log(+para + vergi - indirim);
console.log(+isim + vergi);

//string'e dönüştürme için
let barcodeNumber = 9000;
let extension = 123;

console.log("" + barcodeNumber + extension);
console.log(String(barcodeNumber) + extension);
//Eğer bir data type'ini String cevirmek istiyorsak String() ifadesi veya ""+ işareti kullanılır

let id= prompt("lütfen işlem için id'nizi giriniz.");
console.log(Number(id)+5);
console.log(typeof id)

//bigInt e dönüştürme
let x = 150n;
let y = 5;
console.log(x+BigInt(y));

//Eğer bir data type ını bigInt e dönüştürmek istiyorsak BigInt() ifadesi kullanılır.

//boolean'a dönüştürme
let number=10;
console.log(Boolean(number));//true

number = -10;
console.log(Boolean(number));//true

number = "Hello";
console.log(Boolean(number));//true

number = 0;
console.log(Boolean(number));//false

number = "";
console.log(Boolean(number));//false

number=null;
console.log(Boolean(number));//false

let aVariable;
console.log(Boolean(aVariable));//false

let myObj={};
console.log("Boş Obje :" ,Boolean(myObj));//true

let myArr=[];
console.log("Boş Array : ",Boolean(myArr));//true

//Eğer bir data typeini boolean cevirmek istiyorsak Boolean() ifadesi kullanılır fakat bir değeri boolean cevirdiginizde icerisinde değer varsa true yoksa false dondurur

