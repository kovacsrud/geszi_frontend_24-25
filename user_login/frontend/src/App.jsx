import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Main from "./components/Main";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  

  return (
   <div>
     <h1 className="text-3xl text-center text-sky-700 font-bold">React és Tailwind CSS</h1>
     <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
