import React, { useState } from 'react';
import NavBar from '../../components/NavBar/Navbar';
import "./FAQ.css";

const FAQ: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      <NavBar />
      <div className='FAQ'>
        <div className="background-img-FAQ">
          <h1 className='title'>
            Frequently Asked Questions
          </h1>
          <div className='QBox'>
            <p className={`accordion input ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
              Who created Libre?
            </p>
            <div className={`panel ${activeAccordion === 1 ? 'show' : ''}`}> Group of RCOS students at RPI. </div>

            <p className={`accordion input ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
              How are rooms detected?
            </p>
            <div className={`panel ${activeAccordion === 2 ? 'show' : ''}`}> Motion detection hardware in study rooms. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. </div>

            <p className={`accordion input ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
              How often does the map update?
            </p>
            <div className={`panel ${activeAccordion === 3 ? 'show' : ''}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. </div>
          </div>
          <div className='A'>
              A:  <span className='input'> Libre was created by Billy Merchan, Daniela Liang, Rachel Tsui, Ryan Cheng, and Dante Luis</span>
          </div>
          <div className='Q'>
              Q: <span className='input'> Libre is super cool </span>
          </div>
          <div className='A'>
              A:  <span className='input'> Yes </span>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default FAQ;
