import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./SignIn.css"

export default function SignIn() {
  return (
    <div>
    <NavBar/>
    <div className="sign">
        <h1 data-testid="login">Log In <i className="fa fa-address-card-o"> </i> </h1> 
          <form>
            <div className="header" data-testid="rcs">
              RCSID:
            </div>
              <input type="text" placeholder='Username'/>
              <div className="header" data-testid="password">
              Password:
              </div>
                <input type="text" placeholder='Password'/>
          </form>
              <p className="forgotpass" data-testid="forgotPassword">
                  Forgot your Password?
              </p>
          <button className="signInbutt" type="submit" data-testid="submit">Submit</button>


      </div>
    </div>

  )
}