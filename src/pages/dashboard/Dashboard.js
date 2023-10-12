import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DashboardContainer } from "./dashboard.styled";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  const baseUrl = window.location.origin;
  const [value, setValue] = useState(`${baseUrl}/signup/?Daniel`);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast.success("Copied to clipboard")
  };

  const quickLinks = [
    {
      id: 1,
      name: "Withdraw",
      url: "#",
      icon: <i className="fa fa-money" aria-hidden="true"></i>,
    },
    {
      id: 2,
      name: "Posts",
      url: "#",
      icon: <i className="fa fa-newspaper-o" aria-hidden="true"></i>,
    },
    {
      id: 3,
      name: "Transcations",
      url: "#",
      icon: <i className="fa fa-list" aria-hidden="true"></i>,
    },
    {
      id: 4,
      name: "Settings",
      url: "#",
      icon: <i className="fa fa-money" aria-hidden="true"></i>,
    },
  ];

  useEffect(() => {
    const getTimeOfDay = () => {
      const currentHour = new Date().getHours();
      let greeting = "";

      if (currentHour >= 5 && currentHour < 12) {
        greeting = "morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "afternoon";
      } else {
        greeting = "evening";
      }

      setGreeting(`Good ${greeting}`);
    };

    getTimeOfDay(); // Call the function initially

    // Set up an interval to update the greeting every minute
    const intervalId = setInterval(getTimeOfDay, 60000);

    // Clear the interval on unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);
  return (
    <DashboardContainer>
      <div className="userMessageContainer">
        <div className="welcomeMessage">
          <h2 className="userGreeting">Hi, Daniel</h2>
          <h3 className="greetingMessage">{greeting}</h3>
        </div>
        <div className="profilePhoto">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </div>

      <div className="userWalletContainer">
        <div className="affiliateBalance">
          <i className="fa fa-users" aria-hidden="true"></i>
          <div className="affiliateGroup">
            <h3 className="affiliateTitle">My affiliate balance</h3>
            <h2 className="affiliateValue">₦ 0.00</h2>
          </div>
        </div>

        <div className="activityBalance">
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
          <div className="activityGroup">
            <h3 className="activityTitle">My activity balance</h3>
            <h2 className="activityValue">₦ 0.00</h2>
          </div>
        </div>
      </div>

      <div className="quickLinks">
        <h2 className="quickLinksTitle">Quick Links</h2>
        <div className="quickLinksContainer">
          {quickLinks.map((quickLink) => (
            <a href={quickLink.url} key={quickLink.id} className="quickLink">
              <div className="iconContainer">{quickLink.icon}</div>
              <p className="quickLinkName">{quickLink.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="referralLink">
        <h2 className="referralLinkTitle">
          Share your referral link with friends
        </h2>
        <div className="referralContainer">
          <div className="referralBox">{value}</div>
          <CopyToClipboard text={value} onCopy={handleCopy}>
            <button className="copyButton">
              <i className="fa fa-clipboard" aria-hidden="true"></i>
            </button>

          </CopyToClipboard>
        </div>
      </div>
    </DashboardContainer>
  );
}
