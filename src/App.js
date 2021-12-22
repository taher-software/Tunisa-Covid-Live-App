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
import DeathsCases from './components/Deaths/Deaths';
import RecoveredCases from './components/Recovered/Recovered';
import './App.css';
import lastDayNumbers from './redux/LATEST/thunk/thunk';
import dayBeforeNumbers from './redux/DAYBEFORE/thunk/thunk';
import getHistoricalData from './redux/HISTORICalMONTHDATA/thunk/thunk';

function App() {
  const dispatch = useDispatch();
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 1}`;
  const previousDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 2}`;
  const firstDayOfMonth = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-1`;
  useEffect(() => dispatch((lastDayNumbers(lastDay))), []);
  useEffect(() => dispatch((dayBeforeNumbers(previousDay))), []);
  useEffect(() => dispatch(getHistoricalData(firstDayOfMonth, lastDay)), []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/ConfirmedCases"><ConfirmedCases /></Route>
        <Route path="/Deaths"><DeathsCases /></Route>
        <Route path="/Recovered"><RecoveredCases /></Route>
      </Switch>
    </Router>
  );
}

export default App;
