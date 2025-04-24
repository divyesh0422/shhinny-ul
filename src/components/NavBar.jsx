import React from 'react';
import {Link} from 'react-scroll'
import  './navbar.css';
import { FaFacebookSquare,FaInstagramSquare,FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import Logo from '../image/Png(logo).png';

function NavBar() {
  
      const [showMediaIcons, setShowMediaIcons]=useState(false);
    return (
    
    <div>
         <nav className='main-nav'>
            {/*1st menu part*/}
            <div className='logo'>
                <img src={Logo} />
            </div>
        {/*2nd menu part*/}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li>
                    <Link to="header">Home</Link>
                    </li>
           
                    <li>
                    <Link to="gallery" smooth={true} duration={1000}>All Rummy Apps</Link>
                    </li>
                    <li>
                    <Link to="about" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} duration={1000}> Contact</Link>
                    </li>
           
                    <li>
                    <Link to="disclaimer" smooth={true} duration={1000}>Disclaimer</Link>
                    </li>
           
            </ul>
        </div>
        { /* 3rd social media links*/}
        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <a href=''><FaFacebookSquare className='facebook'/></a>
                </li>
                <li>
                    <a href=''><FaInstagramSquare className='instagram'/></a>
                </li>

                <li>
                    <a href=''><FaTwitter className='twitter'/></a>
                </li>

            </ul>
            { /* Hamburgun-menu*/}
            <div className='hamburger-menu'>
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
            </div>
        </div>
        </nav>
        
    </div>
  )
}

export default NavBar;