import React from 'react';

import '../assets/styles/components/WeekSkillsItem.styl';

const WeekSkillsItem = ({ id, title, level }) => (
  <section className='week-skills-item'>
    <div className='week-skills-item-container'>
      <h2>{title}</h2>
      <ul>
        <li>
          <label htmlFor={`${id}${level[0]}`}>
            {level[0]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[0]}`} />
          </label>
        </li>
        <li>
          <label htmlFor={`${id}${level[1]}`}>
            {level[1]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[1]}`} />
          </label>
        </li>
        <li>
          <label htmlFor={`${id}${level[2]}`}>
            {level[2]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[2]}`} />
          </label>
        </li>
        <li>
          <label htmlFor={`${id}${level[3]}`}>
            {level[3]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[3]}`} />
          </label>
        </li>
        <li>
          <label htmlFor={`${id}${level[4]}`}>
            {level[4]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[4]}`} />
          </label>
        </li>
        <li>
          <label htmlFor={`${id}${level[5]}`}>
            {level[5]}
            <input type='radio' name={`${id}-${title}`} id={`${id}${level[5]}`} />
          </label>
        </li>
      </ul>
    </div>
  </section>
);

export default WeekSkillsItem;
