import React, { useState, FormEvent } from "react";
import NavBar from "../../components/NavBar/Navbar";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform your sign-in logic here, e.g., call an authentication API
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Outer">
      <NavBar/>
      <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
