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
            GET STARTED TODAY!!!
          </h1>
       
        </div>

        <div className="phone-mockup">
          <img src="images/hero-img.png" alt="App Preview" />
          {/* <div className="quiz-box">
            <p>“Pushpa flower nahi… Pushpa _____ hai!”</p>
            <div className="options">
              <button className="option">FIRE!</button>
              <button className="option">WILDFIRE!!!</button>
            </div>
          </div> */}
        </div>

        <div className="cta-section">
          <div className="cta-top-text">
            <img src="images/coins.png" alt="coins"/>
          <p>
            Get upto <span className="highlight"><sup>₹</sup>50 bonus</span> on sign up!!!
          </p>
          </div>
          <button className="download-btn">DOWNLOAD NOW</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
