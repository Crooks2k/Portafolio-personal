import React from 'react'
import Card from 'react-bootstrap/Card';
import giticon from "../../images/Github.png"
import webicon from "../../images/webicon.svg"
import { CardActionArea } from '@mui/material';
import { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
};


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

  //Open image modal
  const handleOpen = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const [selectedCard, setSelectedCard] = useState(null);

  const infoAlert = () =>{
    swal("Puedes dar click en la imagen para cerrarla")
  }

  return (
    <div className="Cards-generate">
      <Card style={{ width: '18rem' }} id="cards">
      <CardActionArea onClick={() => handleOpen(cardData.proyectImage)}>
        <div className='cards-generate-img__container'>
          <Card.Img variant="top" alt={cardData.alt}src={cardData.proyectImage} id="cards-generate-img"/>
        </div>
      </CardActionArea>
        <Card.Body>
          <Card.Title id="cards-tittles" className="Card-tittle">{cardData.proyectName}</Card.Title>
          <div className="Links">
            <button id="Website-butt" onClick={linkRecept}>WebSite <img src={webicon}/></button>
            <button id="GitHub-butt" onClick={gitRecept}>GitHub <img src={giticon}/></button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        open={selectedCard !== null}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img src={cardData.proyectImage} id="modal-path-image" onClick={handleClose}/>
        </Box>
      </Modal>
    </div>
  )
}

export default ProyectsCards;