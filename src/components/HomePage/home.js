import React from "react";
import { useEffect } from "react";
import MAP from '../../assets/images/map.png';
import FLECHE from '../../assets/images/fleche.png';
import './home.css';
const HomePage = () => {
  const growingRate = 1.2;
  const confirmedCases = 356;
  const deaths = 115;
  const recovered = 30;
  const openCases = 15;
  const adjustHeight = () => {
    const home = document.querySelector('.home-page').offsetHeight;
    const titleHeight = document.querySelector('.title-board').offsetHeight;
    const subtitleHeight = document.querySelector('.sub-title').offsetHeight;
    const indicators = document.querySelector('.key-indicators');
    indicators.style.height= `${home - titleHeight - subtitleHeight}px`;
  }
  useEffect(()=> adjustHeight(), []);
  return(
    <div className='home-page'>
      <div className="title-board" >
          <div className='map'>
            <img src={MAP} alt="tunisia-map" style={{ width:'25%', height: '80%' }}/>
          </div>
          <p className="title-indicator" >
            Tunisia <span style={{ fontWeight: 'normal', fontSize: '16px'}}> {growingRate > 0 ? '+':'-'}{growingRate}% confirmed cases </span>
          </p>
      </div>
      <p className='sub-title' style={{ backgroundColor: 'rgb(226, 77, 120)', fontSize: '18px', margin: '0 ', padding:'2.5% 0 2.5% 2.5%'}}>Key Indicators</p>
      <div className="key-indicators">
        <div className=" card confirmed-case">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0'}}/>
          <p style={{ width:'50%', fontWeight:'700', fontSize:'18px', textAlign:'end', marginRight:'5%'}}>NEW CASES <span>{confirmedCases}</span></p>
        </div>
        <div className=" card deaths">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0'}}/>
          <p style={{ width:'50%', fontWeight:'700', fontSize:'18px', textAlign:'end', marginRight:'5%' }}>NEW DEATHS <span>{deaths}</span></p>
        </div>
        <div className=" card recovery">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0'}}/>
          <p style={{ width:'50%', fontWeight:'700', fontSize:'18px', textAlign:'end', marginRight:'5%'}}>NEW RECOVERED <span>{recovered}</span></p>
        </div>
        <div className=" card open-cases">
          <img src={FLECHE} style={{ margin: '2.5% 5% 0 0'}}/>
          <p style={{ width:'50%', fontWeight:'700', fontSize:'18px', textAlign:'end', marginRight:'5%' }}>NEW OPEN CASES <span>{openCases}</span></p>
        </div>
        
      </div>
    </div>
  );
}
export default HomePage;