let gomb=document.createElement('button');
gomb.textContent="JS gomb";
gomb.onclick=function(){
    alert("Js Gomb");
}

const jgomb=document.getElementById('js-gomb');

jgomb.appendChild(gomb);


const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }
},"React gomb");

const kontener=React.createElement('div',{
    style:{
        backgroundColor:"green",
        width:"100px",
        height:"100px"
    }
},rgomb,rgomb,rgomb);

ReactDOM.render(kontener,document.getElementById('react-gomb'));