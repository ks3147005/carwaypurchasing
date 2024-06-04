import React from 'react';
import './App.css';
import Home from './pages/home/Home';
// import CarDeals from './pages/cardeals/CarDeals';
// import BuyCars from './pages/buycar/BuyCars';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <><BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Cardeals' element={<CarDeals />} /> */}
          {/* <Route path='/Buycars' element={<BuyCars />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
