import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import insta from '../../assets/insta.webp';
import gmail from '../../assets/gmail.webp';
import whatsapp from '../../assets/whatsapp.webp';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l53pocw', 'template_x9vpief', form.current, 'Gx8Dz36ThFywe5HKp')
    e.target.reset()
      
  };
  return (
      <section id='contact'>
        <h1>Drop your details</h1>
        <h2>Team will reach out to you</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>          
              <img src={gmail}/>
              <h4>Email</h4>
              <h5>carwaypurchasing@gmail.com</h5>
              <a href="mailto:carwaypurchasing@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <img src={insta} />
            
              <h4>Instagram</h4>
              <h5>Carway Purchasing</h5>
              <a href="https://m.me/profile.php?id=100035611012706" target='_blank'>Send a message</a>
            </article>

            <article className='contact__option'>
              <img src={whatsapp}/>
              <h4>WhatsApp</h4>
              <h5>8826181161</h5>
              <a href="https://api.whatsapp.com/send?phone+8826181161" target='_blank'>Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="eamil" placeholder='Your Email' required/>
          <input type="tel" name="Contact" placeholder='Contact Number' required/>

          <button type='submit' className='btn btn-primary'> Submit</button>
          </form>
        </div>
      </section>
    
  )
}

export default Contact