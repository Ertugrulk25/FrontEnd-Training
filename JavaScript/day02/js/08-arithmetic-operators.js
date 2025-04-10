let x = 5;
let y = 8;
let z = "15";

//Aşağıdaki gibi de oluşturulabilir
//let x=5,y=8,z=15;
console.log(x + y); //13
console.log(x + z); //515
//number + string yaparsak bize string döndürür
//concat işlemi yapar

console.log(x + y + z); //1315
console.log(z + y + x); //1585
console.log(z + (y + x)); //1513
//işlem önceliği için (parantez) verilebilir

//js'de toplama işlemi string ifade görene kadar yapılır string ifade goruldugunde concatination işlemi yapar

//concationation birleştirme yapar

console.log("Ali\n" + "Can");

let word = "Merhaba";
console.log(x * word); //NaN => not a number => hata değildir. bir değerdir.

if (isNaN(x * word)) {
  console.log("bu sayılar sonuc olarak sayı vermez");
}

//Çıkarma
console.log(x - y);
console.log(z - x);
console.log(word - x);
console.log(word - z);
//=> string'i ifadeyi number'a cevirebiliyorsa cevirir

//Çarpma
console.log(x * y); //40
console.log(x * z); //75
//75 => string'i ifadeyi number'a cevirebiliyorsa cevirir

//Bölme
console.log(z / x);
console.log(y / x);
console.log(word / x);
console.log(x / y);
console.log(555/10); //55.5
console.log(parseInt(555/10));//55
//Toplama
//---------------

//Modulus(kalan)
console.log(x % y);
console.log(y % x);
console.log(z % y);

//üs alma
console.log(x ** y);
console.log(z ** x);

//post increment
console.log(x);
x++;
console.log(x);
console.log(x++);
let b=x++;
console.log(b);//7
console.log(x);//8
//pre increment
++x;
console.log(x);//9
console.log(++x);//10
let c=++x;
console.log(c);//11
console.log(x);//11



//post decrement
x--;
console.log(x);//10

//pre decrement
--x;
console.log(x);//9

//Verilen bir sayının rakamları toplamını bulunuz

let num = 123;

let unitDigits;

let sum = 0;

unitDigits = num % 10;
sum += unitDigits; //sum=sum+unitDigits;
num = parseInt(num / 10);

unitDigits = num % 10;
sum += unitDigits; //sum=sum+unitDigits;
num = parseInt(num / 10);
unitDigits = num % 10;

sum += unitDigits; //sum=sum+unitDigits;
num = parseInt(num / 10);

console.log(sum);

let number = 5555;
console.log(parseInt(number / 100));
