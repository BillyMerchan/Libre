import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./FAQ.css"

export default function FAQ() {
  return (
    <div>
    <NavBar/>
      <div className='FAQ'>
          <div className='title'>
            <h1>
                Frequently Asked Questions
            </h1>
          </div>
          <div className='QBox'>
              Q: <span className='input'> Who created Libre? </span>
          </div>
        </div>
    </div>

  )
}