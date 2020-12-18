import React, { useState } from 'react';
import { connect } from 'react-redux';
import { collapseChallengeForm, addChallenge } from '../actions';
import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';

import '../assets/styles/WeekChallenges.styl';

const WeekChallenges = (props) => {
  const { challenges, isCollapse } = props;
  const [form, setValues] = useState({
    title: '',
    duration: 0,
    description: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addChallenge(form);
    console.log(form);
  };
  const toogleCollapse = () => {
    props.collapseChallengeForm({ isCollapse: isCollapse[0] });
  };
  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Challenges' isSubSecChallenges />
      {challenges.length > 0 && (
        challenges.map(item => (
          <WeekChallengesItem key={item.id} {...item} />
        ))
      )}
      <div className='challengeRequest'>
        <div className='challengeRequest-container'>
          <button onClick={toogleCollapse} type='button'>New Challenge Request</button>
          {!isCollapse && (
            <div className='challengeRequest-formBody'>
              <form onSubmit={handleSubmit}>
                <div className='challengeRequest-form-container'>
                  <label htmlFor='title'>
                    Title
                    <input onChange={handleInput} name='title' id='title' type='text' />
                  </label>
                  <label htmlFor='duration'>
                    Estimated Minutes Duration
                    <select onChange={handleInput} name='duration' id='duration'>
                      <option value='0'>Select</option>
                      <option value='7'>7</option>
                      <option value='10'>10</option>
                      <option value='15'>15</option>
                      <option value='17'>17</option>
                    </select>
                  </label>
                  <label htmlFor='description'>
                    Description
                    <textarea onChange={handleInput} name='description' id='description' type='text' />
                  </label>
                  <input className='submit-button' onClick={handleSubmit} type='submit' value='Send Request' />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    challenges: state.users[1].challenges,
    isCollapse: state.collapse[0],
  };
};

const mapDispatchToProps = {
  collapseChallengeForm,
  addChallenge,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekChallenges);
