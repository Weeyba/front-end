import React from 'react'
import '../../../src/pages/home/Home.css'
import man from '../../../src/assets/images/man.png'
import orb from '../../../src/assets/images/orb.png'
import logo from '../../../src/assets/images/Logo.png'
import affiliate from '../../assets/images/affiliate.png'
import activity from '../../assets/images/activity.png'
import daily from '../../assets/images/daily.png'
import welcome from '../../assets/images/welcome.png'
import who from '../../assets/images/who.png'
import abstractVid from '../../assets/videos/abstractVid.mp4'
import coupon from '../../assets/images/coupon.png'
import createAcct from '../../assets/images/createAcct.png'
import task from '../../assets/images/task.png'






export default function Home() {

 const myStyle = {
  marginTop: '100px'

};
  return ( 
   <main>

    <div className="firstSection">
    <video autoPlay loop muted>
    
    <source src={abstractVid} type="video/mp4" />
    
    </video>
    <div className="firstSvg"></div>
    <div className="secondSvg"></div>
   
    <section className="sec">
   
      <div className="firstDiv">
      <img src={logo} alt="logo" />
       
        <h1>Earn as you <br /> Engage...</h1> 
        <p>Invite Friends and Earn</p>
        <h2>Get Started</h2>
    
          
          
      </div>

      <div className="secondDiv">
       <img src={man} alt="man" />
       <img src={orb} alt="orb" />
       <img src={orb} alt="orb" />
      </div>
      </section>

    </div>
    <div className="secondSection">
    <div className="firstSvg"></div>
    
    <article>
    <h1>Who Are WE ?</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis uamet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.m ipsum dolor sit amet, consectetur adipiscing elit. Sed quis uamet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
        ibulum non.m ipsum dolor sit amet, consectetur adipiscing elit. Sed quis uamet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
    
    </article>
    <img src={who} alt="who" />
    </div>

    <div className="thirdSection">
         <h3>Ways To earn.</h3>
         <div className="firstSvg"></div>
         <div className="secondSvg"></div>
    <div className="infoGrid">

            <div className="firstGrid">
             <img src={affiliate} alt="affiliate" />
                  <h4>Affiliate Earnings.</h4> 

              <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
              </article>
            </div>

            <div className="secondGrid">
            <img src={daily} alt="daily" />
                  <h4>Daily Login Bonus</h4> 
                   <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
              </article>
            </div>

            <div className="thirdGrid">
            <img src={welcome} alt="welcome" />
                  <h4>Welcome Bonus.</h4> 
                   <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
              </article>
            </div>

           <div className="fourthGrid">
           <img src={activity} alt="activity" />
              <h4>Activities Earnings.</h4> 
               <article>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
              </article>
           </div>    
    </div>
    </div>

    <div className="fourthSection">
 
        <h1>How to Get Started ?</h1>
        <div className="helpGrid">

        <div className="firstGrid">
         <img src={coupon} alt="coupon" />
          <h4>Get a Coupon Code</h4>
          <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
         </article>
        </div>



         <div className="secondGrid">
          <img src={createAcct} alt="createAcct" />
          <h4>Create Account</h4>
          <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
         </article>
        </div>



        <div className="thirdGrid">
         <img src={task} alt="task" />
        <h4>Perform Tasks</h4>
        <article>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper quam. Aliquam erat volutpat. Sed luctus metus sed felis tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse hendrerit lacinia orci, sit amet dictum odio dignissim a. Nullam euismod erat ex, non sollicitudin tellus vestibulum non.
       </article>
      </div>
         










        </div>
      
    </div>
   
   
   </main>
  )
}
