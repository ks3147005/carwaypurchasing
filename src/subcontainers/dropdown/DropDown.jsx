import React, { useState } from 'react';
import './dropdown.css';

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('Select Variants');

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
        <option value="Select Variants">Choose variants</option>
        <option value="Safari XE">Safari XE</option>
        <option value="Safari XM">Safari XM</option>
        <option value="Safari XMS">Safari XMS</option>
        <option value="Safari XT+">Safari XT+</option>
        <option value="Safari XZ">Safari XZ</option>
        <option value="Safari XZ + 6S">Safari XZ+ 6S</option>
        <option value="Safari XZ + 7S">Safari XZ+ 7S</option>
        <option value="Safari XZ + Dark">Safari XT+ Dark</option>
        <option value="Safari XZ + 6S Dark">Safari XZ+ 6S Dark</option>
        <option value="Safari XZ + 7S Dark">Safari XZ+ 7S Dark</option>
        <option value="Safari XZ+ 7S ADV">Safari XZ+ 7S ADV</option>
        <option value="Safari XZ+ 6S ADV">Safari XZ+ 6S ADV</option>
        <option value="Safari XMAS">Safari XMAS</option>
        <option value="Safari XTA+">Safari XTA+</option>
        <option value="Safari XZA">Safari XZA</option>
        <option value="Safari XZA+ 6S">Safari XZA+ 6S </option>
        <option value="Safari XZA+ 7S">Safari XZA+ 7S</option>
        <option value="Safari XTA+ Dark">Safari XTA+ Dark</option>
        <option value="Safari XZA+ 7S Dark">Safari XZA+ 7S Dark</option>

      </select>
      </div>
      </div>
    </div>
    </div>
  );
}

export default DropdownMenu;
