import React from 'react';
import "./home.css";

import NavBar from '../../components/NavBar/Navbar';
import Button from "../../components/Button/Button";

import LibreLogoWord from "../../img/logo.svg";


function Home() {

  return ( 

      <div className='hero-container'>
         <NavBar/>
          <video className="background-video" autoPlay={true} muted loop>
          <source src={require("../../img/lib2.mp4")} type="video/mp4"/>

          </video>
        
        <h1 style={{color: "white"}}>Welcome to Libre</h1>
        <p>Secure your own Study Room at RPI's Folsom Library < i className='    fa fa-child'></i></p> 

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

        <img style={{width: 250, height:250}} src={LibreLogoWord} />
      </div>

  )
}

export default Home