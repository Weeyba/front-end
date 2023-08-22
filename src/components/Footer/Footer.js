import React from 'react'
import '../../components/Footer/footer.css'


import logo from "../../../src/assets/images/Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footGrid">
        <div className="firstGrid">
        <img src={logo} alt="logo" />
        <h4>Earn as You Engage...</h4>
        </div>
        <div className="secondGrid">
          <h2>Links</h2>
        
        
          <a href="./about">About Us</a>
          <a href="./terms">Terms Of Use</a>
          <a href="./privacy-policy">Privacy & Policy</a>
        
        </div>
        <div className="thirdGrid">
      <h2>Contact Us:</h2>
        <a href="https://wa.me/message/CKAN5VOTKC76I1"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="contact@weeyba.com"><i class="fa-regular fa-envelope"></i></a>
        <a href="https://instagram.com/weeyba_official?igshid=NjIwNzIyMDk2Mg=="><i class="fa-brands fa-instagram"></i></a>
       <a href="https://www.tiktok.com/@weeyba_official?_t=8f3TkzmUyJC&_r=1"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://t.me/weeyba_official"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
      <hr />
      <p>All Rights Reserved <span>Weeyba</span> &copy;2023</p>

    
    </div>
  )
}
