import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="images/logo.png" alt="Fanizm Logo" className="footer-logo" />
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Culture</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Help Centre</li>
            <li>Contact Support</li>
            <li>What's New</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Careers</h4>
          <ul>
            <li>Open Roles</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>support@fanizm.com</li>
            <li>Chat with us</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="social-icon">
         <img src="images/ins.png" alt="instagram"/>
        </a>
        <a href="#" className="social-icon">
        <img src="images/fb.png" alt="instagram"/>
        </a>
        <a href="#" className="social-icon">
        <img src="images/twitt.png" alt="instagram"/>
        </a>
        <a href="#" className="social-icon">
        <img src="images/you.png" alt="instagram"/>
        </a>
        <a href="#" className="social-icon">
        <img src="images/link.png" alt="instagram"/>
        </a>
      </div>
      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>Privacy Policies</p>
       
       
      </div>
      <p className="para">&copy; 2024 by Fanizm India Pvt. Ltd.</p>
      <div className="dis-wrap"><h2>Disclaimer</h2>
      <p className="disclaimer">
          *This game may be habit-forming or financially risky. Play
          responsibly.
        </p>
        </div>
      <div className="footer-bonus">
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
    </footer>
  );
};

export default Footer;
