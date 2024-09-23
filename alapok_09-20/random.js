
let h1=document.createElement('h1');



function randNum(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

h1.textContent=randNum(10,100);

root.appendChild(h1);

let veznevek=["Kiss","Kósa","Kovács","Magyari","Nagy"];
let keresztnevek=["Imre","Anita","Ella","Péter","Dániel","Géza"];

let nevlista=document.createElement('ol');

for(let i=0;i<50;i++){
    let vnev=veznevek[randNum(0,veznevek.length)];
    let knev=keresztnevek[randNum(0,keresztnevek.length)];
    let nev=document.createElement('li');
    nev.textContent=vnev+" "+knev;
    nevlista.appendChild(nev);
}

root.appendChild(nevlista);
