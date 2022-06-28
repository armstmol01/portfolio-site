import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4c1ahh', 'template_9ai70jw', form.current, 'PCGoNLqyNBc20wHVA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mamolly01@gmail.com</h5>
            <a href="mailto:mamolly01@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>mamolly01</h5>
            <a href="https://m.me/molly.armstrong.3705">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+18888888888</h5>
            <a href="https://api.whatsapp.com/send?phone=18888888888">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact