import React from 'react'




import '../../pages/contact/contact.css'

export default function ContactUs() {
  return (
    <div className="contact" style={{marginTop: 100}}>



    <div>
    <h1>Contact Us:</h1>
    </div>



    <div className="con">

        <div><p>
        If you have questions or need any general information, please reach out to us through one of our social channels</p>
        
        </div>
        <hr />
        
        
        
        <div className="firstCon">
        <h2>For Enquiries:</h2>
          <a className="link" href="https://wa.me/message/CKAN5VOTKC76I1"><i class="fa-brands fa-whatsapp"></i></a>
          <a className="link" href="mailto:contact@weeyba.com"><i class="fa-regular fa-envelope"></i></a>
          <a className="link" href="https://instagram.com/weeyba_official?igshid=NjIwNzIyMDk2Mg=="><i class="fa-brands fa-instagram"></i></a>
         <a className="link" href="https://www.tiktok.com/@weeyba_official?_t=8f3TkzmUyJC&_r=1"><i class="fa-brands fa-tiktok"></i></a>
          <a className="link" href="https://t.me/weeyba_official"><i class="fa-brands fa-telegram"></i></a>
          </div>
        
    </div>
    </div>
  )
}
