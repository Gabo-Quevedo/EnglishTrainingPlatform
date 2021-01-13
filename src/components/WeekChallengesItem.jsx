import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekChallengesItem.styl';

const WeekChallengesItem = (props) => {
  const { id, title, minutes, description, situation, handleTrashIcon } = props;
  return (
    <section key={id} className='week-challenges-item'>
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
          <span>{situation.request[0]}</span>
          <Link to='challenges' onClick={() => handleTrashIcon(id)}><FaTrashAlt /></Link>
        </div>
      </div>
    </section>
  );
};

export default WeekChallengesItem;
