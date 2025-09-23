let szamok=[1,2,3,4,5];
let szamok2=[6,7,8,9];

let ossz=[...szamok,...szamok2];

console.log(ossz);
console.log(...szamok);

function myBio(firstName, lastName, company) { 
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
console.log(myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]));

// The invocation above will return:
//“Oluwatobi Sofela runs CodeSweetly”

"use strict";

// Define a function with one rest parameter:
function printMyName(...value) {
  return value;
}

// Invoke the printMyName function while passing two arguments to its parameters:
console.log(printMyName("Oluwatobi", "Sofela"))

// The invocation above will return:

const osszeg=(...szamok)=>{
    let osszeg=0;
    for(let i of szamok){
        osszeg+=i;
    }
    return osszeg;
}


console.log(osszeg(1,2,3,4,5));

let szoveg="Zuzu Petace";

console.log(...szoveg);

const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));
console.log(numbers);
console.log(...numbers);

const szemely={"vezeteknev":"Kéri","keresztnev":"János"};
const szemelyEsMunkahely={...szemely,"vezeteknev":"Tóth","munkahely":"TMK"};

console.log(szemelyEsMunkahely);

const munkahely={
    munkahely:{
        "nev":"Csőd Kft",
        "cim":"Kispuszta 1"
    }
}

const ujszemely={...szemely,...munkahely};

console.log(ujszemely["vezeteknev"]);
