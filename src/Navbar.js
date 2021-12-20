import React from "react";
import { NavLink } from "react-router-dom";
import BACK from './assets/images/back.png';
import MICRO from './assets/images/microphone.png';
import SETTING from './assets/images/settings.png';

const NavBar = () => {
  const toDay = new Date();
  const lastDay = (toDay.getFullYear()) + '-' + (toDay.getMonth() + 1 ) + '-' + (toDay.getDate());
  return(
    <header style={{ backgroundColor:'rgb(237, 85, 139)' }}>
        <div>
          <NavLink to="/">
            <img src={BACK} alt='back' />
          </NavLink>
          <span>{lastDay}</span>
        </div>
        <span>Tunisia national picture</span>
        <img src={MICRO} alt='microphone'/>
        <img src={SETTING} alt='setting' />
    </header> 
  );
}

export default NavBar;