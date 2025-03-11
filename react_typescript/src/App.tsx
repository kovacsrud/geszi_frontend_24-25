import Header from "./components/Header"
import Subheader from "./components/Subheader"
import Section from "./components/Section"
import Typicode from "./components/Typicode"
import RandomUsers from "./components/RandomUsers"

function App() {
 

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-amber-800">React TypeScript</h1>
      <Header headerText="TypeScript header" id={6} />
      <Subheader>
        Csak szöveg
        <p className="text-center">Szöveg1</p>
        <p>Szöveg2</p>
        <p>Szöveg3</p>
      </Subheader>

      <Section>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Section>

      <Section title="Section cím">
        <p>első</p>
        <p>második</p>
      </Section>
      <Typicode />
      <RandomUsers />
      
      
    </div>
  )
}

export default App
