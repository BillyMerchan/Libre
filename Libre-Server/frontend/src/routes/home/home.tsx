import React from 'react';
import "./home.css";

import NavBar from '../../components/NavBar/Navbar';
import Button from "../../components/Button/Button";


function Home() {

  return (

    <div className='home-page'>
      <NavBar />

      <h1 className="firstHeading">Welcome to Libre</h1>

      <div className="section-container">
        <div className="gradient-bar"></div>
        <div className="background-img"></div>

        <div className="textblock">
          <div className="text-overlay">
            <h1>Secure a study room at RPI Folsom Library</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>


      <div className="middleGap">

      </div>


      <h1 className="secondHeading">Other Resources</h1>

      <div className="section-container">
        <div className="gradient-bar2"></div>
        <video className="background-block" autoPlay muted loop>
          <source src={require("../../img/lib2.mp4")} type="video/mp4" />
        </video>

        <div className="textblock2">
          <div className="text-overlay2">
            <h1>Map, directions, and other resoucres</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>


      </div>

      {/* <img style={{ width: 250, height: 250 }} src={LibreLogoWord} /> */}
    </div >

  )
}

export default Home