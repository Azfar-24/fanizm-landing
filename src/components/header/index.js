import React from "react";


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="images/logo.png" alt="FANIZM" />
         
        </div>

        <div className="tagline">
          <h1>
            UNLOCK MASSIVE <span className="highlight">CASH REWARDS</span>
          </h1>
          <p>GET STARTED TODAY!!!</p>
        </div>

        <div className="phone-mockup">
          <img src="/assets/mockup.png" alt="App Preview" />
          <div className="quiz-box">
            <p>“Pushpa flower nahi… Pushpa _____ hai!”</p>
            <div className="options">
              <button className="option">FIRE!</button>
              <button className="option">WILDFIRE!!!</button>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <p>
            <span className="highlight">Get upto ₹50 bonus</span> on sign up!!!
          </p>
          <button className="download-btn">DOWNLOAD NOW</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
