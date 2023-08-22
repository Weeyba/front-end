import React from 'react'



import "../../pages/about/about.css";
import meet from "../../assets/images/meet.jpg";

export default function About() {
  return (
        <div className="main">
  
    
        
      <div className="firstSection"  style={{marginTop: 100,
      height:'90vh'}}>
      <h1>About Us</h1>
      
    </div>
    <div className="secondSection">
    <div>
    <h1  style={{marginLeft: '4%',
    marginBottom:'10px',
    fontWeight:'bold',
    fontSize:'250%',
    color:'darkorange',
      }}>What is Weeyba</h1>
    <article>
    Welcome to Weeyba, the innovative online platform that not only
    rewards users for their web activities but also drives a profound
    impact on global poverty. At Weeyba, we're on a mission to reshape
    online engagement by turning every click, share, and interaction into
    a catalyst for positive change. 
    <br />Our vision is to empower individuals
    while simultaneously uplifting communities out of poverty through
    partnerships with NGOs and charitable organizations. By joining
    Weeyba, you become part of a movement that leverages digital actions
    for real-world transformation. 
    <br />Transparent and accountable, Weeyba
    allows you to track the tangible effects of your engagement, making
    sure that every virtual interaction contributes to concrete progress.
    Together, we're redefining online engagement to create a world where
    every click matters and poverty is no longer an insurmountable
    barrier. Join Weeyba today and be a driving force in the journey to
    elevate lives through the power of the internet.
  </article></div>
  <div>
  <img src={meet} alt="meet" />
  </div>
    </div>
    <div className="thirdSection">
        <article>
        
                      <h1  style={{ width:'100%',
                      textAlign:'center',
                      marginBottom:'10px',
                      fontWeight:'bold',
                      fontSize:'250%',
                      color:'darkorange',
                        }}>How It Works???</h1>

              <h3>EARN WITH WELCOME BONUS:</h3>
              <p>
              Immediately after registration, each user gets a N2000 welcome bonus cashback on his/her dashboard instantly</p>

              

              <h3>EARN WITHOUT REFFERALS:</h3>

              <p>Performing your daily task unlocks the following daily earnings. Daily login bonus 300 point,  Daily Advert engagement Bonus 200 point,  and Weeyba post 300 point. </p>

              

              <h3>EARN WITH AFFILIATES:</h3>
            <p>You get  a whoppingsum of  N3500 per friend/user  you inivite to Weeyba with your refferal link after a succesful registration.  when your dowline refers you earn N300 per person and also when your downlines downline refer, you earn N200 per person.</p>


              

              <h3>EARN WITH LUCKY WHEEL:</h3>

              <p>You can spin and win amazing prices with Weeyba lucky wheel daily.</p>

              

              <h3>EARN WITH QUIZ FEATURE:</h3>

              <p>You get to win a price for every question answered correctly on the website. You earn as you learn</p>

              

             <h3> EARN WITH E-COMMERCE:</h3>

              <p>Users can upload thier products on Weeyba and get buyers easily</p>

              

              <h3>EARN WITH INCENTIVES:</h3>

              <p>This means you get compensated with Lots of Amazing Prizes Ranging from Cash, Laptops(MacBook,Hp) iPhones,Samsungs,Sound Bars,Air condition,Pressing Iron,TV and so on due to your participation/contributions in the massive growth of the platform</p>

              

              <h3>Do i get paid without referrals?</h3>
              <p>
              YES, Weeyba pays all activity earner monthly from highest to lowest till revenue gets exhausted. </p>

              

              <h3>Weeyba's Withdrawal Method:</h3>
              <p>
              Our withrawal Days and minimum are as follows
            <br />
              Affiliate Earners minimum withrawal is N9,000 and withrawal portal opens on Monday, and Friday every week by 5pm to 6pm, we pay you within 12-24 hours of payment request
              <br />
              Non affiliate earners are paid every month  (Auto withdrawal. I.e once you have up to the minimum non-affiliate earnings your withdrawal will be processed automatically) minimum = 6,000 weeyba</p>
        </article>
    </div>
    </div>


  )
}
