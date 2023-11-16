import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import "./SignIn.scss";


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
      <NavBar></NavBar>
      <div className="sign">
        <div className="Loginn">
          <h1 className = "prompt">Log in to Libre</h1>
          <form onSubmit={loginUser} data-testid="formElement">
            <h2 className = "inpLable">Email address</h2>
            <input className="InputL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="rcsid@rpi.edu"
            />
            <br />
            <h2 className = "inpLableP">Password</h2>
            <input className="InputL"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
            <input className="buttL" type="submit" value="Login" />
          </form>
          <button className="buttSwitch" onClick={() => navigate("/register")}>Don't have an account? <u>Sign up for Libre</u></button>
        </div>
      </div>
    </div>
  );
}
