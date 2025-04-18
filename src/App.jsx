import React, { useState } from 'react'; // Import useState
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/HOME/Home';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Order/Order';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Contact from './Components/ContactUs/Contact'; 


function App() { 
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      
      <Navbar setShowLogin={setShowLogin} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
