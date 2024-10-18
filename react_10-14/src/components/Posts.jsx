import { useState,useEffect } from "react";

function Posts() {
    //Kontroller
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts/')
       .then(res=>res.json()) 
       .then(adatok=>setPosts(adatok))
       .catch(err=>console.log(err));
    },[]);

  return (
    <div>
        <h2>Posztok</h2>
        {
           posts.map((post,i)=>(<p key={i}>Id:{post.id}, Title:{post.title}</p>)) 
        }
    </div>
  )
}

export default Posts