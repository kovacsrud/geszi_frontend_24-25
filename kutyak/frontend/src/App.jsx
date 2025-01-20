import { KutyaProvider } from "./context/KutyaContext";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Main from "./components/Main";
import Menu from "./components/Menu";
import Kutyak from "./components/Kutyak";
import Kutyanevek from "./components/Kutyanevek";
import Kutyafajtak from "./components/Kutyafajtak";
import KutyafajtaForm from "./components/KutyafajtaForm";


function App() {
  

  return (
   <div>
     
     <KutyaProvider>
      <BrowserRouter>
        <Menu />
       <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/kutyak" element={<Kutyak />}/>
            <Route path="/kutyanevek" element={<Kutyanevek />} />
            <Route path="/kutyafajtak" element={<Kutyafajtak />} />
            <Route path="/ujkutyafajta" element={<KutyafajtaForm />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
      </BrowserRouter>

     </KutyaProvider>

   </div>
  )
}

export default App
