import React, {useState} from 'react'
import NavBar from '../../components/NavBar/Navbar'
import axios from 'axios';
import "./SignIn.css"

/*
const SignInForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make API request to sign in
    axios.post('/api/signin', { username, password })
      .then(response => {
        const token = response.data.token;
        console.log('Successfully signed in'); // Display success message
        console.log('JWT token:', token); // Store token in local storage or session storage
        // Redirect to another page or perform any other desired action
      })
      .catch(error => {
        console.log(error.response.data); // Display error message
      });
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
*/

const SignIn: React.FC = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('/api/signin', { username, password })
      .then(response => {
        console.log('Successfully signed in');
      })
      .catch(error => {
        console.log(error.response.data); // Display error message
      });
  };

  return (
    <div>
    <NavBar/>
      <div className='box'>
        <div className="sign">
          <h1>Log In <i className="fa fa-address-card-o"> </i> </h1> 
            <form onSubmit={SignIn}>
              <div className= "header">
                RCSID:
              </div>
                <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
                <div className= "header">
                Password:
                </div>
                  <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button className= "signInbutt" type="submit" >Submit</button>
            </form>
        </div>
      </div>
    </div>

  )
}