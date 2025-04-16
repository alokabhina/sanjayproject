import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">

        <div className='footer-content-left'>
          <p className="logo">Food Rush</p>
          <p>&copy; 2025 YourCompanyName. Made with ❤️ and a whole lot of coffee.</p>
          <p>Follow us on:</p>

          <div className="footer-social-icons">
            <a href="#" className="social-link">
              <img src="src/assets/facebook_icon.png" alt="Facebook" />
              Facebook
            </a>
            <a href="#" className="social-link">
              <img src="src/assets/twitter_icon.png" alt="Twitter" />
              Twitter
            </a>
            <a href="#" className="social-link">
              <img src="src/assets/linkedin_icon.png" alt="LinkedIn" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 74579 56366</li>
            <li>foodrush@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright 2024 @ Food Rush.com
      </p>
    </div>
  );
};

export default Footer;
