
//Javascript objektumok JSON-Javascript object notation

let ember={
    vezeteknev:"Kósa",
    keresztnev:"György",
    szuletesiEv:1989,
    magassag:175,
    suly:78,
    kor() {
        return new Date().getFullYear()-this.szuletesiEv;
    }
}

console.log(ember);
console.log(ember.keresztnev);
console.log(ember.kor());

class Szemely {
    constructor(vezeteknev,keresztnev,szuletesiEv,suly){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.szuletesiEv=szuletesiEv;
        this.suly=suly
    }
    kor() {
        return new Date().getFullYear()-this.szuletesiEv;
    }

}

let zoltan=new Szemely("Kiss","Imre",1976,89);