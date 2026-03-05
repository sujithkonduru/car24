import React, { useState } from 'react';
import logo from '../Assets/Car 24 logo.png';
import CarSlider from '../components/CarSlider';
import './ComingSoon.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! We'll notify you at ${email} when we launch!`);
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  const carImages = [
    'https://applecarrentals.com/assets/web/images/mahindra-thar-red-rage.webp',
    'https://carrentaldehradun.com/wp-content/uploads/2025/08/Untitled-design-35.png',
    'https://media.zigcdn.com/media/model/2022/Mar/front-1-4-left-1433965578_930x620.jpg',
    'https://www.autovista.in/assets/product_images/gallery/new-all-new-swift-front.jpg',
    'https://parkplus-bkt-img.parkplus.io/production/chariot_staging/public/frontleftside47jpgimage_20230927172900711621.jpg',
    'https://www.topgearmag.in/uploads/Features/Image/1727961867-hyundai-verna.jpg'
  ];

  return (
    <div className="coming-soon-page">
      {/* Animated Car Header */}
      {/* <div className="animated-car-header">
        <div className="car-animation">
          <span className="car-emoji">🚗</span>
        </div>
        <div className="road-line"></div>
      </div> */}

      {/* Main Content */}
      <div className="main-content">
        <div>
          <div className="content-wrapper">
          {/* Logo */}
          <div className="logo-section">
            <img src={logo} alt="Car24 Travels" className="logo" />
          </div>

          {/* Coming Soon Message */}
          <div className="message-section">
            <h1 className="main-title">
              <span className="coming-soon-badge">Coming Soon</span>
              <span className="title-text">Your Journey Begins Here</span>
            </h1>
            <p className="subtitle">
              We're launching India's most trusted self-drive car rental platform. 
              Get ready to explore the open road with premium vehicles at your fingertips.
            </p>
          </div>

          {/* Features */}
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span>100+ Premium Cars</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Instant Booking</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <span>Fully Insured</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🗺️</span>
              <span>Unlimited Kilometers</span>
            </div>
          </div>

          {/* Email Notification */}
          {/* <form className="notify-form" onSubmit={handleNotify}>
            <input
              type="email"
              placeholder="Enter your email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="notify-button">
              Notify Me
              <span className="arrow">→</span>
            </button>
          </form> */}

          {/* Footer */}
          <div className="footer-text">
            <p>Powered by <strong>Stackenzo</strong></p>
          </div>
        </div>

          {/* Car Slider */}
          <div className="slider-section">
            <CarSlider carImages={carImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
