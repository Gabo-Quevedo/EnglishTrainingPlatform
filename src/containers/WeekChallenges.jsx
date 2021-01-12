import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addChallenge, deleteChallenge } from '../actions';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';

import '../assets/styles/WeekChallenges.styl';

const WeekChallenges = (props) => {
  const { challenges } = props;
  const [collapse, setCollapse] = useState(false);
  const form = useRef(null);

  const toogleCollapse = () => {
    setCollapse(prevCollapse => !prevCollapse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const challengeData = {
      id: 10,
      title: formData.get('title'),
      minutes: formData.get('minutes'),
      description: formData.get('description'),
      situation: {
        enable: 'true',
        request: [
          'inQue',
          'accepted',
          'rejected',
          'deleted',
          'done',
        ],
      },
    };
    props.addChallenge(challengeData);
    setCollapse(prevCollapse => !prevCollapse);
  };

  const handleTrashIcon = (id) => {
    console.log(id);
    props.deleteChallenge(id);
  };

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Challenges' isSubSecChallenges />
      {challenges.length > 0 && (
        challenges.map(item => (
          <WeekChallengesItem handleTrashIcon={handleTrashIcon} key={item.id} {...item} />
        ))
      )}
      {!challenges.length && (
        <div className='challengeAdvise-container'>
          <h1>You have not done any Challenge Yet</h1>
        </div>
      )}
      <div className='challengeRequest'>
        <div className='challengeRequest-container'>
          <button onClick={toogleCollapse} type='button'>New Chalenge Request</button>
          {collapse && (
            <div className='challengeRequest-formBody'>
              <form ref={form} onSubmit={handleSubmit}>
                <div className='challengeRequest-form-container'>
                  <label htmlFor='title'>
                    Title
                    <input name='title' id='title' type='text' />
                  </label>
                  <label htmlFor='minutes'>
                    Estimated Minutes Minutes
                    <select name='minutes' id='minutes'>
                      <option value='0'>Select</option>
                      <option value='7'>7</option>
                      <option value='10'>10</option>
                      <option value='15'>15</option>
                      <option value='17'>17</option>
                    </select>
                  </label>
                  <label htmlFor='description'>
                    Description
                    <textarea name='description' id='description' type='text' />
                  </label>
                  <input className='submit-button' type='submit' value='Send Request' />
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
    challenges: state.user.challenges,
    isCollapse: state.collapse,
  };
};

const mapDispatchToProps = {
  addChallenge,
  deleteChallenge,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekChallenges);
