import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../image/Png(logo).png';
import './navbar.css';

function NavBar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setShowMediaIcons(false);
  };

  return (
    <nav className='main-nav'>
      {/* 1st menu part - Logo */}
      <div className='logo'>
        <img src={Logo} alt="Website Logo" />
      </div>

      {/* 2nd menu part - Navigation Links */}
      <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
          <li>
            <Link 
              to="header" 
              smooth={true} 
              duration={1000} 
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="gallery" 
              smooth={true} 
              duration={1000}
              onClick={handleLinkClick}
            >
              All Rummy Apps
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={1000}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={1000}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="disclaimer" 
              smooth={true} 
              duration={1000}
              onClick={handleLinkClick}
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>

      {/* 3rd menu part - Social Media Links */}
      <div className='social-media'>
        <ul className='social-media-desktop'>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className='facebook' />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className='instagram' />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='twitter' />
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className='hamburger-menu'>
          <button 
            onClick={() => setShowMediaIcons(!showMediaIcons)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;