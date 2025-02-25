import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vedett() {
    const navigate=useNavigate();
    const[vedettInfo,setVedettInfo]=useState(null);
    const token=sessionStorage.getItem('usertoken');
    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(adat=>{
                if(!adat.message){
                    setVedettInfo(adat);
                } else {
                    alert(adat.message);
                    navigate('/login');
                }
            })
            .catch(err=>alert(err));

        } else {
            navigate('/login');
        }
        
    },[])

  return (
    <div className="text-3xl font-bold text-center">{vedettInfo}</div>
  )
}

export default Vedett