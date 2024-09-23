document.write("Változók a Javascriptben");
//Dinamikus típus meghatározás

//Ha szeretnénk statikus típusosságot, akkor
//TypeScript-et kell használni
//globális változó létrehozása
var a=17;
a="szöveg";
document.write("<BR/>");
document.write(a);

//A let-el létrehozott változó csak abban
//a kódblokkban létezik, ahol létrehozták
let b=123;
let c=211.23;

//prompt("Adja meg c értékét!");
let d=b+c;

document.write("<BR/>");

document.write(d);
console.log(d);
//alert(d);
if(b>100){
    let szoveg="Nagyobb mint 100!"

    document.write(szoveg);
}

//document.write(szoveg);

const konstans=566;

//A konstans később már nem változtatható meg.
//konstans=611;