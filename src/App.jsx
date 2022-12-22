import './App.css'
import './components/Header/Header.css'
import './components/Inicio/Inicio.css'
import './components/About/About.css'
import './components/Skills/Skills.css'
import './components/Proyects/Proyects.css'
import './components/Proyects/ProyectsCards.css'
import './components/Contact/Contact.css'
import './components/Footer/Footer.css'
import Inicio from "./components/Inicio/Inicio"
import OffcanvasExample from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Proyects from './components/Proyects/Proyects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <OffcanvasExample/>
      <Inicio/>
      <About/>
      <h3 id="Habilities">MIS HABILIDADES</h3>
      <Skills/>
      <h3 id="Proyects">MIS PROYECTOS</h3>
      <Proyects/>
      <h3 id="Contacto">CONTACTO</h3>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App