import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';
import ChallengeRequest from '../components/ChallengeRequest';

const WeekChallenges = ({ challenges }) => {

  return (
    <div className='ss-main-container'>
      <SubSectionHeader SsName='Challenges' isSubSecChallenges />
      <ChallengeRequest />
      {challenges.length > 0 && (
        challenges.map(item => (
          <WeekChallengesItem key={item.id} {...item} />
        ))
      )}
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    challenges: state.users[0].challenges,
  };
};

export default connect(mapStateToProps, null)(WeekChallenges);
