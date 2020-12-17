import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekSkillsItem from '../components/WeekSkillsItem';
import TopicRequest from '../components/TopicRequest';

const WeekSkills = ({ skills }) => {

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Skills' isSubSecSkills />
      {skills.length > 0 && (
        skills.map(item => (
          <WeekSkillsItem key={item.id} {...item} />
        ))
      )}
      <TopicRequest />
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.users[0].skills,
  };
};

export default connect(mapStateToProps, null)(WeekSkills);
