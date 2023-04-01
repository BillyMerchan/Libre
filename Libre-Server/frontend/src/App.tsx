import React from 'react';
import NavBar from './Navbar';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes> 
        <Route path='/' />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
