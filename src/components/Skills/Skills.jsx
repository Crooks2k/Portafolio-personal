import Carousel from 'react-bootstrap/Carousel';
import htmlimg from "../../images/HTML.png"
import cssimg from "../../images/CSS.png"
import bootsrapimg from "../../images/boostrap.png"
import reactimg from "../../images/react.png"
import scrumimg from "../../images/scrum.png"
import figma from "../../images/figma.png"
import node from "../../images/node.svg"
import javascript from "../../images/javascript.svg"
import mongodb from "../../images/mongodb.svg"
import typescript from "../../images/typescript.png"

function ControlledCarousel() {
  return (
    <div id="Habilidades">


      <Carousel id="carousel-start">

      <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={reactimg} alt="Third slide" id="react-img"/>

        <Carousel.Caption>
            <h5>REACT</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={typescript} alt="Third slide" id="typescript-img"/>
        <Carousel.Caption>
            <h5>TYPESCRIPT</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={node} alt="Third slide" id="node-img"/>

        <Carousel.Caption>
            <h5>NODE JS</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={htmlimg} alt="First slide" id="html-img"/>
          <Carousel.Caption>
            <h5>HTML 5</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={cssimg} alt="Second slide" id="css-img"/>

          <Carousel.Caption>
            <h5>CSS 3</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={javascript} alt="Third slide" id="js-img"/>

          <Carousel.Caption>
            <h5>JAVASCRIPT</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={bootsrapimg} alt="Third slide" id="bootsrap-img"/>

          <Carousel.Caption>
            <h5>BOOTSRAP</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={mongodb} alt="Third slide" id="mongo-img"/>

        <Carousel.Caption>
            <h5>MONGO DB</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={figma} alt="Third slide" id="figma-img"/>

        <Carousel.Caption>
            <h5>FIGMA</h5>
            <p>SKILLS</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#16161A" fillopacity="1" d="M0,0L0,224L43.6,224L43.6,288L87.3,288L87.3,32L130.9,32L130.9,96L174.5,96L174.5,160L218.2,160L218.2,288L261.8,288L261.8,160L305.5,160L305.5,288L349.1,288L349.1,64L392.7,64L392.7,160L436.4,160L436.4,64L480,64L480,320L523.6,320L523.6,96L567.3,96L567.3,96L610.9,96L610.9,192L654.5,192L654.5,320L698.2,320L698.2,256L741.8,256L741.8,128L785.5,128L785.5,256L829.1,256L829.1,32L872.7,32L872.7,96L916.4,96L916.4,128L960,128L960,32L1003.6,32L1003.6,192L1047.3,192L1047.3,32L1090.9,32L1090.9,192L1134.5,192L1134.5,96L1178.2,96L1178.2,224L1221.8,224L1221.8,160L1265.5,160L1265.5,96L1309.1,96L1309.1,288L1352.7,288L1352.7,192L1396.4,192L1396.4,32L1440,32L1440,0L1396.4,0L1396.4,0L1352.7,0L1352.7,0L1309.1,0L1309.1,0L1265.5,0L1265.5,0L1221.8,0L1221.8,0L1178.2,0L1178.2,0L1134.5,0L1134.5,0L1090.9,0L1090.9,0L1047.3,0L1047.3,0L1003.6,0L1003.6,0L960,0L960,0L916.4,0L916.4,0L872.7,0L872.7,0L829.1,0L829.1,0L785.5,0L785.5,0L741.8,0L741.8,0L698.2,0L698.2,0L654.5,0L654.5,0L610.9,0L610.9,0L567.3,0L567.3,0L523.6,0L523.6,0L480,0L480,0L436.4,0L436.4,0L392.7,0L392.7,0L349.1,0L349.1,0L305.5,0L305.5,0L261.8,0L261.8,0L218.2,0L218.2,0L174.5,0L174.5,0L130.9,0L130.9,0L87.3,0L87.3,0L43.6,0L43.6,0L0,0L0,0Z"></path></svg>
          <img className="d-block" src={scrumimg} alt="Third slide" id="scrum-img"/>

          <Carousel.Caption>
            <h5>METODOLOGIAS AGILES</h5>
            <p>SCRUM</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}



export default ControlledCarousel;