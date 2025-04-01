'use client'
import { useState,useEffect } from "react";


export default function Kutyak(){
    const[kutyak,setKutyak]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/api/kutyak")
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>alert("Hiba"+err));

    },[])

    return (
        <h2>Kutyák:{kutyak.length}</h2>
    )

}