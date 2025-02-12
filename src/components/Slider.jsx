import React, { useState, useEffect } from 'react';
import './Slider1.css';

const Slider = () => {
  const totalSlides = 2;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container m-auto py-4">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide slide1">
          <div className="content">
            <span className="badge">Opening Sale Discount 50%</span>
            <h1>SuperMarket For Fresh Grocery</h1>
            <p>Introduced a new model for online grocery shopping and convenient home delivery.</p>
            <button className="shop-now-btn">Shop Now &rarr;</button>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <span className="badge">Limited Offer</span>
            <h1>Organic and Fresh Products</h1>
            <p>Get the best quality and fresh produce delivered straight to your door.</p>
            <button className="shop-now-btn">Shop Now &rarr;</button>
          </div>
        </div>
      </div>
      <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
