import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home";
import SignIn from './routes/SignIn/SignIn';
import Register from './routes/Register/Register';
import Map from './routes/map/map';
import FAQ from './routes/FAQ/FAQ';

import "./App.scss";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' id='home' element={<Home/>} />
          <Route path='/map' id='map' element={<Map/>} />
          <Route path='/faq' id='faq' element={<FAQ/>} />
          <Route path='/signIn' id='signIn' element={<SignIn/>} />
          <Route path='/register' id='register' element={<Register/>} />
        </Routes>
      </Router>
  );
}

export default App;
