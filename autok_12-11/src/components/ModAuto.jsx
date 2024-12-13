import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function ModAuto() {

    const{state}=useLocation();
    const navigate=useNavigate();

    let cim="Új autó felvétele";
    let autoId="";
    let autoMarka="";
    let autoTipus="";
    let autoGyartasiev="";
    let autoRendszam="";
    let autoSzin="";

    let method='POST';
    let url=`${import.meta.env.VITE_BASE_URL}/autok`;

    if(state!==null){
        //Adatmódosítás
        const{auto}=state;
        autoId=auto.id;
        autoMarka=auto.marka;
        autoTipus=auto.tipus;
        autoGyartasiev=auto.gyartasiev;
        autoRendszam=auto.rendszam;
        autoSzin=auto.szin;
        cim=`${autoMarka} ${autoTipus} módosítása`;
        method='PATCH';
        url=`${import.meta.env.VITE_BASE_URL}/autok/${autoId}`;
    }

    let formObj={
        id:autoId,
        marka:autoMarka,
        tipus:autoTipus,
        gyartasiev:autoGyartasiev,
        rendszam:autoRendszam,
        szin:autoSzin
    }

    const[formData,setFormData]=useState(formObj);

    const adatkuldes=async (formData,method,url)=>{
        const keres=await fetch(url,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        });

        const valasz=await keres.text();
        alert(valasz);
        navigate('/autolista');
        

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        adatkuldes(formData,method,url);
    }

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }


  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-10">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="id" value={formData.id} onChange={writeData} placeholder="Id" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="marka" value={formData.marka} onChange={writeData} placeholder="Márka" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="tipus" value={formData.tipus} onChange={writeData} placeholder="Típus" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="gyartasiev" value={formData.gyartasiev} onChange={writeData} placeholder="Gyártási év" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="rendszam" value={formData.rendszam} onChange={writeData} placeholder="Rendszám" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="szin" value={formData.szin} onChange={writeData} placeholder="Szín" className="my-2 input input-bordered w-full max-w-xs" />
            <button type="submit" className="my-2 btn btn-primary">Küldés</button>
        </form>
    </div>
  )
}

export default ModAuto