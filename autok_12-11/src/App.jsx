import AutoLista from "./components/AutoLista";
import UjAuto from "./components/UjAuto";
import Menu from "./components/Menu";
import Main from "./components/Main";
import ModAuto from "./components/ModAuto";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  

  return (
   <div>
     
     <BrowserRouter>
     <Menu />
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/autolista" element={<AutoLista />} />
        <Route path="/ujauto" element={<ModAuto />} />
        <Route path="/modauto" element={<ModAuto />} />
        <Route path="*" element={<Navigate to="/" />} />
     </Routes>
     </BrowserRouter>

   </div>
  )
}

export default App
