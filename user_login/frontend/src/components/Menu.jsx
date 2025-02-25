import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";


function Menu() {
  const navigate=useNavigate();
  const{logout}=useContext(UserContext);
  const token=sessionStorage.getItem('usertoken');

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="text-xl">GÉSZI Frontend User</Link>
    </div>

    <label for="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          {
            token ?
             <>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><Link to="/vedett" className="md:p-4 py-3 px-0 block" >Védett info</Link></li>
                <li><a onClick={()=>{logout();navigate("/")}} className="md:p-4 py-3 px-0 block">Kilépés</a></li>                             
              </ul>
             </> 
             :
             <>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><Link to="/login" className="md:p-4 py-3 px-0 block" >Login</Link></li>
                <li><Link to="/register" className="md:p-4 py-3 px-0 block">Regisztráció</Link></li>             
              </ul>
             </>
          }
           
        </nav>
    </div>
</header>
  )
}

export default Menu