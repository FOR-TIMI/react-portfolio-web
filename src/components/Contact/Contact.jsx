import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('react-portfolio', 'template_4gd7rzp', form.current, 'dASa0UBkTt7BX_s5A')
      .then((result) => {
          toast.success("Message sent to Erifeoluwa");
      }, (error) => {
          toast.error("Oops something went wrong");
      })

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Reach out to me</h5>
      <h2>Contact Me</h2>
      <ToastContainer/>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email  */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>femiladiranerife24@gmail.com</h5>
            <a href="mailto:femiladiranerife24@gmail.com" target='_blank' re="norefferer">Email me</a>
          </article>

          {/* Linkedin  */}
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Erifeoluwa Femi-Ladiran</h5>
            <a href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/" target='_blank' rel="norefferer">Let's connect</a>
          </article>

          {/* Instagram  */}
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>for_timi</h5>
            <a href="https://ig.me/m/for_timi" target='_blank' rel="norefferer">Send a DM</a>
          </article>

          
        </div>
        
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail} >
           <input type="text" name='name' placeholder='Full Name' required/>
           <input type="email" name='email' placeholder='Email' required/>
           <textarea name="message" placeholder='Message' rows="7" required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section >
  )
}

export default Contact