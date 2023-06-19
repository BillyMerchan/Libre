import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./SignIn.css"

export default function SignIn() {
  return (
    <div>
    <NavBar/>
      <div className='box'>
        <div className="sign">
          <h1>Log In <i className="fa fa-address-card-o"> </i> </h1> 
            <form>
              <div className= "header">
                RCSID:
              </div>
                <input type="text" placeholder='Username'/>
                <div className= "header">
                Password:
                </div>
                  <input type="password" placeholder='Password'/>
            </form>
            <button className= "signInbutt" type="submit" >Submit</button>
        </div>
      </div>
    </div>

  )
}