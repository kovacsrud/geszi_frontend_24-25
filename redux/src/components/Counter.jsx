import { useSelector,useDispatch } from "react-redux";
import {novel,csokkent,novelErtekkel} from '../reducers/counterSlice';

function Counter() {
    const szamlalo=useSelector((state)=>state.szamlalo.value);
    const dispatch=useDispatch();
  return (
    <div>
        <h2 className="text-2xl font-bold text-center text-red-600">Számláló:{szamlalo}</h2>
        <button onClick={()=>dispatch(novel())} className="btn btn-primary">Növel</button>
        <button onClick={()=>dispatch(csokkent())} className="btn btn-primary">Csökkent</button>
        <button onClick={()=>dispatch(novelErtekkel(10))} className="btn btn-primary">+10</button>
    </div>
  )
}

export default Counter