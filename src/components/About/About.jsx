import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from "../../images/About.svg"
import CV from "../../assets/CV.pdf"

function About() {

  function CvRedirect() {
    window.open(CV, '_blank');
};

  return (
    <div id="About">
       <Container id="second-section-main__container">
      <Row>
        <Col id="second-section-about-img">
            <img src={aboutimg}></img>
        </Col>
        <Col id="second-section-about-text">
            <h2>SOBRE MI</h2>
            <p>Desarrollador web full stack creativo y innovador con experiencia trabajando con clientes, creación de páginas web como E-commerce, landingpage y paginas administrativas. También lleve a cabo la lideración de varios proyectos</p>
            <button onClick={CvRedirect}>VISUALIZAR CV</button>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
}
export default About;