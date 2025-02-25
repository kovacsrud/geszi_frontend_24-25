import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate=useNavigate();
  let cim="Regisztráció";

  const kuldes=(formData,method)=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/register`,{
      method:method,
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(formData)

    })
    .then(res=>res.json())
    .then(token=>{
      if(!token.message){
        sessionStorage.setItem('usertoken',token);
        alert("Sikeres regisztráció!");
        navigate('/');
      } else {
        alert(token.message);
      }
    })
    .catch(err=>alert(err))
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    kuldes(formData,"POST");
  }

  let formObj={};
  formObj={
    username:"",
    email:"",
    age:"",
    password:"",
    passwordAgain:""

  }

  const[formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
  }


  return (
    <div>
         <h1 className="text-3xl font-bold text-center my-10">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="username" value={formData.username} onChange={writeData} placeholder="felhasználó név" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="email" value={formData.email} onChange={writeData} placeholder="e-mail cím" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="text" required id="age" value={formData.age} onChange={writeData} placeholder="életkor" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="password" required id="password" value={formData.password} onChange={writeData} placeholder="jelszó" className="my-2 input input-bordered w-full max-w-xs" />
            <input type="password" required id="passwordAgain" value={formData.passwordAgain} onChange={writeData} placeholder="jelszó ismét" className="my-2 input input-bordered w-full max-w-xs" />
            
        
            <button type="submit" className="my-2 btn btn-primary">Küldés</button>
        </form>
    </div>
  )
}

export default Register