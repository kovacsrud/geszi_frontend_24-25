
import { useState,useEffect,createContext } from "react";

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    const[kutyak,setKutyak]=useState([]);
    const[kutyanevek,setKutyanevek]=useState([]);
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/kutyak`)
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>alert(err));
    },[refresh]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/kutyanevek`)
        .then(res=>res.json())
        .then(adat=>setKutyanevek(adat))
        .catch(err=>alert(err));
    },[refresh]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/kutyafajtak`)
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>alert(err));
    },[refresh]);

    const backendMuvelet=async (adat,method,url)=>{
        const keres=await fetch(url,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(adat)

        });
        const valasz=await keres.text();
        update();
        alert(valasz);
    }


    return <KutyaContext.Provider value={{
        kutyak,
        kutyanevek,
        kutyafajtak,
        update,
        backendMuvelet

    }}>{children}</KutyaContext.Provider>
}

export default KutyaContext;