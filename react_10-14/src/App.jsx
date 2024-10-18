
import './App.css'
import Header from './components/Header';
import Posts from './components/Posts';
import Users from './components/Users';


function App() {
  //Kontroller rész

  return (
    //Sablon rész
   
      <div>
        <Header headerText={"React App"} />        
        
        <Users />
        
      </div>
      
    
    
  )
}

export default App
