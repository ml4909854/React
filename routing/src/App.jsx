import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nopage from './Nopage';

function App() {
  return (
    <BrowserRouter>
      <Layout /> {/* The Layout component contains the navigation links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='*' element={<Nopage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
