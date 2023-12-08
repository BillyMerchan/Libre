import React from 'react';
import "./Footer.scss"
import ghscImg from "../../img/ghsc.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content copyright-content">
        <p className = "copyright"> ©2022-2023 Libre </p>
        </div>
        <div className="footer-content link-content">
            <a href="https://github.com/BillyMerchan/Libre" target="_blank" rel="noopener noreferrer">
            <img className="ghlogo" src={ghscImg} alt="Github Logo"/>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
