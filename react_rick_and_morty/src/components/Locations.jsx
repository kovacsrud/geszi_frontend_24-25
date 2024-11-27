import {useState,useEffect} from "react";
import Location from "./Location";

function Locations() {
  const[locations,setLocations]=useState([]);
  const[info,setInfo]=useState({});
  const[page,setPage]=useState(1);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    .then(res=>res.json())
    .then(adat=>{
      setInfo(adat.info);
      setLocations(adat.results);
    })
    .catch(err=>alert(err));
  },[page]);

  const tovabb=()=>{
    if(page<info.pages){
      setPage(prev=>prev+1);
    }    

  }
  
  const vissza=()=>{
    if(page>1){
      setPage(prev=>prev-1);
    }
  }

  return (
    <div className="bg-sky-100">
      <h1 className="text-3xl font-bold text-center">Helyszínek</h1>
      <div className="m-5 text-center">
        <div className="join">
            <button onClick={vissza} className="join-item btn">«</button>
            <button className="join-item btn">Oldal:{page}</button>
            <button onClick={tovabb} className="join-item btn">»</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        locations.map((location)=>(<Location key={location.id} location={location} />))
      }
      </div>
      
    </div>
  )
}

export default Locations