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
        <h1>
          ⭐ India’s <span className="highlight">No.1</span> Quizzing App ⭐
        </h1>
        <p className="features-stats">
          5 Million+ Fans | 4.4 ⭐ Rated App | 100+ Movie Quizzes
        </p>
        <div className="payment-icons">
          <img src="/assets/gpay.png" alt="GPay" />
          <img src="/assets/razorpay.png" alt="Razorpay" />
          <img src="/assets/phonepe.png" alt="PhonePe" />
          <img src="/assets/upi.png" alt="UPI" />
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
