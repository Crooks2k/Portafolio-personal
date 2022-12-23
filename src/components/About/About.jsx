import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from "../../images/About.svg"
function About() {
  return (
    <Container id="second-section-main__container">
      <Row>
        <Col id="second-section-about-img">
            <img src={aboutimg}></img>
        </Col>
        <Col id="second-section-about-text">
            <h2>SOBRE MI</h2>
            <p>Soy Daniel Veloza, desarrollador web Front-End en Bogotá, Colombia. Creo webs a medida para ayudar a las personas a estar mas conectadas, poseo buenas habilidades blandas y me gusta mantenerme en constante crecimiento aprendiendo nuevas tecnologias.</p>
            <button>DOWNLOAD CV</button>
        </Col>
      </Row>
    </Container>
  );
}
export default About;