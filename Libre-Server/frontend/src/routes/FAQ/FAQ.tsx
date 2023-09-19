import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./FAQ.css"

export default function FAQ() {
  return (
    <div>
      <NavBar />
      <div className='FAQ'>
        <div className="background-img">

          <div className='title'>
            <h1>
              Frequently Asked Questions
            </h1>
          </div>
          <div className='QBox'>
            <div className='QandABlock'>
              <span className='input'> Who created Libre? </span>
            </div>
            <div className='QandABlock'>
              <span className='input'> How are rooms detected? </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}