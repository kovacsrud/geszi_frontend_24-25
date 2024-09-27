let auto={
    rendszam:"abc-123",
    marka:"Audi",
    tipus:"A4",
}

auto={...auto,"tulajdonos":"Erik"};

console.log(auto.rendszam);
auto.tipus="A6";

//Destruktúrálás objektumból

const {marka,tipus}=auto;

auto.marka="Skoda";
console.log(marka,tipus);

const {marka:m,tipus:t}=auto;
console.log(marka,tipus);

console.log(m,t);

let szamok=[1,2,3,4,5,6];

//Destruktúrálás listából

const [elso,masodik,...rest]=szamok;

console.log(...rest);
console.log(elso,masodik);

let szoveg="Valami";

const [v,a]=szoveg;
console.log(v,a);

console.log(auto);