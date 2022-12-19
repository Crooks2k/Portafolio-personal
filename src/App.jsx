import './App.css'
import './components/Header/Header.css'
import './components/Inicio/Inicio.css'
import './components/About/About.css'
import './components/Skills/Skills.css'
import Inicio from "./components/Inicio/Inicio"
import OffcanvasExample from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
function App() {
  
  return (
    <>
      <OffcanvasExample/>
      <Inicio/>
      <About/>
      <h3 id="Habilities">MIS HABILIDADES</h3>
      <Skills/>
    </>
  )
}

export default App