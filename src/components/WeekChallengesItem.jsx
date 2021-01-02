import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekChallengesItem.styl';
import '../assets/styles/icons.styl';

const WeekChallengesItem = ({ title, minutes, description }) => (
  <section className='week-challenges-item'>
    <div className='week-challenges-item-container'>
      <div className='week-challenges-item-container__title'>
        <h2>{title}</h2>
        <div className='week-challenges-item-container__title-time'>
          <span>
            {minutes}
          </span>
          <div className='clock_icon' />
        </div>
      </div>
      <p>
        {description}
      </p>
      <div className='week-challenges-item-container__statusAction'>
        <span>Done</span>
        <Link to='/'><div className='trash_icon' /></Link>
      </div>
    </div>
  </section>
);

export default WeekChallengesItem;
