import React from 'react';
import NavBar from './NavBar';
import Link from '../image/cover page.png';
import Gallery from './Gallery';

function Header() {
  return (
    <>
    <div id='header'> 
        <h1>Wecome to Rummy Circle</h1>
        <img  className='responsive' src={Link}></img>
        </div> 
        <a href="https://g.k9.game/?invite_code=0004a266"  style={{height:"50px", width:"100px", marginLeft:"500px",marginTop:"20px"}} className='btn btn-danger'>Download</a>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div class="icons">
       
        <a href="https://t.me/+sHPQ06NufJ84MjJl" class="twitter" style={{color:"#fff;"}}><span class="fa fa-twitter twi" style={{color:"#53c5ff"}}></span>Twitter</a>
        <a href="https://www.facebook.com/solankimahesh.solanki.77?rdid=JGQ2BEA8uTjqC7GM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12FTtFV5ZLh%2F#" class="facebook" style={{color:"#fff"}}><span class="fa fa-facebook face" style={{color:"#2c80d3"}}></span>Facebook </a>
   
        </div>
        </>  
  )
}

export default  Header;