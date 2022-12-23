import React from 'react'
import Card from 'react-bootstrap/Card';
import giticon from "../../images/Github.png"
import webicon from "../../images/webicon.svg"

function ProyectsCards({cardData}) {

  let git = cardData.repolink
  let web = cardData.deployment
  function linkRecept(e){
    e.preventDefault()
    window.open(web, '_blank');
  }
  function gitRecept(e){
    e.preventDefault()
    window.open(git, '_blank');
  }

  return (
    <div className="Cards-generate">
      <Card style={{ width: '18rem' }} id="cards">
        <svg viewBox="0 0 1440 320"><path fill="#16161A" fill-opacity="1" d="M0,192L0,192L120,192L120,192L240,192L240,160L360,160L360,192L480,192L480,64L600,64L600,320L720,320L720,128L840,128L840,32L960,32L960,256L1080,256L1080,192L1200,192L1200,256L1320,256L1320,128L1440,128L1440,0L1320,0L1320,0L1200,0L1200,0L1080,0L1080,0L960,0L960,0L840,0L840,0L720,0L720,0L600,0L600,0L480,0L480,0L360,0L360,0L240,0L240,0L120,0L120,0L0,0L0,0Z"></path></svg>
        <div className='cards-generate-img__container'>
          <Card.Img variant="top" alt={cardData.alt}src={cardData.proyectImage} id="cards-generate-img"/>
        </div>
        <Card.Body>
          <Card.Title id="cards-tittles" className="Card-tittle">{cardData.proyectName}</Card.Title>
          <div className="Links">
            <button id="Website-butt" onClick={linkRecept}>WebSite <img src={webicon}/></button>
            <button id="GitHub-butt" onClick={gitRecept}>GitHub <img src={giticon}/></button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProyectsCards;