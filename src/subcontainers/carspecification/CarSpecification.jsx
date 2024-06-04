import React from 'react';
import IMG2 from '../../assets/car2.jpg';
import './carspecification.css';

const CarSpecification = (props) => {

    const { selectedOption } = props

  return (
    <div className='car-specification-container'>
      <h3>{selectedOption}</h3>
      <div className='car-img'>
        <img src={IMG2} alt="car1" />
      </div>
    </div>
  )
}

export default CarSpecification;
