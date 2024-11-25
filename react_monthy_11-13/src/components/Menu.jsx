import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-sky-400">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Rick and Morty API</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/characters">Szereplők</Link>
          </li>
          <li>
            <Link to="/episodes">Epizódok</Link>
          </li>
          <li>
            <Link to="/locations">Helyszínek</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Menu;
