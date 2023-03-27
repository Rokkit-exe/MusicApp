import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Songs from './pages/Songs'
import Artists from './pages/Artists'
import Albums from './pages/Albums'
import Genres from './pages/Genres'
import HomePage from './pages/HomePage'
import Add from './pages/Add'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/songs' element={<Songs/>}/>
        <Route path='/songs/add' element={<Add/>}/>
        <Route path='/artists' element={<Artists/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path='/genres' element={<Genres/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
