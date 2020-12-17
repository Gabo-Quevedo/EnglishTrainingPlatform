import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/SubSectionHeader.styl';

const SubSectionHeader = ({ isSubSecSkills, isSubSecTopics, isSubSecChallenges, isSubSecparticipants, SsName }) => {

  const headerClass = classNames('ss-header', {
    isSubSecSkills,
    isSubSecTopics,
    isSubSecChallenges,
    isSubSecparticipants,
  });
  return (
    <header className={headerClass}>
      <div className='ss-header-container'>
        <div className='ss-header--title'>
          <h1>My Weekly</h1>
          <h5>{SsName}</h5>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSectionHeader);
