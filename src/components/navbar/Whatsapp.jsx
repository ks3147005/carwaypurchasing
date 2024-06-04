import React from 'react';
import './whatsapp.css';
import whatsapp from '../../assets/whatsapp.png'

const Whatsapp = () => {
  return (
    <div className='whatsapp'>
    <a href="https://wa.me/9625843232" target="_blank"  rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
    </div>
  )
}

export default Whatsapp;