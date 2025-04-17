import React, { useState } from 'react';
import './header.css';

const Header = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // If you're using a callback prop to communicate with parent component
    if (onMenuToggle) {
      onMenuToggle(!isMenuOpen);
    }
  };

  return (
    <div className='header'>
      <div className="header-compo">
        <h2>Order Your Favourites here!</h2>
        <p>Order your favorite foods from the comfort of your home with just a few clicks! From cheesy pizzas to spicy biryanis, we deliver fresh, delicious meals straight to your doorstep. Fast, easy, and convenient—satisfy your cravings today!</p>
        <button onClick={toggleMenu}>
          {isMenuOpen ? 'Close Menu' : 'View Menu'}
        </button>
      </div>
      
      {/* Menu that appears when button is clicked */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h3>Our Delicious Menu</h3>
            <ul>
              <li>🍕 Pizzas</li>
              <li>🍔 Burgers</li>
              <li>🍣 Sushi</li>
              <li>🍛 Biryani</li>
              <li>🥗 Salads</li>
              <li>🍰 Desserts</li>
            </ul>
            <button className="close-menu" onClick={toggleMenu}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;