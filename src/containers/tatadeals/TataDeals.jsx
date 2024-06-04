import React from 'react';
import './tatadeals.css';
import data from './data';
import images from './images';
import { useNavigate } from 'react-router-dom';

function TataDeals() {

  const navigate = useNavigate();

const handleSearch = () => {
  navigate("/Buycars")
}

  return (
    <section id='deals'>
     <div className='deals-heading'>
        <span className='deals-title'> Top Deals   </span>
        <span className='deals-title2'> On Tata Cars </span>
      </div>
      
      <div className='border2' />

      <div className='tata-deals__container'>
        {data.map(({ id, image, title }) => (
          <article key={id} className='deals__item' target="_blank">
            <div className='deals__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <div className='deals__item-cta'>
              {/* <h4>Save Up To 60000</h4> */}
              {/* <a href={github} className='btn' target='_balnk'>Github</a> */}
              <a onClick={handleSearch} className='btn' target='_blank'>View Details</a>
            </div>
          </article>
        ))}


      </div>
    </section>
  );
}

export default TataDeals;