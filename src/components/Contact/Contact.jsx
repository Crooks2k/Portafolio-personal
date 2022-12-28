import email from "../../images/Email.png"
import git from "../../images/mdi_github.png"
import linkedin from "../../images/mdi_linkedin.png"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Contact() {
    //github redirect funct
    function gitHubRedirect(e) {
        e.preventDefault();
        window.open("https://github.com/Crooks2k", '_blank');
    }
    //linkedin redirect funct
    function LinkedinRedirect(e) {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/daniel-felipe-veloza-0a00b8208/", '_blank');
    }

    //Modal variables (state)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className='Contact' id="header-contact">
            <div className="Contact-display">
                {/* Email Modal start */}
                <img src={email} alt="Email Contact" className='contact-images' onClick={handleShow}/>

                <Modal show={show} onHide={handleClose} backdrop="static" centered class="modal-main" >
                    <Modal.Header closeButton className="modal-header__bg">
                        <Modal.Title id="modal-tittle-main">Enviar correo de contacto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-bg">
                        <Form>
                           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre de empresa o remitente"
                                    autofocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Razón de contacto</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer__bg">
                        <Button variant="primary" onClick={handleClose} className="Modal-send__but">
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Email Modal end */}
            <img src={linkedin} alt="Linkedin Contact" className='contact-images' onClick={LinkedinRedirect} />
            <img src={git} alt="Github Contact" className='contact-images' onClick={gitHubRedirect} />
        </div>
    </div >
  )
}

export default Contact