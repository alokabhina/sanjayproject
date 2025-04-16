import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import basketIcon from '../assets/basket.png';
import searchIcon from '../assets/search_icon.png';
import './Navbar.css';
import { StoreContext } from '../Context/Contet';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    }

    return (
        <div className='navbar'>
            <p className="logo">Food Rush</p>
            <ul className="navbar-menu">
                <li>
                    <Link 
                        to="/" 
                        onClick={() => handleMenuClick("home")} 
                        className={menu === "home" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="#menu" 
                        onClick={() => handleMenuClick("Menu")} 
                        className={menu === "menu" ? "active" : ""}
                    >
                        Menu
                    </Link>
                </li>
                <li>
                    <Link 
                        to="#footer" 
                        onClick={() => handleMenuClick("contact")} 
                        className={menu === "contact" ? "active" : ""}
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div className="navbar-right">
                <img src={searchIcon} alt="Search" className='search' />
                <div className="navbar-search">
                    <Link to='/cart'>
                        <img src={basketIcon} alt="Basket" className='basket' />
                    </Link>
                    {getTotalCartAmount() > 0 && <div className="dot"></div>}
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
