import { useState,useEffect } from "react";
import Post_ from "./Post_";

type Post={
    "userId":number,
    "id":number,
    "title":string,
    "body":string
}


function Typicode() {

    const[posts,setPosts]=useState(Array<Post>);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    },[])

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
        {
            //posts.map((post)=>(<p key={post.id}>Userid:{post.userId},{post.title}</p>))
            
            posts.map((post)=><Post_ key={post.id} post={post} />)
            
        }
    </div>
  )
}

export default Typicode