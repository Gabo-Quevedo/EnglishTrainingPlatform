import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';
import ChallengeRequest from '../components/ChallengeRequest';

const WeekChallenges = ({ challenges }) => {

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Challenges' isSubSecChallenges />
      {challenges.length > 0 && (
        challenges.map(item => (
          <WeekChallengesItem key={item.id} {...item} />
        ))
      )}
      <ChallengeRequest />
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    challenges: state.users[0].challenges,
  };
};

export default connect(mapStateToProps, null)(WeekChallenges);
