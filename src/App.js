import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './Navbar';
import HomePage from './components/HomePage/home';
import ConfirmedCases from './components/ConfirmedCases/ConfirmedCases';
import './App.css';
import lastDayNumbers from './redux/LATEST/thunk/thunk';
import dayBeforeNumbers from './redux/DAYBEFORE/thunk/thunk';

function App() {
  const dispatch = useDispatch();
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 1}`;
  const previousDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 2}`;
  useEffect(() => dispatch((lastDayNumbers(lastDay))), []);
  useEffect(() => dispatch((dayBeforeNumbers(previousDay))), []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/ConfirmedCases"><ConfirmedCases /></Route>
      </Switch>
    </Router>
  );
}

export default App;
