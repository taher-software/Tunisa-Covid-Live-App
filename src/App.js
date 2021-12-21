import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './Navbar';
import HomePage from './components/HomePage/home';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
