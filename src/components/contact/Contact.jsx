import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
// import emaijs from 'emailjs-comp'



const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  // e.preventDefault();
  // emailjs.sendForm('','',form.current,'')
  // not adding this feature, website is not in use, only following tutorial
  e.target.reset();
}

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>benharrison05@hotmail.co.uk</h5>
            <a href="mailto:benharrison05@hotmail.co.uk" target="_blank">Send an Email.</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Message</h4>
            <h5>Facebook Messenger [not active]</h5>
            <a href="" target="_blank">Send a Message.</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>[my number here]</h5>
            <a href="https://api.whatsapp.com/send?phone+44123456789" target="_blank">Send a WhatsApp Message.</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message [Messages will not send, this is a placeholder]'/>
          <button type="Submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact