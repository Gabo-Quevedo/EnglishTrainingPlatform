import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/components/Participants.styl';

const WeekChallengesItem = ({ title, minutes, description }) => (
  <section className='week-challenges-item'>
    <div className='week-challenges-item-container'>
      <h2>{title}</h2>
      <p>
        {minutes}
        {description}
      </p>
      <Link to='/'>i</Link>
    </div>
  </section>
);

export default WeekChallengesItem;
