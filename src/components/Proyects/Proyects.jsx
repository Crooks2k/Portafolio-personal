import React from 'react'
import ProyectsCards from './ProyectsCards.jsx'


function Proyects() {
  
    const cardsData = 
    [
      {id: 1,
        proyectName: "Nft Page",
        proyectImage: "./public/scrum.png"},
      {id: 2,
        proyectName: "Whell Of Doom",
        proyectImage: "./public/"},
      {id: 3,
        proyectName: "Bad Joke Generator",
        proyectImage: "./public/"},
      {id: 4,
        proyectName: "Annual plan card",
        proyectImage: "./public/"},
      {id: 5,
        proyectName: "Calculator JS",
        proyectImage: "./public/"},
      {id: 6,
        proyectName: "React Api Consume",
        proyectImage: "./public/"}
    ]
 
  return (
    <>
      {cardsData.map(() =>(
          <ProyectsCards cardsData={cardsData}/>
      ))}
    </>
  )
}

export default Proyects