import React from 'react';
import NavBar from './Navbar';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes> 
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
