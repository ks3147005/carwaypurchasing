import React from 'react';

import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Brands from '../../components/Brands/Brands';
import Whyus from '../../components/whyus/Whyus';
import Featured from '../../components/featured/Featured';
import Gallery from '../../components/gallery/Gallery';
import Contact from '../../containers/contact/Contact';
import Deal from '../../components/deal/Deal';
import Footer from '../../containers/footer/Footer';


const Home = () => {
  return (
    <div>
     <Navbar />
     <Header />
     <Featured />
     <Deal />
     <Whyus />
     <Brands />
     <Gallery />
     <Contact />
     <Footer />
    
    </div>
  )
}

export default Home;
