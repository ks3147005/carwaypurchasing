import React from 'react';
import './brand.css';
import R from '../../assets/R.png';
import hyundai from '../../assets/hyundai.jpeg';
import hector from '../../assets/hector.png';
import mahindra3 from '../../assets/mahindra3.webp';



const Brands = () => {
  return (
    <section className='brands'>
      <div className='brands-heading'>
      <span className='brands-title'> Popular Brand </span>
        <span className='brands-title2'> We Are Working With </span>
      </div>
      <div className='brand-container'>
        <div className='brand-img'>
          <div className='brand'>
          <img src={R} alt="R" />
          </div>
          <div className='brand'>
          <img src={hyundai} alt="R" />
          </div>
          <div className='brand-hector'>
          <img src={hector} alt="R" />
          </div>
          <div className='brand'>
          <img src={mahindra3} alt="R" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Brands;