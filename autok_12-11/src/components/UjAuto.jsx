import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjAuto() {
   
  const navigate=useNavigate();

  const [id, setId] = useState("");
  const [marka, setMarka] = useState("");
  const [tipus, setTipus] = useState("");
  const [rendszam, setRendszam] = useState("");
  const [gyartasiev, setGyartasiEv] = useState("");
  const [szin, setSzin] = useState("");

  const onSubmit=(e)=>{
    e.preventDefault();
    adatKuldes(
        {id,marka,tipus,rendszam,gyartasiev,szin},
        'POST',
        `${import.meta.env.VITE_BASE_URL}/autok`);
  }

  const adatKuldes=async (adat,method,url)=>{
    const keres=await fetch(url,{
        method:method,
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(adat)
    });

    const valasz=await keres.text();
    alert(valasz);
    navigate("/autolista");

  }

  return (
    <div>
      <h1 className="m-5 text-3xl text-red-800 font-bold text-center">Új autó felvitele:</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg az id-t"
        value={id}
        onChange={(e)=>{setId(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a márkát!"
        value={marka}
        onChange={(e)=>{setMarka(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a típust!"
        value={tipus}
        onChange={(e)=>{setTipus(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a rendszámot!"
        value={rendszam}
        onChange={(e)=>{setRendszam(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a gyártási évet!"
        value={gyartasiev}
        onChange={(e)=>{setGyartasiEv(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a színt!"
        value={szin}
        onChange={(e)=>{setSzin(e.target.value)}}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <button type="submit" className="btn bg-red-700">Küldés</button>
      </div>
      </form>  
      
    </div>
  );
}

export default UjAuto;
