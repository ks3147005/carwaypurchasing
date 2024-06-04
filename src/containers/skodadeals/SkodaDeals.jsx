import React from 'react';
import './skodadeals.css';
import data from './data';
import images from './images';
import { useNavigate } from 'react-router-dom';


function SkodaDeals() {

const navigate = useNavigate();

const handleSearch = () => {
  navigate("/BuyCars")
}


  return (
    <section id='deals'>
     <div className='deals-heading'>
        <span className='deals-title'> Top Deals </span>
        <span className='deals-title2'> On Skoda Cars </span>
      </div>
      <div className='border2' />

      <div className='skoda-deals__container'>
        {data.map(({ id, image, title }) => (
          <article key={id} className='deals__item'>
            <div className='deals__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <div className='deals__item-cta'>
              <a className='btn' target='_blank' onClick={handleSearch}>View Details</a>
            </div>
          </article>
        ))}


      </div>
    </section>
  );
}

export default SkodaDeals;