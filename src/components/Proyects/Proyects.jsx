import React from 'react'
import ProyectsCards from './ProyectsCards.jsx'
function Proyects() {
  
    const cardsData = 
    [
      {"id": 1,
        "proyectName": "Nft Page",
        "proyectImage": "./public/NFT.png",
        "alt": "Nft page image",
        "repolink": "https://github.com/Crooks2k/Proyecto-2---NFT-page",
        "deployment": "https://crooks2k.github.io/Proyecto-2---NFT-page/"},
      {"id": 2,
        "proyectName": "Whell Of Doom",
        "proyectImage": "./public/wheel-of-doom.png",
        "alt": "Whell Of Doom image",
        "repolink": "https://github.com/Crooks2k/Wheel-Of-Doom",
        "deployment": "https://wheel-of-doom-proyect.netlify.app/"},
      {"id": 3,
        "proyectName": "Bad Joke Generator",
        "proyectImage": "./public/bad-joke-api.png",
        "alt": "Bad Joke Generator Image",
        "repolink": "https://github.com/Crooks2k/Bad-Joke-Generator--API-",
        "deployment": "https://crooks2k.github.io/Bad-Joke-Generator--API-/"},
      {"id": 4,
        "proyectName": "Annual plan card",
        "proyectImage": "./public/anual-plan-card.png",
        "alt": "Annual plan card image",
        "repolink": "https://github.com/Crooks2k/Annual-Plan-Cart",
        "deployment": "https://crooks2k.github.io/Annual-Plan-Cart/"},
      {"id": 5,
        "proyectName": "Calculator JS",
        "proyectImage": "./public/calculator-js.png",
        "alt": "Calculator JS image",
        "repolink": "https://github.com/Crooks2k/Calculator-JS",
        "deployment": "https://crooks2k.github.io/Calculator-JS/"},
      {"id": 6,
        "proyectName": "React Api Consume",
        "proyectImage": "./public/rick-and-morty-api.png",
        "alt": "React Api consume image",
        "repolink": "https://github.com/Crooks2k/react-api-consume",
        "deployment": "---"}
    ]
    
  return (
    //Procesado de iteracion para la generación de las cards con los datos de cada posicion del objeto cardData
    <div className="cards-generate-map">
      {
        cardsData.map(cardData=>{
          return(
            <ProyectsCards 
            key={cardData.id} 
            cardData={cardData}/>
          )
        })
      }
    </div>       
  )
}

export default Proyects