import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FLECHE from '../../assets/images/fleche.png';
import './confirmedcases.css';
import MonthConfirmedChart from './ChartConfirmedMonth';

const ConfirmedCases = () => {
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 1}`;
  const previousDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate() - 2}`;
  let updateData = useSelector((state) => state.latest);
  let dayBeforeData = useSelector((state) => state.dayBefore);
  let growingRate = 1.2;
  let totalConfirmedCases = 20;
  let confirmedCases = 20;
  let yesterdayTotalCases = 12;
  let todayVsYesterday = 0.5;
  if (Object.keys(updateData).length > 0) {
    updateData = updateData.dates[lastDay].countries.Tunisia;
    todayVsYesterday = Math.round(updateData.today_vs_yesterday_confirmed);
    yesterdayTotalCases = updateData.yesterday_confirmed;
    confirmedCases = updateData.today_new_confirmed;
    totalConfirmedCases = updateData.today_confirmed;
    if (Object.keys(dayBeforeData).length > 0) {
      dayBeforeData = dayBeforeData.dates[previousDay].countries.Tunisia;
      const confirmedCasesDayBefore = dayBeforeData.today_new_confirmed;
      growingRate = (
        (confirmedCases - confirmedCasesDayBefore) / Math.max(1, confirmedCasesDayBefore)
      ) * 100;
      growingRate = Math.floor(growingRate);
    }
  }
  const adjustHeight = () => {
    const home = document.querySelector('.confirmed-cases-page').offsetHeight;
    const chartHeight = 220;
    const subtitleHeight = document.querySelector('.sub-title').offsetHeight;
    const indicators = document.querySelector('.indicator-breakdown');
    indicators.style.height = `${home - chartHeight - subtitleHeight}px`;
  };
  useEffect(() => adjustHeight(), []);
  return (
    <div className="confirmed-cases-page">
      <MonthConfirmedChart />
      <p
        className="sub-title"
        style={{
          backgroundColor: 'rgb(226, 77, 120)', fontSize: '18px', margin: '0 ', padding: '2.5% 0 2.5% 2.5%',
        }}
      >
        CONFIRMED CASES BREAKDOWN
        {' '}
        {lastDay}
      </p>
      <div className="indicator-breakdown">
        <div className="confirmed-case-item total-cases">
          <p style={{
            fontWeight: '700', fontSize: '18px', margin: '0 20% 0 5%', width: '190px',
          }}
          >
            Total Cases
          </p>
          <span style={{
            marginRight: '8%', fontSize: '18px', fontWeight: '700', width: '116px',
          }}
          >
            {totalConfirmedCases}
            {' '}
            cases
          </span>
          <img src={FLECHE} alt="back icone" style={{ marginRight: '2.5%' }} />
        </div>
        <div className=" confirmed-case-item  yesterday-total-cases">
          <p style={{
            fontWeight: '700', fontSize: '18px', margin: '0 20% 0 5%', width: '190px',
          }}
          >
            Yesterday Total Cases
          </p>
          <span style={{
            marginRight: '8%', fontSize: '18px', fontWeight: '700', width: '116px',
          }}
          >
            {yesterdayTotalCases}
            {' '}
            cases
          </span>
          <img src={FLECHE} alt="back icone" style={{ marginRight: '2.5%' }} />
        </div>
        <div className=" confirmed-case-item today-vs-yesterday-confirmed">
          <p style={{
            fontWeight: '700', fontSize: '18px', margin: '0 20% 0 5%', width: '190px',
          }}
          >
            Today Vs Yesterday New Cases
          </p>
          <span style={{
            marginRight: '8%', fontSize: '18px', fontWeight: '700', width: '116px',
          }}
          >
            {todayVsYesterday}
          </span>
          <img src={FLECHE} alt="back icone" style={{ marginRight: '2.5%' }} />
        </div>
        <div className=" confirmed-case-item growing-cases">
          <p style={{
            fontWeight: '700', fontSize: '18px', margin: '0 20% 0 5%', width: '190px',
          }}
          >
            Daily Growing Rate
          </p>
          <span style={{
            marginRight: '8%', fontSize: '18px', fontWeight: '700', width: '116px',
          }}
          >
            {growingRate}
            {' '}
            %
          </span>
          <img src={FLECHE} alt="back icone" style={{ marginRight: '2.5%' }} />
        </div>

      </div>
    </div>
  );
};
export default ConfirmedCases;
