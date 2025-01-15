import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyafajta from "./Kutyafajta";

function Kutyafajtak() {
    const{kutyafajtak}=useContext(KutyaContext);
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">Kutyafajták:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
            kutyafajtak.map((kutyafajta)=>(<Kutyafajta key={kutyafajta.Id} kutyafajta={kutyafajta}/>))
        }
        </div>
    </div>
  )
}

export default Kutyafajtak