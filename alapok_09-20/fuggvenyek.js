
function osszead(a,b,c){
    return a+b+c;
}

console.log(osszead(10,20,30));
console.log(osszead("A","B","C"));

//függvény túlterhelés (overloading)
function osszead(a,b=10){
    return a+b;
}

console.log(osszead(10));
console.log(osszead(10,35));
console.log(osszead("B"));

//arrow function
const kivonas=(a,b)=>a-b;

console.log(kivonas(90,10));

//Tetszőleges ill. változó hosszúságú paraméterlista?
//arguments objektum
function osszead(){
    let osszeg=0;
    for(let i=0;i<arguments.length;i++){
        //osszeg=osszeg+arguments[i];
        osszeg+=arguments[i];

    }
       
    return osszeg;

}

console.log(osszead(11,23,45,78,98,23,56,77,110));
console.log(osszead(11,23,45,78,98,77,110));
console.log(osszead(11,23,45,78,98));
