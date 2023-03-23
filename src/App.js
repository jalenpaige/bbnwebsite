import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Calendar from './components/pages/Calendar'

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/calendar' element = {<Calendar/>}/>
     </Routes>
     </Router>
    </>
  );
}

export default App;
