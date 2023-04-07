import React from 'react';
import Button from './Button';
import "./HeroSection.css";
import "./App.css";

function HeroSection() {
  return (
      <div className='hero-container'>
        <div className='video-container'>
          <video src ="lib2.mp4" autoPlay loop muted>
          </video>
          </div>
          
        <h1>Welcome to Libre</h1>
        <p>Secure your own Study Room</p>
        <div className="hero-btns">
          <Button className='bott' 
          buttonStyle="btn--outline"
          buttonSize="bin--large">
          Get Started </Button>

          <Button className="btns"
          buttonStyle="btn--primary"
          buttonSize="bin--large"> 
          Watch Demo 
          
          
          </Button>

        </div>
      </div>

  )
}

export default HeroSection