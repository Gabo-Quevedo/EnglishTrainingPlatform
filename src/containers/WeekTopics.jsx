import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekTopicsItem from '../components/WeekTopicsItem';
import ChallengeRequest from '../components/ChallengeRequest';

const WeekChallenges = ({ topics }) => {

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Topics' isSubSecTopics />
      {topics.length > 0 && (
        topics.map(item => (
          <WeekTopicsItem key={item.id} {...item} />
        ))
      )}
      <ChallengeRequest />
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    topics: state.users[0].topics,
  };
};

export default connect(mapStateToProps, null)(WeekChallenges);
