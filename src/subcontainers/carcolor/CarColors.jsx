import React, { useState } from 'react';

function CarColors() {
  const [selectedOption, setSelectedOption] = useState('Select Colors');

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
        <option value="Select Colors">Choose Colors</option>
        <option value="Orcus WHite">Orcus WHite</option>
        <option value="Tropical Mist">Tropical Mist</option>
        <option value="Royale Blue">Royale Blue</option>
        <option value="Daytona Gray">Daytona Gray</option>
      </select>
      </div>
      </div>
    </div>
    </div>
  );
}

export default CarColors;
