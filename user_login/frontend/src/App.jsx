import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { UserProvider } from "./context/UserContext";
import Vedett from "./components/Vedett";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  

  return (
   <div>
     <UserProvider>
     <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/vedett" element={<Vedett />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </BrowserRouter>
     </UserProvider>
   </div>
   
  )
}

export default App
