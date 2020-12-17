import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekSkillsItem from '../components/WeekSkillsItem';

import '../assets/styles/WeekSkills.styl';

const WeekSkills = ({ skills }) => {

  return (
    <div className='ss-header-main-container'>
      <form action=''>
        <SubSectionHeader SsName='Skills' isSubSecSkills />
        {skills.length > 0 && (
          skills.map(item => (
            <WeekSkillsItem key={item.id} {...item} />
          ))
        )}
        <button className='setSkills-btn' type='submit'>Save Skills</button>
      </form>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.users[0].skills,
  };
};

export default connect(mapStateToProps, null)(WeekSkills);
