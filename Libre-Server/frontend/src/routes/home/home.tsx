import LibreLogo from'./LibreLogo.svg'
import './App.css';
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/Faq'
import SignIn from './pages/Signin'
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path= "/" element= {<Home/>} > </Route>
          <Route path= "/about" element= {<About/>} > </Route>
          <Route path= "/faq" element= {<FAQ/>} > </Route>
          <Route path= "/signIn" element= {<SignIn/>} > </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
