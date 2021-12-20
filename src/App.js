import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import NavBar from './Navbar';
import './App.css';
function App() {
  

  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
