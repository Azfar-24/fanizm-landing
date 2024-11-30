import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section with Logo */}
      <div className="footer-top">
        <img
          src="/images/logo.png" // Ensure the path is correct, '/images/' makes it relative to the public folder
          alt="Fanizm Logo"
          className="footer-logo"
        />
      </div>

      {/* Footer Links Section */}
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

      {/* Top Separator Image outside of footer-social */}
      <img
        src="/images/Seprator@3x.png" // Path is relative to the public folder
        alt="Separator"
        className="footer-separator top-separator"
      />

      {/* Footer Social Links Section */}
      <div className="footer-social">
        <a href="#" className="social-icon">
          <img src="/images/Instagram@3x.png" alt="Instagram" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/Facebook@3x.png" alt="Facebook" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/X@3x.png" alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/Youtube@3x.png" alt="YouTube" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/Linkedin@3x.png" alt="LinkedIn" />
        </a>
      </div>

      {/* Bottom Separator Image outside of footer-social */}
      <img
        src="/images/Seprator@3x.png"
        alt="Separator"
        className="footer-separator bottom-separator"
      />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-links-row">
          <p>Terms & Conditions</p>
          <p>Privacy Policies</p>
        </div>
        <p>&copy; 2024 by Fanizm India Pvt. Ltd.</p>
        <div className="footer-disclaimer">
          <h2>Disclaimer</h2>
          <p className="disclaimer">
            *This game may be habit-forming or financially risky. Play
            responsibly.
          </p>
        </div>
      </div>

      <div className="footer-bonus">
        <div className="bonus-row">
          <img src="images/coins.png" alt="Bonus Icon" className="bonus-icon" />
          <p>
            Get up to <span>₹50 bonus</span> on sign-up!!!
          </p>
        </div>
        <button className="download-btn">DOWNLOAD NOW</button>
      </div>
    </footer>
  );
};

export default Footer;
