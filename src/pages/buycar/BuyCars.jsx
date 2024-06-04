import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import CarVariants from '../../subcontainers/variants/CarVariants';
import DropdownMenu from '../../subcontainers/dropdown/DropDown';

const BuyCars = () => {
  return (
    <div>
      <Navbar />
      <CarVariants />
      <DropdownMenu />
    </div>
  )
}

export default BuyCars;
