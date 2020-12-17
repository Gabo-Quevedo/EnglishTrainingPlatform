import React from 'react';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekTopicItem.styl';

const WeekTopicsItem = ({ title, minutes, description }) => (
  <section className='week-topics-item'>
    <div className='week-topics-item-container'>
      <h2>{title}</h2>
      <p>
        {minutes}
        {description}
      </p>
      <Link to='/'>i</Link>
    </div>
  </section>
);

export default WeekTopicsItem;
