import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';

const WeekChallenges = ({ challenges }) => {

  return (
    <>
      <SubSectionHeader SsName='Challenges' isSubSecChallenges />
      {challenges.length > 0 && (
        challenges.map(item => (
          <WeekChallengesItem key={item.id} {...item} />
        ))
      )}
    </>

  );
};

const mapStateToProps = (state) => {
  return {
    challenges: state.users[0].challenges,
  };
};

export default connect(mapStateToProps, null)(WeekChallenges);
