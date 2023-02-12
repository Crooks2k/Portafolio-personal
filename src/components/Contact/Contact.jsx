import emailimg from "../../images/Email.png"
import git from "../../images/mdi_github.png"
import linkedin from "../../images/mdi_linkedin.png"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjs from "emailjs-com"
import swal from 'sweetalert';

function Contact() {
    //github redirect funct
    function gitHubRedirect(e) {
        e.preventDefault();
        window.open("https://github.com/Crooks2k", '_blank');
    };
    //linkedin redirect funct
    function LinkedinRedirect(e) {
        e.preventDefault();
        window.open("www.linkedin.com/in/daniel-felipe-veloza", '_blank');
    };

    //Modal variables (state)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Email JS AUTH
    emailjs.init("GHXV5k9D9NKrNCvIy");

    //form vars
    const [to, setTo] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

          //form data
    const handleChangeName = (e) => {
        setTo(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    //send email function and validations
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

     //email js
    function emailDatSend (to, email, message){
        handleClose() // close modal function
        emailjs.send('service_ukee7jz', 'template_3lk8hej', { //service id - template id
        to,
        email,
        message
      }, 'GHXV5k9D9NKrNCvIy') //user id
        .then(() => {
          //sweet alert send popup {
          swal("Email enviado correctamente", "Dentro de poco estare en contacto contigo", "success")
        })
        .catch(() =>{
            //sweet alert error popup
            swal("No se pudo enviar el email", "revisa los datos escritos e intenta nuevamente mas tarde", "error")})

        setTo("")
        setEmail("")
        setMessage("")
    }

    const sendEmail = (to, email, message) =>{
        
        //data validation (if validation is true return to emailDatSend Function)
       if (to === "" || email === "" || message === "") {
        swal("No pueden haber campos vacios", "", "error",{ button: "ok"})
    }  else if (!regex.test(email)) {
        swal("Debes escribir una dirección de correo electrónico válida", "","error",{ button: "ok"})
    }  else {
        emailDatSend(to, email, message)
    }
}
    return (
        <div className='Contact' id="header-contact">
            <div className="Contact-display">
                {/* Email Modal start */}
                <img src={emailimg} alt="Email Contact" className='contact-images' onClick={handleShow}/>

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
                                    onChange={handleChangeName}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={handleChangeEmail}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensaje y razón de contacto</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Message" onChange={handleChangeMessage}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer__bg">
                        <Button variant="primary" onClick={()=>sendEmail(to, email, message)} className="Modal-send__but">
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
