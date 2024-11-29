import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="/logo.png" alt="Fanizm Logo" className="footer-logo" />
        <p className="tagline">Watch. Play. Win.</p>
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
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>Privacy Policies</p>
        <p>&copy; 2024 by Fanizm India Pvt. Ltd.</p>
        <p className="disclaimer">
          *This game may be habit-forming or financially risky. Play
          responsibly.
        </p>
      </div>
      <div className="footer-bonus">
        <p>
          Get upto <span>₹50 bonus</span> on sign up!!!
        </p>
        <button className="download-btn">DOWNLOAD NOW</button>
      </div>
    </footer>
  );
};

export default Footer;
