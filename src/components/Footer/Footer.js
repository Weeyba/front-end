import React from 'react'
import '../../components/Footer/footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footGrid">
        <div className="firstGrid">
        <h2>Weeyba</h2>
        <article>
        At Weeyba, your financial well-being is at the forefront of our mission. We understand the challenges life can present, and that's why we're dedicated to being more than just a platform – we're a support system. Our commitment to your financial growth goes beyond earning rewards; it extends to lifting you during tough times. Weeyba stands as a pillar of assistance, offering pathways to overcome financial hurdles. Through our engaging activities, earning opportunities, and community support, we aim to provide you with the tools you need to face financial challenges with confidence. Join us in this journey of empowerment, where together, we navigate the path towards a brighter, more secure future. Your success is our success, and at Weeyba, we're here to elevate you through every step of your financial journey.
        </article>
        </div>
        <div className="secondGrid">
          <h2>Links</h2>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>SignUp</li>
          </ul>
        </div>
        <div className="thirdGrid">
        <h2>For Enquiries:</h2>
        <p>Weeyba@gmail.com</p>
        <p>+234*********</p>
        </div>
      </div>
      <hr />
      <p>All Rights Reserved <span>Weeyba</span> &copy;2023</p>

    
    </div>
  )
}
