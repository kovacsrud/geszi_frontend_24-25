import {useState,useEffect} from 'react';
import { RandUser } from '../types/RandUser';
import UserCard from './UserCard';



function RandomUsers() {
    const[users,setUsers]=useState(Array<RandUser>);
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=30")
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>alert(err));
    },[])

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
        {
            users.map((user,i)=>(<UserCard key={i} user={user} />))
        }
    </div>
    
  )
}

export default RandomUsers