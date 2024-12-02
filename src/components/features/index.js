import React from "react";
import {
  FaMoneyBillWave,
  FaHeadset,
  FaStar,
  FaRupeeSign,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-container">
      {/* Header Section */}
      <div className="features-header">
        <div className="group-start">
          <img src="images/group-start.png" alt="star" />
        </div>
        <div className="feature-heading-wrap">
          <div className="star">
            <img src="images/start.png" alt="star" />
          </div>
          <h1>
            India’s <span className="highlight">No.1</span> Quizzing App
          </h1>
          <div className="star">
            <img src="images/start.png" alt="star" />
          </div>
        </div>
        <div className="features-stats">
          <div className="features-item">
            <p>5 Million+</p>
            <p>Fans</p>
          </div>
          <div className="features-item">
            <p>
              4.4{" "}
              <span className="star-white">
                <img src="images/white-star.png" alt="star" />
              </span>{" "}
            </p>
            <p>Rated App</p>
          </div>

          <div className="features-item">
            <p>100+</p>
            <p>Movie Quizzes</p>
          </div>
        </div>
        <div className="widthral-title">
          <span>Fast withdrawls with</span>
        </div>
        <div className="payment-icons">
          <img src="images/gpay.png" alt="GPay" />
          <img src="images/razorpay.png" alt="Razorpay" />
          <img src="images/phonepe.png" alt="PhonePe" />
          <img src="images/upi.png" alt="UPI" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>
          <i>Quizzing</i> is fun with <span>FANIZM</span>
        </h2>
        {/* <p className="features-subtitle">
          SEAMLESS PAYOUT | 24/7 SUPPORT | CELEBRITY MEETUP | CASH REWARDS
        </p> */}
        <div className="features-grid">
          <div className="feature-item">
            <img src="images/d.png" alt="" />
            <p>
              Seamless <br />
              Payout
            </p>
          </div>
          <div className="feature-item">
            <img src="images/c.png" alt="" />
            <p>
              24/7 <br />
              Support
            </p>
          </div>
          <div className="feature-item">
            <img src="images/a.png" alt="" />
            <p>
              Celebrity <br />
              Meetup
            </p>
          </div>
          <div className="feature-item">
            <img src="images/b.png" alt="" />
            <p>
              Cash <br />
              Rewards
            </p>
          </div>
        </div>
        <a href="#">& MUCH MORE...</a>
      </div>

      {/* Languages Section */}
      <div className="languages-section">
        <h2>
          Your <i>Language</i>, Our <i>Quizzes</i>
        </h2>
        <p>
          <i>FANIZM</i> supports 6+ Indian languages
        </p>
        {/* <div className="languages-list">
          {[
            "తెలుగు",
            "বাংলা",
            "മലയാളം",
            "தமிழ்",
            "हिन्दी",
            "ಕನ್ನಡ",
            "English",
          ].map((lang, index) => (
            <button key={index} className="language-button">
              {lang}
            </button>
          ))}
        </div> */}
        <img src="images/lang.png" alt="" />
      </div>
    </div>
  );
};

export default Features;
