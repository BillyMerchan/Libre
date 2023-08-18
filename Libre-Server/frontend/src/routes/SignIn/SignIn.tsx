import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate('/');
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="sign">
        <div className="Loginn">
          <h1>Login</h1>
          <form onSubmit={loginUser}>
            <input className="InputL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <br />
            <input className="InputL"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
            <input className="buttL" type="submit" value="Login" />
          </form>
          <button className="buttL" onClick={() => navigate("/register")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

/*
import React from 'react'
import NavBar from '../../components/NavBar/Navbar'
import "./SignIn.css"

export default function SignIn() {
  return (
    <div>
    <NavBar/>
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
                <input type="text" placeholder='Password'/>
          </form>
              <p className="forgotpass">
                  Forgot your Password?
              </p>
          <button className= "signInbutt" type="submit" >Submit</button>


      </div>
    </div>

  )
}*/
