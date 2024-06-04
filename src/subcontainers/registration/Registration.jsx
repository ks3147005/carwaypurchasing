import React, { useState } from 'react';

function CarColors() {
  const [selectedOption, setSelectedOption] = useState('Select Registration State');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    
    <div className='dropdown-variants-container'>
    <div className='variant-dropdown'>
      <h1>{selectedOption}</h1>
      <div className="variants-container">
      <div className='variant-options'>
      <select onChange={handleOptionChange} value={selectedOption}>
        <option value="Registration State"> Registration State</option>
        <option value="Delhi">Delhi</option>
        <option value="UttarPradesh">UttarPradesh</option>
        <option value="Haryana">Haryana</option>
      </select>
      </div>
      </div>
    </div>
    </div>
  );
}

export default CarColors;