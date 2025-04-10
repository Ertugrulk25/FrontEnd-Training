//primitive(ilkel)

//STRING
let isim = "Ali";
let soyIsim = "Can";

console.log(isim);
console.log(soyIsim);

console.log(typeof isim);

//NUMBER
let yas = 90;
console.log(yas);
console.log(typeof yas);

const kdv = 1.18;
console.log(kdv);
console.log(typeof kdv);

let maxNum = Number.MAX_VALUE;
console.log(maxNum);
console.log(typeof maxNum);

let maxSafeNumber = Number.MAX_SAFE_INTEGER;
console.log(maxSafeNumber);

//BIGINT
let x = 100n;
console.log(x);
console.log(typeof x);

console.log(x + 5n);

//boolean
let isRetired = true;
let isWorked = false;

console.log(isRetired);
console.log(isWorked);

console.log(typeof isRetired, typeof isWorked);

//SYMBOL
let mySymbol = Symbol("id");
console.log(mySymbol);
console.log(typeof mySymbol);

//Undefined

let undef;
console.log(undef);
console.log(typeof undef);

//Null

let nullDeger = null;
console.log(nullDeger);
console.log(typeof nullDeger);

//Non-primitive (ilkel olmayan)

//Array
let myArray = [1, 2, 3, 4, 5, 6, "Beş"];
let myNames = ["Ali", "Veli", "Can"];
console.log(myArray);
console.log(myNames);
console.log(typeof myArray, typeof myNames);

//Object

let myObject = {
  id: 1,
  name: "Ali",
  surName: "Can",
  age: 25,
  id: 5,
};

console.log(myObject);
console.log(typeof myObject);

//function
function ortalamaHesapla() {}

console.log(ortalamaHesapla);
console.log(typeof ortalamaHesapla);

//==========================================
/*
JS data types tanımlamada dinamiktir. Bir değişken tanımlarken o değişken otomatik olarak icerisine girilen değere göre data type kazanır

Eğerki bu değişkene sonradan bir değer ataması gerçekleşirse bu değer atamasına göre data type tekrardan kendisi otomatik olarak değişir
*/

let general = "Hello";
console.log(typeof general); //String

general = 12;
console.log(typeof general); //number

general = 10n;
console.log(typeof general); //bigInt

general = true;
console.log(typeof general); //boolean

general = Symbol("Unique");
console.log(typeof general); //symbol

general = undefined;
console.log(typeof general); //undefined

general = null;
console.log(typeof general); //Object

general = [1];
console.log(typeof general); //Object

general = {
  id: 1,
  name: "Ali",
  surName: "Can",
  age: 10,
};
console.log(general);
console.log(typeof general); //Object

const deneme = "Ali";
