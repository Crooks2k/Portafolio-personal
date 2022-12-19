import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Inicio() {
  return (
    <Container id="first-section-init">
      <Row>
        <Col id="inicio-first-col">
            <div className='Inicio-Tittles'>
                <img src="./public/aritos.png" className='aritos' id="arito1"></img>
                <p className='hola-tittle'>Hola!</p>
                <h2>Soy Daniel Veloza</h2>
                <p className='frontend-tittle'>Front-end Developer</p>
                <button className="Contact-butt">CONTACTO</button>
                <img src="./public/aritos.png" className='aritos' id="arito2"></img>
            </div>
        </Col>
        <Col id="inicio-second-col">
            <div className='Inicio-Image'>
                <img src="./public/inicio-programator.svg"></img>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;