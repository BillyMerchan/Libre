import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import "./Register.scss";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  async function registerUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data); 
    if (data.status === "ok") {
      navigate("/signIn");
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="BackgroundRegister">
        <div className="RegisterWrap">
          <h1>Register</h1>
            <form onSubmit={registerUser} data-testid="formElement">
              <input
                className="InputR"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className="InputR"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                className="InputR"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <br />
              <input className="buttR" type="submit" value="Register"/>
            </form> 
          <button className="buttR" onClick={() => navigate("/signIn")}>Already have an account?</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
