import React from 'react';
import './deal.css';
import data from './data';
import images from './images';
// import { useNavigate } from "react-router-dom";

function Deal() {

  // const navigate = useNavigate();

  // const handleSearch = () => {
  //     navigate("/Cardeals")
  // }

  return (
    <section id='deals'>
     <div className='deals-heading'>
        <span className='deals-title'> The Most </span>
        <span className='deals-title2'> Searched Cars </span>
      </div>

      <div className='container deals__container'>
        {data.map(({ id, image, title }) => (
          <article key={id} className='deals__item'  target="_blank">
            <div className='deals__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <div className='deals__item-cta'>
              <a className='btn' target='_blank'>Check It Out</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Deal;