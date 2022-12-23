import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                  <Nav.Link href="#Inicio" className="Linea-editable">Inicio</Nav.Link>
                  <Nav.Link href="#action2" className="Linea-editable">Sobre mi</Nav.Link>
                  <Nav.Link href="#action3" className="Linea-editable">Habilidades</Nav.Link>
                  <Nav.Link href="#action4" className="Linea-editable">Proyectos</Nav.Link>
                  <Nav.Link href="#action5" id="header-contact">Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> 
          </Container>
        </Navbar>
        
      ))}
      <img src="./src/images/header.svg" id="Header-image"></img>
    </div>
  );
}

export default OffcanvasExample;