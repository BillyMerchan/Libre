import React from 'react';
import NavBar from './Navbar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Map from './routes/map/map';

function App() {
  return (
      <Router>
        <Routes>
          //<Route path='/' id='home' element={<Home/>} />
          <Route path='/map' id='map' element={<Map/>} />
        </Routes>
      </Router>
  );
}

export default App;