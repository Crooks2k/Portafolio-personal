import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aritos from "../../images/aritos.png"
import programadorinit from "../../images/inicio-programator.svg"
function Inicio() {
  function scrollContact(e){
    e.preventDefault()
    
  }
  return (
    <Container id="first-section-init">
      <Row>
        <Col id="inicio-first-col">
            <div className='Inicio-Tittles'>
                <img src={aritos} className='aritos' id="arito1"></img>
                <p className='hola-tittle'>Hola!</p>
                <h2>Soy Daniel Veloza</h2>
                <p className='frontend-tittle'>Front-end Developer</p>
                <button className="Contact-butt" onClick={scrollContact}>CONTACTO</button>
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
  );
}

export default Inicio;