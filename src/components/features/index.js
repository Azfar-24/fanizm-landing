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
<img src="images/group-start.png" alt="star"/>
        </div>
        <div className="feature-heading-wrap">
        <div className="star">
<img src="images/start.png" alt="star"/>
        </div>
        <h1>
           India’s <span className="highlight">No.1</span> Quizzing App
        </h1>
        <div className="star">
<img src="images/start.png" alt="star"/>
        </div>
        </div>
        <div className="features-stats">
<div className="features-item">
<p>5 Million+</p>
<p>Fans</p>  
</div>
<div className="features-item">
<p>54.4 <span className="star-white">
<img src="images/white-star.png" alt="star"/>
        </span> </p>
<p>Rated App</p>  
</div>

<div className="features-item">
<p>100+</p>
<p>Movie Quizzes</p>  
</div>

        
        </div>
        <div className="widthral-title"><span>Fast withdrawls with</span></div>
        <div className="payment-icons">
          <img src="images/gpay.png" alt="GPay" />
          <img src="images/razorpay.png" alt="Razorpay" />
          <img src="images/phonepe.png" alt="PhonePe" />
          <img src="images/upi.png" alt="UPI" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Quizzing is fun with FANIZM</h2>
        <p className="features-subtitle">
          SEAMLESS PAYOUT | 24/7 SUPPORT | CELEBRITY MEETUP | CASH REWARDS
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <FaMoneyBillWave className="feature-icon" />
            <p>Seamless Payout</p>
          </div>
          <div className="feature-item">
            <FaHeadset className="feature-icon" />
            <p>24/7 Support</p>
          </div>
          <div className="feature-item">
            <FaStar className="feature-icon" />
            <p>Celebrity Meetup</p>
          </div>
          <div className="feature-item">
            <FaRupeeSign className="feature-icon" />
            <p>Cash Rewards</p>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="languages-section">
        <h2>Your Language, Our Quizzes</h2>
        <p>FANIZM supports 6+ Indian languages</p>
        <div className="languages-list">
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
        </div>
      </div>
    </div>
  );
};

export default Features;
