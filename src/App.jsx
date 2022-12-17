import './App.css'
import './components/Header/Header.css'
import './components/Inicio/Inicio.css'
import './components/About/About.css'
import Inicio from "./components/Inicio/Inicio"
import OffcanvasExample from "./components/Header/Header"
import About from "./Components/About/About"
function App() {
 

  
  return (
    <>
      <OffcanvasExample/>
      <Inicio/>
      <About/>
    </>
  )
}

export default App