import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addChallenge, deleteChallenge } from '../actions';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekChallengesItem from '../components/WeekChallengesItem';

import '../assets/styles/WeekChallenges.styl';

const WeekChallenges = (props) => {
  const { challenges } = props;
  const [collapse, setCollapse] = useState(false);
  const inputRef = useRef(null);

  const toogleCollapse = () => {
    setCollapse(prevCollapse => !prevCollapse);
  };

  const [form, setValues] = useState({
    id: challenges.id + 1,
    title: '',
    minutes: 0,
    description: '',
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
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addChallenge(form);
    setCollapse(prevCollapse => !prevCollapse);
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
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
              <form onSubmit={handleSubmit}>
                <div className='challengeRequest-form-container'>
                  <label htmlFor='title'>
                    Title
                    <input ref={inputRef} onChange={handleInput} name='title' id='title' type='text' />
                  </label>
                  <label htmlFor='minutes'>
                    Estimated Minutes Minutes
                    <select onChange={handleInput} name='minutes' id='minutes'>
                      <option value='0'>Select</option>
                      <option value='7'>7</option>
                      <option value='10'>10</option>
                      <option value='15'>15</option>
                      <option value='17'>17</option>
                    </select>
                  </label>
                  <label htmlFor='description'>
                    Description
                    <textarea ref={inputRef} onChange={handleInput} name='description' id='description' type='text' />
                  </label>
                  <input ref={inputRef} className='submit-button' type='submit' value='Send Request' />
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
