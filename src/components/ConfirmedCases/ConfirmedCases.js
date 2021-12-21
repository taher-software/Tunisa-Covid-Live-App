import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MAP from '../../assets/images/map.png';
import FLECHE from '../../assets/images/fleche.png';
import './home.css';

const ConfirmedCases = () => {
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 1}`;
  const previousDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 2}`;
  let updateData = useSelector((state) => state.latest);
  let dayBeforeData = useSelector((state) => state.dayBefore);
  let growingRate = 1.2;
  let confirmedCases = 20;
  let deaths = 115;
  let recovered = 30;
  let openCases = 15;
  if (Object.keys(updateData).length > 0) {
    updateData = updateData.dates[lastDay].countries.Tunisia;
    confirmedCases = updateData.today_new_confirmed;
    deaths = updateData.today_new_deaths;
    recovered = updateData.today_new_recovered;
    openCases = updateData.today_new_open_cases;
    if (Object.keys(dayBeforeData).length > 0) {
      dayBeforeData = dayBeforeData.dates[previousDay].countries.Tunisia;
      const confirmedCasesDayBefore = dayBeforeData.today_new_confirmed;
      growingRate = ((confirmedCases - confirmedCasesDayBefore) / confirmedCasesDayBefore) * 100;
      growingRate = Math.floor(growingRate);
    }
  }
  const adjustHeight = () => {
    const home = document.querySelector('.home-page').offsetHeight;
    const titleHeight = document.querySelector('.title-board').offsetHeight;
    const subtitleHeight = document.querySelector('.sub-title').offsetHeight;
    const indicators = document.querySelector('.key-indicators');
    indicators.style.height = `${home - titleHeight - subtitleHeight}px`;
  };
  useEffect(() => adjustHeight(), []);
  return (
    <div className="home-page">
      <div className="title-board">
        <div className="map">
          <img src={MAP} alt="tunisia-map" style={{ width: '25%', height: '80%' }} />
        </div>
        <p className="title-indicator">
          Tunisia
          {' '}
          <span style={{ fontWeight: 'normal', fontSize: '16px' }}>
            {' '}
            {growingRate > 0 ? '+' : ''}
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
        CONFIRMED CASES BREAKDOWN -
        {' '}
        {lastDay}
      </p>
      <div className="key-indicators">
        <div className=" card confirmed-case">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW CASES
            <span>{confirmedCases}</span>
          </p>
        </div>
        <div className=" card deaths">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW DEATHS
            <span>{deaths}</span>
          </p>
        </div>
        <div className=" card recovery">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW RECOVERED
            <span>{recovered}</span>
          </p>
        </div>
        <div className=" card open-cases">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0' }} alt="back icone" />
          <p style={{
            width: '50%', fontWeight: '700', fontSize: '18px', textAlign: 'end', marginRight: '5%', display: 'flex', flexDirection: 'column',
          }}
          >
            NEW OPEN CASES
            <span>{openCases}</span>
          </p>
        </div>

      </div>
    </div>
  );
};
export default ConfirmedCases;
