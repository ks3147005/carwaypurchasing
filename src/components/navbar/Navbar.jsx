import React, { useState } from 'react';
import './navbar.css';
import Whatsapp from './Whatsapp';
import OIP from '../../assets/OIP.jpeg'

import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/* <img src={OIP} /> */}
        <h2 className='navbar-heading'>CarWay Purchasing</h2>
      </div>
      <div className='navbar-links'>
      <div className='navbar-links-container'>
      <p><a href="#ourwork"> Home </a></p>
          <p><a href="#research"> Best Deals </a></p>
          <p><a href="#buycar"> Buy Car </a></p>
          <p><a href="#goelectric"> Go Electric </a></p>
      </div>

      <div className='navbar-contact'>
        <button type='submit' href="#contact">Contact Us</button>
      </div> 
  <Whatsapp />       

      </div>
  <div className='navbar-menu'>
      {toggleMenu
      ? <AiOutlineClose color='#fff' size={27} onClick={() => setToggleMenu(false)} />
      : <AiOutlineMenu color='#fff' size={27} onClick={() => setToggleMenu(true)} />
      }
      
      {toggleMenu && (
      <div className='navbar-menu-container scale-up-center'>
        <div className='navbar-menu-links'>
        <p><a href="#home">Our Work</a></p>
          <p><a href="#wgpt3">Services</a></p>
          <p><a href="#possibility">Pricing</a></p>
          <p><a href="#blog">Blogs</a></p>
        </div>

        <div className='navbar-menu-contact'>
        <button type='submit' href="#contact">Contact Us</button>
      </div> 
      </div>  
      )}
      </div>
    
     

    </nav>
  )
}

export default Navbar;
  