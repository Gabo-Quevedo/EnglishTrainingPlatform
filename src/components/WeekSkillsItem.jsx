import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekSkillsItem.styl';

const WeekSkillsItem = ({ listening, reading, writting, speaking }) => (
  <section className='week-skills-item'>
    <div className='week-skills-item-container'>
      <h2>{listening}</h2>
      <p>
        {reading}
        {writting}
        {speaking}
      </p>
      <Link to='/'>i</Link>
    </div>
  </section>
);

export default WeekSkillsItem;
