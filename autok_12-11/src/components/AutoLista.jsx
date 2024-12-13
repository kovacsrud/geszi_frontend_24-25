import { useEffect,useState } from "react";
import Auto from "./Auto";

function AutoLista() {
    const[autok,setAutok]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const frissites=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/autok`)
        .then(res=>res.json())
        .then(adat=>setAutok(adat))
        .catch(err=>alert(err));
    },[refresh])


  return (
    <div className="bg-red-100">
        <h1 className="text-3xl font-bold text-center text-red-800">Autóink:</h1>
        <div className="grid grid-cols-2 justify-items-center">
            {
                autok.map((auto)=>(<Auto key={auto.id} auto={auto} frissites={frissites} />))

            }
        </div>
    </div>
  )
}

export default AutoLista