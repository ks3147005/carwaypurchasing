import React from 'react';
import './whyus.css';
import only from '../../assets/only.png';

const Whyus = () => {
  return (
    <div className='whyus'>
      <div className='whyus-heading'>
        <h3>Why Us</h3>
      </div>

      <div className='whyus-container-section'>
<div className='whyus-container'>
    <div className='whyus-img'>
<img src={only} alt="" />
    </div>
    <p>Only Authorised Dealers</p>
</div>

<div className='whyus-container'>
    <div className='whyus-img'>
<img src={only} alt="" />
    </div>
    <p>Retail Buying at Wholesale Prices</p>
</div>
<div className='whyus-container'>
    <div className='whyus-img'>
<img src={only} alt="" />
    </div>
    <p>Hassle Free</p>
</div>
<div className='whyus-container'>
    <div className='whyus-img'>
<img src={only} alt="" />
    </div>
    <p>Free Test Drives</p>
</div>
<div className='whyus-container'>
    <div className='whyus-img'>
<img src={only} alt="" />
    </div>
    <p>Bidding and Quotes</p>
</div>
</div>

    </div>
  )
}

export default Whyus;