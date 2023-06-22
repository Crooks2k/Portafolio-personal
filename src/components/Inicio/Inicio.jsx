import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aritos from "../../images/aritos.png"
import programadorinit from "../../images/inicioprogramator.svg"
import { Link, animateScroll as scroll } from "react-scroll";
function Inicio() {
  
  return (
    <div id="Inicio">
      <Container id="first-section-init">
        <Row>
          <Col id="inicio-first-col">
              <div className='Inicio-Tittles'>
                  <p className='hola-tittle'>Hola!</p>
                  <h1>Soy Daniel Veloza</h1>
                  <h2 className='frontend-tittle'>Full Stack Developer MERN</h2>

                  <Link activeClass="active" to="header-contact" spy={true} smooth={false} offset={-100} duration={500}>
                    <button className="Contact-butt">CONTACTO</button>
                  </Link>
              </div>
          </Col>
          <Col id="inicio-second-col">
              <div className='Inicio-Image'>
                  <img src={programadorinit}></img>
              </div>
          </Col>
        </Row>
      </Container>
      <div id="programator-image-mobile">
       <img src={programadorinit}></img>
      </div>
    </div>
    
  );
}

export default Inicio;