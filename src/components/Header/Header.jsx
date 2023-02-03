import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import headerform from "../../images/header.svg"
import { Link, animateScroll as scroll } from "react-scroll";
function OffcanvasExample() {

  return (
    <div>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" id="NavBar-nav" fixed="top"> 
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="butt-nav"/>
            <Navbar.Offcanvas className="offcanvas-navbar"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" >
              <Offcanvas.Header closeButton id="offcanvas-body-act">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="offcanvas-body-act-e"></Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body id="offcanvas-body">
                <Nav className="justify-content-end flex-grow-1 pe-3 " id="NavBar-colors">

                  <Link activeClass="active" to="Inicio" spy={true} smooth={false} offset={-130} duration={500}>
                    <Nav.Link>Inicio</Nav.Link>
                  </Link>
                  
                  <Link activeClass="active" to="About" spy={true} smooth={false} offset={-130} duration={500}>
                    <Nav.Link>Sobre mi</Nav.Link>
                  </Link>
                  
                  <Link activeClass="active" to="Habilidades" spy={true} smooth={false} offset={-145} duration={500}>
                    <Nav.Link>Habilidades</Nav.Link>
                  </Link>
                  
                  <Link activeClass="active" to="Proyectos" spy={true} smooth={false} offset={-165} duration={500}>
                    <Nav.Link>Proyectos</Nav.Link>
                  </Link>
                  
                  <Link activeClass="active" to="header-contact" spy={true} smooth={false} offset={-170} duration={500}>
                    <Nav.Link className="header-contact">Contacto</Nav.Link>
                  </Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> 
          </Container>
        </Navbar>
      ))}
      <img src={headerform} id="Header-image"></img>
    </div>
  );
}

export default OffcanvasExample;