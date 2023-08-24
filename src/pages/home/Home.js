






import React from 'react';

import logo from "../../../src/assets/images/Logo.png";
import "../../../src/pages/home/Home.css";
import activity from "../../assets/images/activity.png";
import affiliate from "../../assets/images/affiliate.png";
import coupon from "../../assets/images/coupon.png";
import createAcct from "../../assets/images/createAcct.png";
import daily from "../../assets/images/daily.png";
import task from "../../assets/images/task.png";
import welcome from "../../assets/images/welcome.png";
import firstVec from "../../assets/images/affiliatevec.png";
import secondVec from "../../assets/images/dailyvec.jpg";
import thirdVec from "../../assets/images/activitiesvec.png";
import fourthVec from "../../assets/images/welcomevec.png";
import abstractVid from "../../assets/videos/abstractVid.mp4";
import who from "../../assets/images/who.png";












export default function Home() {
  const myStyle = {
    marginTop: "100px",
  };


  return (
    <main>
      <div className="firstSection">
        <video autoPlay loop muted>
          <source src={abstractVid} type="video/mp4" />
        </video>

        <section className="sec">
          <div className="firstDiv">
            <img src={logo} alt="logo" />

            <h1>Earn as you Engage...</h1>
            <p>Invite Friends and Earn</p>
            <h2><a href="/SignUp" style={{
              color:'white', textDecoration:'none'
            }}>Get Started &#8594;</a></h2>
          </div>
        </section>
      </div>

      <div  className="secondSection">
      <div className="firstSvg"></div>

      <article>
        <h1>WHAT IS WEEYBA ?</h1>
        WEEYBA  is an innovation with amazing features created to equip its users with essential digital skills and provides financial opportunities to it's members.
        <br />        
        For a user to get signed up and enjoy the benefits on Weeyba, he/she needs to get a one time registration fee of N4,500.
      </article>
      <img src={who} alt="who" />
    </div>


      <div className="thirdSection">
        <h3>Ways To Earn.</h3>
        <div className="firstSvg"></div>
        <div className="secondSvg"></div>
        <div className="infoGrid">
          <div className="firstGrid">
          <div>
            <div className="firstDiv">
            <img src={affiliate} alt="affiliate" />
            <h4>Affiliate Earnings.</h4>
            </div>
            <article>
        
            Our affiliate program – a fantastic avenue to multiply your
            earnings. With our referral bonus, you can earn a remarkable 3500
            Naira for every direct referral. But the impact doesn't stop
            there. For every indirect first-generation referral, you earn 300
            Naira, and for indirect second-generation referrals, you earn 200
            Naira. By simply inviting your friends and network, you're not
            just growing your earnings – you're also growing our community and
            driving positive change.
          </article>
            </div>
              <div className="imgCon">
              
              <img src={firstVec} alt="firstVec" />
              </div>
       
          </div>

          <div className="secondGrid">
          <div>
          <div className="firstDiv">
            <img src={daily} alt="daily" />
            <h4>Daily Login Bonus</h4>
            </div>

            <article>
              At Weeyba, we believe in rewarding your dedication. That's why,
              with each daily login, you'll earn a fantastic amount of 300
              Naira. It's our way of recognizing your consistent engagement and
              appreciating your active participation on our platform. So, just
              by logging in daily, you're not only staying connected but also
              boosting your earnings. Combine this with our generous welcome
              bonus of 2000 Naira when you register with a nominal fee of 4500
              Naira, and you're on your way to an exciting journey of earning
              while making a positive impact. Join us today on Weeyba, and let
              your daily interactions lead to both personal growth and
              meaningful change!
            </article>
            </div>
            <div className="imgCon">
            <img src={secondVec} alt="firstVec" />
            
            </div>
          </div>

          <div className="thirdGrid">
            <div>
            <div className="firstDiv">
            <img src={welcome} alt="welcome" />
            <h4>Welcome Bonus.</h4></div>
            <article>
              when you register on the Weeyba website with a nominal fee of 4500
              Naira, you'll not only gain access to all the incredible
              opportunities our platform offers but also receive a generous
              welcome bonus of 2000 Naira! This bonus is our way of showing our
              appreciation for you joining our platform and becoming a part of
              our community. It's a great kickstart to your journey of earning
              rewards while making a positive impact through your online
              activities. So, by investing just 4500 Naira, you open the door to
              both the welcome bonus and a world of possibilities. Welcome to
              Weeyba, and let's embark on this exciting adventure together!
            </article>
            </div>
            <div className="imgCon">
             <img src={thirdVec} alt="firstVec" />
             </div>
          </div>

          <div className="fourthGrid">
          <div>
          <div className="firstDiv">
            <img src={activity} alt="activity" />
            <h4>Activities Earnings.</h4></div>
            <article>
              Sharing is caring – and at Weeyba, it's also rewarding! When you
              share our advert posts, you're not only spreading the word but
              also earning yourself a fantastic reward of 200 Naira. But that's
              not all – for every Weeyba post you share, you'll be adding a
              generous 300 Naira to your earnings. It's a win-win situation:
              you're amplifying our message while boosting your income. Your
              actions have a tangible impact, both for you and the causes we
              support. So, let's share, earn, and make a difference together on
              Weeyba – where every share counts, both in value and purpose.
            </article>
            </div>
            <div>
            <img src={fourthVec} alt="firstVec" /> </div>
          </div>
        </div>
      </div>

      <div className="fourthSection">
        <h1>How To Get Started ?</h1>
        <div className="helpGrid">
          <div className="firstGrid">
            <img src={coupon} alt="coupon" />
            <h4>Get a Coupon Code</h4>
            <article>
              To become a valued member of the Weeyba community, all it takes is
              a simple step. Secure your entry by obtaining a coupon code from
              our verified vendors. This code, priced at 4500 Naira, will
              provide you with access to the wealth of opportunities and rewards
              that await you on our platform. It's an investment in your journey
              to earn while contributing to positive change. So, take that step
              today, acquire your coupon code, and unlock the door to a world of
              possibilities on Weeyba. Join us in shaping a brighter future, one
              interaction at a time.
            </article>
          </div>

          <div className="secondGrid">
            <img src={createAcct} alt="createAcct" />
            <h4>Create Account</h4>
            <article>
              Once you've obtained your 4500 Naira coupon code from our verified
              vendors, you're ready to embark on your Weeyba journey. The next
              step is to create your account, and our signup page makes this
              process seamless. Provide your essential details, and in no time,
              you'll have access to a world of meaningful engagement and earning
              opportunities. Your account is your gateway to making a positive
              impact while earning rewards, so let's get started. Join us on
              Weeyba and let your online actions lead to real-world change and
              financial growth.
            </article>
          </div>

          <div className="thirdGrid">
            <img src={task} alt="task" />
            <h4>Perform Tasks</h4>
            <article>
              With your account set up, it's time to dive into the heart of
              Weeyba's transformative experience. As you begin engaging with
              various tasks and activities, you'll start earning rewards for
              every meaningful interaction. Whether it's sharing advert posts
              for 200 Naira or spreading the word about Weeyba for 300 Naira,
              each action you take contributes to your earnings and the
              collective impact we're making.
             
            </article>
          </div>
        </div>
      </div>
     
    </main>
  );
  
}
