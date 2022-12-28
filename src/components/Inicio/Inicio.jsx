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
                  <img src={aritos} className='aritos' id="arito1"></img>
                  <p className='hola-tittle'>Hola!</p>
                  <h2>Soy Daniel Veloza</h2>
                  <p className='frontend-tittle'>Front-end Developer</p>

                  <Link activeClass="active" to="header-contact" spy={true} smooth={false} offset={-100} duration={500}>
                    <button className="Contact-butt">CONTACTO</button>
                  </Link>
                  
                  <img src={aritos} className='aritos' id="arito2"></img>
              </div>
          </Col>
          <Col id="inicio-second-col">
              <div className='Inicio-Image'>
                  <img src={programadorinit}></img>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default Inicio;