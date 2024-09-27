let keres=new XMLHttpRequest();
let valasz="";
let root=document.getElementById('root');

keres.open('GET','https://jsonplaceholder.typicode.com/posts',true);

keres.onload=function(){
    valasz=JSON.parse(this.response);
    console.log(valasz);
    valasz.forEach(elem=>{
        let p=document.createElement('p');
        p.textContent=elem.title;
        root.appendChild(p);

    });
}

keres.send();

console.log("Válasz:"+valasz);-