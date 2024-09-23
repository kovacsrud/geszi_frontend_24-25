
let root=document.getElementById('root');

let bekezdes=document.createElement('p');

bekezdes.textContent="Elem létrehozása Javascripttel";

root.appendChild(bekezdes);

let lista=["Zénó","Elek","Ella","Ubul"];

let ul= document.createElement('ul');

let nev1=document.createElement('li');
nev1.textContent=lista[0];
ul.appendChild(nev1);

let nev2=document.createElement('li');
nev2.textContent=lista[1];
ul.appendChild(nev2);

let nev3=document.createElement('li');
nev3.textContent=lista[2];
ul.appendChild(nev3);

let nev4=document.createElement('li');
nev4.textContent=lista[3];
ul.appendChild(nev4);

root.appendChild(ul);
