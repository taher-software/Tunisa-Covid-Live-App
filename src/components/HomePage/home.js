import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MAP from '../../assets/images/map.png';
import FLECHE from '../../assets/images/fleche.png';
import './home.css';

const HomePage = () => {
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 1}`;
  const previousDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 2}`;
  let updateData = useSelector((state) => state.latest);
  let dayBeforeData = useSelector((state) => state.dayBefore);
  const [growingRate, setGrowingrate] = useState(undefined);
  const [confirmedCases, setConfirmedCases] = useState(-1);
  const [render, setRender] = useState(0);
  let deaths = 115;
  let recovered = 30;
  let openCases = 15;
  if (Object.keys(updateData).length > 0) {
    updateData = updateData.dates[lastDay].countries.Tunisia;
    if (confirmedCases < 0) {
      setConfirmedCases(updateData.today_new_confirmed);
    }
    deaths = updateData.today_new_deaths;
    recovered = updateData.today_new_recovered;
    openCases = updateData.today_new_open_cases;
    if (Object.keys(dayBeforeData).length > 0) {
      if ((growingRate === undefined) || (render < 2)) {
        dayBeforeData = dayBeforeData.dates[previousDay].countries.Tunisia;
        const confirmedCasesDayBefore = dayBeforeData.today_new_confirmed;
        const rate = ((confirmedCases - confirmedCasesDayBefore) / confirmedCasesDayBefore) * 100;
        setGrowingrate(Math.floor(rate));
        setRender(render + 1);
      }
    }
  }
  const adjustHeight = () => {
    const home = document.querySelector('.home-page').offsetHeight;
    const titleHeight = document.querySelector('.title-board').offsetHeight;
    const subtitleHeight = document.querySelector('.sub-title').offsetHeight;
    const indicators = document.querySelector('.key-indicators');
    indicators.style.height = `${home - titleHeight - subtitleHeight}px`;
  };
  const situationALertColor = (growingRate, confirmedCases) => {
    const alertIcone = document.querySelector('.title-board');
    if (Object.keys(updateData).length > 0) {
      if ((growingRate > 20) || (confirmedCases > 200)) {
        alertIcone.style.backgroundColor = 'red';
      } else if (growingRate > 5) {
        alertIcone.style.backgroundColor = 'orange';
      } else {
        alertIcone.style.backgroundColor = 'green';
      }
    }
  };
  const situationNeutralColor = () => {
    const alertIcone = document.querySelector('.title-board');
    alertIcone.style.backgroundColor = 'rgb(247, 90, 146)';
  };
  useEffect(() => adjustHeight(), []);
  useEffect(() => {
    setInterval(situationALertColor, 1000, growingRate, confirmedCases);
    return () => situationNeutralColor();
  },
  [render]);
  useEffect(() => setInterval(situationNeutralColor, 4000, growingRate, confirmedCases), [render]);
  return (
    <div className="home-page">
      <div className="title-board">
        <div className="map">
          <img src={MAP} alt="tunisia-map" style={{ width: '25%', height: '80%' }} />
        </div>
        <p className="title-indicator">
          Tunisia
          {' '}
          <span style={{ fontWeight: 'normal', fontSize: '16px' }} className="alert-icone">
            {' '}
            {growingRate >= 0 ? '+' : ''}
            {growingRate}
            % confirmed cases
            {' '}
          </span>
        </p>
      </div>
      <p
        className="sub-title"
        style={{
          backgroundColor: 'rgb(226, 77, 120)', fontSize: '18px', margin: '0 ', padding: '2.5% 0 2.5% 2.5%',
        }}
      >
        KEY INDICATORS
      </p>
      <div className="key-indicators">
        <NavLink to="/ConfirmedCases" className=" card confirmed-case">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW CASES
            <span>{confirmedCases}</span>
          </p>
        </NavLink>
        <NavLink to="/Deaths" className="card deaths">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW DEATHS
            <span>{deaths}</span>
          </p>
        </NavLink>
        <NavLink to="/Recovered" className=" card recovery">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW RECOVERED
            <span>{recovered}</span>
          </p>
        </NavLink>
        <NavLink to="/OpenCases" className=" card open-cases">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW OPEN CASES
            <span>{openCases}</span>
          </p>
        </NavLink>

      </div>
    </div>
  );
};
export default HomePage;
