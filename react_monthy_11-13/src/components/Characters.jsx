import { useState,useEffect } from "react"

function Characters() {
  const[characters,setCharacters]=useState([]);
  const[page,setPage]=useState(2);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res=>res.json())
    .then(adat=>setCharacters(adat.results))
    .catch(err=>console.log(err));
  },[])

  return (
    <div>
      <h1 className="text-3x font-bold text-center text-sky-700">Szereplők:</h1>
      {
        characters.map((character)=>(<p key={character.id}>{character.name}</p>))
      }
    </div>
  )
}

export default Characters