import React from 'react'
import ProyectsCards from './ProyectsCards.jsx'
import nft from "../../images/NFT.png"
import doom from "../../images/wheel-of-doom.png"
import badjoke from "../../images/bad-joke-api.png"
import plancard from "../../images/anual-plan-card.png"
import reactapi from "../../images/rick-and-morty-api.png"
import dalpet from "../../images/Dalpet.png"
import videoclub from "../../images/VideoClub.png"
import hypatia from "../../images/Hypatia.png"
import nubelity from "../../images/Nubelity.png"
import lolapi from "../../images/lolapi.png"

function Proyects() {

    const cardsData = 
    [
      {
        "id": 1,
        "proyectName": "Hypatia",
        "proyectImage": hypatia,
        "alt": "Hypatia",
        "repolink": "https://github.com/Crooks2k/DalpetLovers-Web-Design",
        "deployment": "https://corpohypatia.vercel.app/"
      },
      {
        "id": 2,
        "proyectName": "Dalpet Lovers",
        "proyectImage": dalpet,
        "alt": "Dalpet Image",
        "repolink": "https://github.com/Crooks2k/DalpetLovers-Web-Design",
        "deployment": "https://dalpet-lovers.netlify.app/"
      },
      {
        "id": 3,
        "proyectName": "Video club With backend",
        "proyectImage": videoclub,
        "alt": "videoClub image",
        "repolink": "https://github.com/Crooks2k/Front-end-video-club",
        "deployment": "https://video-club-front-end.netlify.app/"
      },
      {"id": 4,
      "proyectName": "Random API Prueba Tecnica",
      "proyectImage": nubelity,
      "alt": "Random API Prueba Tecnica image",
      "repolink": "https://github.com/Crooks2k/Prueba-Tecnica-Nubelity",
      "deployment": "https://prueba-tecnica-nubelity.vercel.app/"
      },
      {"id": 5,
      "proyectName": "LoL Champion API",
      "proyectImage": lolapi,
      "alt": "LoL Champion API image",
      "repolink": "https://github.com/Crooks2k/LoL-Api-Champions",
      "deployment": "https://league-of-legends-champions.onrender.com/App/Champions"
      },
      {"id": 6,
        "proyectName": "NFT landing Page",
        "proyectImage": nft,
        "alt": "Nft page image",
        "repolink": "https://github.com/Crooks2k/Proyecto-2---NFT-page",
        "deployment": "https://crooks2k.github.io/Proyecto-2---NFT-page/"
      },
      {"id": 7,
        "proyectName": "Whell Of Doom",
        "proyectImage": doom,
        "alt": "Whell Of Doom image",
        "repolink": "https://github.com/Crooks2k/Wheel-Of-Doom",
        "deployment": "https://wheel-of-doom-proyect.netlify.app/"
      },
      {"id": 8,
        "proyectName": "Bad Joke Generator",
        "proyectImage": badjoke,
        "alt": "Bad Joke Generator Image",
        "repolink": "https://github.com/Crooks2k/Bad-Joke-Generator--API-",
        "deployment": "https://crooks2k.github.io/Bad-Joke-Generator--API-/"
      },
      {"id": 9,
        "proyectName": "Annual plan card",
        "proyectImage": plancard,
        "alt": "Annual plan card image",
        "repolink": "https://github.com/Crooks2k/Annual-Plan-Cart",
        "deployment": "https://crooks2k.github.io/Annual-Plan-Cart/"
      },
      {"id": 10,
        "proyectName": "React Api Consume",
        "proyectImage": reactapi,
        "alt": "React Api consume image",
        "repolink": "https://github.com/Crooks2k/react-api-consume",
        "deployment": "https://unrivaled-arithmetic-fbca12.netlify.app/"
      }
    ]
    
  return (
    //Procesado de iteracion para la generación de las cards con los datos de cada posicion del objeto cardData
    <>
    <div className="cards-generate-map" id="Proyectos">
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
    </>      
  )
}

export default Proyects