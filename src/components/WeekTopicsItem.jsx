import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../assets/styles/components/WeekTopicItem.styl';

const WeekTopicsItem = (props) => {
  const { id, title, description, handleTrashIcon } = props;
  return (
    <section key={id} className='week-topics-item'>
      <div className='week-topics-item-container'>
        <div className='week-topics-item-container__title'>
          <h2>{title}</h2>
        </div>
        <p>
          {description}
        </p>
        <div className='week-topics-item-container__statusAction'>
          <Link to='topics' onClick={() => handleTrashIcon(id)}><FaTrashAlt /></Link>
        </div>
      </div>
    </section>
  );
};

export default WeekTopicsItem;
