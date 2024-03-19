import './styles.css';
import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import Speakease from './pages/Speakease';
import Topgun from './pages/Topgun';
import Neos from './pages/NEOS';
import Spaceinv from './pages/SpaceInv';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-me' element={<LearnMore/>}></Route>
        <Route path='/speakease' element={<Speakease/>}></Route>
        <Route path='/neos' element={<Neos/>}></Route>
        <Route path='/top-gun' element={<Topgun/>}></Route>
        <Route path='/space-invaders' element={<Spaceinv/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
