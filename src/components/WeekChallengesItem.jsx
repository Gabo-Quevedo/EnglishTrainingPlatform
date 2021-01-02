import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekChallengesItem.styl';
import '../assets/styles/icons.styl';

const WeekChallengesItem = ({ title, minutes, description }) => (
  <section className='week-challenges-item'>
    <div className='week-challenges-item-container'>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <Link to='/'><div className='trash_icon' /></Link>
    </div>
  </section>
);

export default WeekChallengesItem;
