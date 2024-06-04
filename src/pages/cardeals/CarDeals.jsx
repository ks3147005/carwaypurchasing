import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import TataDeals from '../../containers/tatadeals/TataDeals'
import SkodaDeals from '../../containers/skodadeals/SkodaDeals'
import Footer from '../../containers/footer/Footer';


const CarDeals = () => {
  return (
    <div>
      <Navbar />
      <Header type = "list"/>
      <TataDeals />
      <SkodaDeals />
     <Footer />
    </div>
  )
}

export default CarDeals
