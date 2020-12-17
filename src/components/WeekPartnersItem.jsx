import React from 'react';

import '../assets/styles/components/WeekPartnersItem.styl';

const WeekChallengesItem = ({ name }) => (
  <section className='week-partners-item'>
    <div className='week-partners-item-container'>
      <h2>{name}</h2>
    </div>
  </section>
);

export default WeekChallengesItem;
