import React from 'react';
import { NavLink } from 'react-router-dom';
import BACK from './assets/images/back.png';
import MICRO from './assets/images/microphone.png';
import SETTING from './assets/images/settings.png';

const NavBar = () => {
  const toDay = new Date();
  const lastDay = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-${toDay.getDate()}`;
  return (
    <header style={{
      backgroundColor: 'rgb(226, 77, 120)',
      height: '5rem',
      margin: '0',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Lato, sans-serif',
      color: '#fff',
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/">
          <img src={BACK} alt="back" style={{ cursor: 'pointer' }} />
        </NavLink>
        <span style={{ fontWeight: '700' }}>{lastDay}</span>
      </div>
      <span style={{ margin: '0 12.5%', color: '#fff' }}>Tunisia national picture</span>
      <img src={MICRO} alt="microphone" style={{ width: '5%', marginRight: '7.5%' }} />
      <img src={SETTING} alt="setting" style={{ width: '5%', marginRight: '2.5%' }} />
    </header>
  );
};

export default NavBar;
