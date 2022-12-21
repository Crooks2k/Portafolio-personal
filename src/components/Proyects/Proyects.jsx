import React from 'react'
import ProyectsCards from './ProyectsCards.jsx'


function Proyects() {
  
    const cardsData = 
    [
      {"id": 1,
        "proyectName": "Nft Page",
        "proyectImage": "./public/",
        "alt": "Nft page image"},
      {"id": 2,
        "proyectName": "Whell Of Doom",
        "proyectImage": "./public/",
        "alt": "Whell Of Doom image"},
      {"id": 3,
        "proyectName": "Bad Joke Generator",
        "proyectImage": "./public/",
        "alt": "Bad Joke Generator Image"},
      {"id": 4,
        "proyectName": "Annual plan card",
        "proyectImage": "./public/",
        "alt": "Annual plan card image"},
      {"id": 5,
        "proyectName": "Calculator JS",
        "proyectImage": "./public/",
        "alt": "Calculator JS image"},
      {"id": 6,
        "proyectName": "React Api Consume",
        "proyectImage": "./public/",
        "alt": "React Api consume image"}
    ]
    
  return (
    <div>
      {
        cardsData.map(cardData=>{
          return(
            <ProyectsCards key={cardData.id} cardData={cardData}/>
          )
        })
      }
    </div>

  )
}

export default Proyects