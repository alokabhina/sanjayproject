import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact FoodCoders</h1>
        <p className="tagline">"Coding Delicious Solutions, One Byte at a Time"</p>
        <p>
          Welcome to <strong>Food Rush</strong> — your trusted food delivery partner! We bring your favorite meals straight to your door, fast and fresh. 
          Whether you're craving local cuisine or global flavors, we've got you covered.
        </p>
        <p>
          This project is proudly developed by <strong>Team FoodCoders</strong> — students of <strong>Digvijai Nath P.G. College</strong>, combining our passion for technology and food to create seamless digital experiences.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h2>Send Us a Message</h2>
            <div className="form-group">
              <label>
                Your Name:
                <input type="text" placeholder="Enter your name" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Your Email:
                <input type="email" placeholder="Enter your email" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Subject:
                <input type="text" placeholder="What's this about?" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Message:
                <textarea rows="5" placeholder="Your message..." required></textarea>
              </label>
            </div>
            <button type="submit" className="submit-btn">📩 Send Message</button>
          </form>
        </div>

        <div className="team-info">
          <div className="team-card">
            <h3>👨‍💻 Meet the FoodCoders</h3>
            <p className="team-description">The tech-savvy team behind your delicious food experience!</p>
            
            <ul className="team-members">
              <li>
                <strong>Sanjay Gupta</strong>
                <span className="roll-number">Roll No: 23150772600275</span>
              </li>
              <li>
                <strong>Akash Kumar</strong>
                <span className="roll-number">Roll No: 2315077260274</span>
              </li>
              <li>
                <strong>Vijay Kumar</strong>
                <span className="roll-number">Roll No: 2315077260170</span>
              </li>
            </ul>
            
            <div className="college-info">
              <p className="college-name">Digvijai Nath P.G. College</p>
              <p className="location">Gorakhpur, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;