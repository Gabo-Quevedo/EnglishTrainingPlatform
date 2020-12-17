import React from 'react';

import flagIcon from '../assets/static/flag-icon.png';
import hat from '../assets/static/hat.png';
import LogoOrganic from '../assets/static/LogoOrganic12.svg';

import '../assets/styles/components/WeekPartnersItem.styl';

const WeekChallengesItem = ({ name, lastName }) => (
  <section className='week-partners-item'>
    <div className='week-partners-item-container'>
      <div className='week-partners-item-container__picture'>
        <img src={LogoOrganic} alt='' />
      </div>
      <div className='week-partners-item-container__info'>
        <h1>{name}</h1>
        <h5>{lastName}</h5>
      </div>
      <div className='week-partners-item-container__detail'>
        <img className='flag' src={flagIcon} alt='' />
        <img className='hat' src={hat} alt='' />
      </div>
    </div>
  </section>
);

export default WeekChallengesItem;
