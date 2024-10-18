import { useState,useEffect } from "react";
import UserSelect from "./UserSelect";
import User from "./User";

function Users() {
    const [users,setUsers]=useState([]);
    const [userNum,setUserNum]=useState(5);

    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=${userNum}`)
        .then(res=>res.json())
        .then(adatok=>setUsers(adatok.results))
        .catch(err=>console.log(err));        
    },[userNum]);

  return (
    <div>
        <h2>Felhasználók</h2>
        <UserSelect setUserNum={setUserNum} />
        <p>Felhasználók száma:{users.length} fő.</p>
        {
            (users.length>0) ?
             //users.map((user,i)=>(<p key={i}>{user.name.title} {user.name.first} {user.name.last}</p>))
             users.map((user,i)=>(<User key={i} user={user} />))
             :
            <><p>A lista üres!</p></>
        }

    </div>
  )
}

export default Users