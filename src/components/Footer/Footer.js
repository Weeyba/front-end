import React from 'react'
import '../../components/Footer/footer.css'


import logo from "../../../src/assets/images/Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footGrid">
        <div className="firstGrid">
        <img src={logo} alt="logo" />
        <h3>Earn as You Engage...</h3>
        </div>
        <div className="secondGrid">
          <h2>Links</h2>
        
        
          <a href="./about">About Us</a>
          <a href="./terms">Terms Of Use</a>
          <a href="./privacy-policy">Privacy & Policy</a>
        
        </div>
        <div className="thirdGrid">
        <h2>Contact Us:</h2>
        
        </div>
      </div>
      <hr />
      <p>All Rights Reserved <span>Weeyba</span> &copy;2023</p>

    
    </div>
  )
}
