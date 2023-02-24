import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' id='home' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
