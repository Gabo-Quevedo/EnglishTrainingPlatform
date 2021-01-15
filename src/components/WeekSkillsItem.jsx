import React, { useState, useEffect } from 'react';

import '../assets/styles/components/WeekSkillsItem.styl';

const WeekSkillsItem = ({ id, title, level, englishLevels }) => {
  const [skillSeted, setSkillSeted] = useState('');
  const matchEnglissjLevels = englishLevels.values();
  const handleProvideSelectedSkill = () => {
    const [level1] = level.map(item => Object.entries(item));
    const [levee2] = level1.filter(item => (!!item[1]));
    setSkillSeted(levee2);
    console.log(skillSeted);
  };
  useEffect(() => {
    handleProvideSelectedSkill();
  }, []);
  return (
    <section className='week-skills-item'>
      <div className='week-skills-item-container'>
        <h2>{title}</h2>
        <ul>
          {englishLevels.map(item => (
            (matchEnglissjLevels.next().value === skillSeted[0]) ? (
              <li key={`${id}-${item}`}>
                <label htmlFor={`${title}-${item}`}>
                  <input
                    type='radio'
                    value={`${title}-${item}`}
                    name={`${title}-${id}`}
                    id={`${title}-${item}`}
                    checked
                  />
                  {item}
                </label>
              </li>
            ) : (
              <li key={`${id}-${item}`}>
                <label htmlFor={`${title}-${item}`}>
                  <input
                    type='radio'
                    value={`${title}-${item}`}
                    name={`${title}-${id}`}
                    id={`${title}-${item}`}
                  />
                  {item}
                </label>
              </li>
            )
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeekSkillsItem;
