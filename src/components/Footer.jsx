import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare,FaInstagramSquare,FaTwitter } from "react-icons/fa";
import '../components/Footer.css';

function  Footer() {
  return (
    
    <footer class="footer">
    <div class="social-icons">
      <a href="#"><FaFacebookSquare className='facebook'/></a>
      <a href="#"><FaInstagramSquare className='instagram'/></a>
      <a href="#"><FaTwitter className='twitter'/></a>
    </div>

    <div class="footer-links">
      <a href="#"><span>👤</span> About Us</a>
      <a href="#"><span>📞</span> Contact Us</a>
      <a href="#"><span>🔒</span> Privacy Policy</a>
      <a href="#"><span>📄</span> Terms & Conditions</a>
      <a href="#"><span>⚠️</span> Disclaimer</a>
    </div>

    <p>Copyright © <strong>RummyBonusApp.Com</strong> All Rights Reserved</p>
  </footer>

)
}

export default Footer;