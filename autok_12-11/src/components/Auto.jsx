import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function Auto({auto,frissites}) {

  const navigate=useNavigate();
  const[isDelete,setIsDelete]=useState(false);

  const openDelete=()=>{
    setIsDelete(true);
  }

  const closeDelete=()=>{
    setIsDelete(false);
  }

  const modositas=(auto)=>{
    navigate('/modauto',{state:{auto}});
  }

  const torles=async (id)=>{
    const keres=await fetch(`${import.meta.env.VITE_BASE_URL}/autok/${id}`,{
      method:'DELETE',
      headers:{"Content-type":"application/json"}
    });

    const valasz=await keres.text();
    frissites();
    alert(valasz);
  }

  return (
    <div className="m-10 card bg-red-300 text-red-800 w-96">
      {
        isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>torles(auto.id)} closeFunction={()=>closeDelete()}  />)
      }
    <div className="card-body items-center text-center">
      <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
      <p>{auto.rendszam}</p>
      <p>{auto.gyartasiev}</p>
      <p>{auto.szin}</p>
      <div className="card-actions justify-end">
        <button onClick={()=>modositas(auto)} className="btn bg-red-700">Módosítás</button>
        <button onClick={()=>openDelete()} className="btn bg-red-700">Törlés</button>
      </div>
    </div>
  </div>
  )
}

export default Auto