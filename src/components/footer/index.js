import React, { useEffect, useState } from "react";

const Footer = () => {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(document.getElementById("myDiv")?.clientHeight);
  }, [height]);
  return (
    <footer className="footer">
      {/* Footer Top Section with Logo */}
      <div className="footer-top">
        <img src="images/logo.png" alt="Fanizm Logo" className="footer-logo" />
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <a href="https://fanizm.com/about-us" className="contact-link">
              <li>About us</li>
            </a>
            {/* <a href="https://fanizm.com/about-us" className="contact-link">
              <li>Culture</li>
            </a> */}
          </ul>
        </div>
        {/* <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Help Centre</li>
            <li>Contact Support</li>
            <li>What's New</li>
          </ul>
        </div> */}
        {/* <div className="footer-column">
          <h4>Careers</h4>
          <ul>
            <li>Open Roles</li>
          </ul>
        </div> */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="mailto:support@fanizm.com" className="contact-link">
                support@fanizm.com
              </a>
            </li>
            <li>
              <a
                href="https://bit.ly/Fanizm_Support"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Chat with us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/fanizm.official"
          className="social-icon"
        >
          <img src="images/ins.png" alt="instagram" />
        </a>
        <a
          href="https://www.facebook.com/share/8CL57ZXti9sVdpEN"
          className="social-icon"
        >
          <img src="images/fb.png" alt="instagram" />
        </a>
        <a href="https://x.com/fanizm_official" className="social-icon">
          <img src="images/twitt.png" alt="instagram" />
        </a>
        <a
          href="https://youtube.com/@fanizm.india_official"
          className="social-icon"
        >
          <img src="images/you.png" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/fanizm-india/"
          className="social-icon"
        >
          <img src="images/link.png" alt="instagram" />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <a href="https://fanizm.com/terms-condition" className="footer-link">
          <p>Terms & Conditions</p>
        </a>
        <a href="https://fanizm.com/privacy-policy" className="footer-link">
          <p>Privacy Policy</p>
        </a>
      </div>
      <p className="para">&copy; 2024 by Fanizm India Pvt. Ltd.</p>
      <div className="dis-wrap" style={{ marginBottom: height }}>
        <h2>Disclaimer</h2>
        <p className="disclaimer">
          *This game may be habit-forming or financially risky. Play
          responsibly.
        </p>
      </div>
      <div className="footer-bonus" id="myDiv">
        <div className="cta-section">
          <div className="cta-top-text">
            <img src="images/coins.png" alt="coins" />
            <p>
              Get upto <span className="highlight">₹ 50 bonus</span> on signing
              up!
            </p>
          </div>
          <button
            className="download-btn"
            onClick={() => {
              window.location.href = "https://onelink.to/nc9gz7";
            }}
          >
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
