import React from 'react'
import ContactEmailPop from './ContactEmailPop';
import email from "../../images/Email.png"
import git from "../../images/mdi_github.png"
import linkedin from "../../images/mdi_linkedin.png"

function Contact() {
    function gitHubRedirect(e){
        e.preventDefault();
        window.open("https://github.com/Crooks2k", '_blank');
    }
    function LinkedinRedirect(e){
        e.preventDefault();
        window.open("https://www.linkedin.com/in/daniel-felipe-veloza-0a00b8208/", '_blank');
    }
    function EmailPopUpForm(e){
        e.preventDefault();
        <ContactEmailPop/>
    }

    
  return (
    <div className='Contact'>
        <div className="Contact-display">
            <img src={email} alt="Email Contact" className='contact-images'/>
            <img src={linkedin} alt="Linkedin Contact" className='contact-images' onClick={gitHubRedirect}/>
            <img src={git} alt="Github Contact" className='contact-images' onClick={LinkedinRedirect}/>
        </div>
    </div>
  )
}

export default Contact