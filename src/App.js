import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from './Contact';
import About from './About';

import Vaccination from './Vaccination';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
          <Route path = "/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/vaccination" element={<Vaccination />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  )
}
