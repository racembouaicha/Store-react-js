import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="containerGrid">
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/contact"  element={<Contact/>} />
    
    </Routes>
  
    <Footer />
    </div>
  </Router> 
  );
}

export default App;
