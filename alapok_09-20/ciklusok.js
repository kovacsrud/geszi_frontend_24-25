
//for ciklusok (3 fajta)

for(let i=0;i<keresztnevek.length;i++){
    console.log(keresztnevek[i]);
}

//i az elem indexét tartalmazza
for(const i in keresztnevek){
    console.log(keresztnevek[i]);
    console.log(i);
}

//i magát a listaelemet tartalmazza, nem az indexet!
//gyakorlatilag egy foreach
for(const i of keresztnevek){
    console.log(i);
}

//elöltesztelő -while
let szamlalo=0;
while (szamlalo<keresztnevek.length) {
    console.log(keresztnevek[szamlalo]);
    szamlalo++;
}

//hátultesztelő
szamlalo=0;
do {
    console.log(keresztnevek[szamlalo]);
    szamlalo++;
} while (szamlalo<keresztnevek.length);