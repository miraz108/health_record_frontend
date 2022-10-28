import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import FindDoctor from './pages/FindDoctor';
import FindMedicine from './pages/FindMedicine';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/finddoctor" element={<FindDoctor />} />
        <Route exact path="/findmedicine" element={<FindMedicine />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
