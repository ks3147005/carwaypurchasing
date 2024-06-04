import React, {useState} from 'react';
import './carvariants.css';
// import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown} from 'react-icons/ai';
import DropdownMenu from '../dropdown/DropDown';
import CarColors from '../carcolor/CarColors';
import Registration from '../registration/Registration';
import CarSpecification from '../carspecification/CarSpecification';


const CarVariants = () => {
  return (
      <div className='buycar-container'>
        <div className='car-specification-container'>
      <div className='car-specification'>
      <CarSpecification />
      </div>
      </div>
    <div className='car-variants'>

     <div className='car-dropdown'>
     <DropdownMenu />

        </div> 
        <div className='color-dropdown'>
     <CarColors />
     </div>
     <div className='registration-state'>
    <Registration />
     </div>
     <div className='car-pricing'>
      <div className='car-price-heading'>
        <h3>On Road Price</h3>
        <span> See Breakup </span>
      </div>

      

     </div>
    </div>
    </div>
  )
}
{/* <CarDropdown /> */}

export default CarVariants;
