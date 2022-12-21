import React from 'react'
import Card from 'react-bootstrap/Card';

function ProyectsCards({cardData}) {
  
  return (
    <div>
      <Card style={{ width: '20rem' }} id="cards">
        <svg viewBox="0 0 1440 320"><path fill="#16161A" fill-opacity="1" d="M0,192L0,192L120,192L120,192L240,192L240,160L360,160L360,192L480,192L480,64L600,64L600,320L720,320L720,128L840,128L840,32L960,32L960,256L1080,256L1080,192L1200,192L1200,256L1320,256L1320,128L1440,128L1440,0L1320,0L1320,0L1200,0L1200,0L1080,0L1080,0L960,0L960,0L840,0L840,0L720,0L720,0L600,0L600,0L480,0L480,0L360,0L360,0L240,0L240,0L120,0L120,0L0,0L0,0Z"></path></svg>
        <Card.Img variant="top" alt={cardData.alt}src={cardData.proyectImage}/>
        <Card.Body>
          <Card.Title id="cards-tittles" className="Card-tittle">{cardData.proyectName}</Card.Title>
          <div className="Links">
            <button id="Website-butt">WebSite <img src="./public/webicon.svg"/></button>
            <button id="GitHub-butt">GitHub <img src="./public/Github.png"/></button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProyectsCards;