const tarih=2025;
const dogumTarihi=1996;

console.log("Yaş : "+tarih-dogumTarihi);//NaN
console.log("Yaş : "+(tarih-dogumTarihi));//29
console.log(`Yaş : ${tarih-dogumTarihi}`);//29


//==================================
const pi=Math.PI;
let r=5;
let alan=pi*r**2;
let cevre=pi*r*2;
console.log(alan.toFixed(2));
console.log(cevre.toFixed(2))
console.log("Alan : "+alan+ " Çevre : "+cevre.toFixed(2));
console.log(`Çemberin Alani : ${alan.toFixed(2)} , Çemberin Çevresi : ${cevre.toFixed(2)}`)

console.log(Math.pow(5,2));
console.log(5**2);

let number=10;

number-=5;//number=number-5;
console.log(number);//5

number+=10;//number=number+10;
console.log(number);//15

number*=2;//number=number*2;
console.log(number);//30

number/=3;//number=number/3;
console.log(number);//10

number**=4;//number=number**4;
console.log(number);//10000

number%=3;//number=number%3;
console.log(number);//1
