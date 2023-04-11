import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import Contact from './pages/Contact';
import ReservationsView from './pages/ReservationsList';

function App() {
  
 
  return (
    <div className="App">
      
    
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<ReservationsView />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
