import { useState,useEffect } from "react";
import Episode from "./Episode";

function Episodes() {
  const[episodes,setEpisodes]=useState([]);
  const[info,setInfo]=useState({});
  const[page,setPage]=useState(1);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then(res=>res.json())
    .then(adat=>{
      setEpisodes(adat.results);
      setInfo(adat.info);
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
      <h1 className="text-3xl font-bold text-center">Epizódok</h1>
      <div className="m-5 text-center">
        <div className="join">
            <button onClick={vissza} className="join-item btn">«</button>
            <button className="join-item btn">Oldal:{page}</button>
            <button onClick={tovabb} className="join-item btn">»</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
        episodes.map((episode)=>(<Episode key={episode.id} episode={episode} />))
      }
      </div>
      
    </div>
  )
}

export default Episodes