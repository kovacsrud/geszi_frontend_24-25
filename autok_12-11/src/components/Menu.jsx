import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-red-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Autók</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/autolista">Autó lista</Link>
          </li>
          <li>
            <Link to="/ujauto" >Új autó felvitele</Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
}

export default Menu;
