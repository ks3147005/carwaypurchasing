import React from 'react';
import OIP from '../../assets/OIP.jpeg';
import './header.css';

const Header = () => {
  return (
    <div>
      <section id='about'>
       <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={OIP} alt="about-image" />
            </div>
          </div>

          <div className='about__content'>
            <p>
              Greetings, car enthusiasts! Carway Purchasing a new car buying platform is here, where your car-buying journey takes an exciting turn.
              At Carway Purchasing, we're not just about finding you a car – we're about finding you the best deal possible. Buckle up and
              Let's embark on this journey together and drive away with both style and incredible savings!
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>

      </section>
      <div className='border' />
    </div>
  )
}

export default Header;