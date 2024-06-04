import React from 'react';
import one from '../../assets/one.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import './featured.css';


const Featured = () => {
  return (
    <section className='featured'>
      <div className='featured-heading'>
      <span className='featured-title'> As </span>
        <span className='featured-title2'> Featured In </span>
      </div>

      <div className='featured-img'>
        <img src={one} alt="two" />
        <img src={three} alt="two" />
      </div>
    </section>
  )
}

export default Featured;
