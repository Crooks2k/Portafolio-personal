import React from 'react'
import ContactEmailPop from './ContactEmailPop';

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
            <img src="./public/Email.png" alt="Email Contact" className='contact-images'/>
            <img src="./public/mdi_github.png" alt="Linkedin Contact" className='contact-images' onClick={gitHubRedirect}/>
            <img src="./public/mdi_linkedin.png" alt="Github Contact" className='contact-images' onClick={LinkedinRedirect}/>
        </div>
    </div>
  )
}

export default Contact