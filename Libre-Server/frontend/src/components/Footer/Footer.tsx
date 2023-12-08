import React from 'react';
import "./Footer.scss"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>This is an RCOS project at RPI. </p>
          <p>
            <a href="https://github.com/BillyMerchan/Libre" target="_blank" rel="noopener noreferrer">
              Check out our GitHub Repository
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
