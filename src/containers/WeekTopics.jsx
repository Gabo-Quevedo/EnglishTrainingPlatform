import React, { useState } from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import WeekTopicsItem from '../components/WeekTopicsItem';

const WeekChallenges = (props) => {
  const { topics } = props;

  const [collapse, setCollapse] = useState(true);

  const toogleCollapse = () => {
    setCollapse(!collapse);
  };

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
    console.log(challenges);
  };

  return (
    <div className='ss-header-main-container'>
      <SubSectionHeader SsName='Topics' isSubSecTopics />
      {topics.length > 0 && (
        topics.map(item => (
          <WeekTopicsItem key={item.id} {...item} />
        ))
      )}
      <div className='topicRequest'>
        <div className='topicRequest-container'>
          <button onClick={toogleCollapse} type='button'>New Topic Request</button>
          {collapse && (
            <div className='topicRequest-formBody'>
              <form onSubmit={handleSubmit}>
                <div className='topicRequest-form-container'>
                  <label htmlFor='title'>
                    Title
                    <input onChange={handleInput} name='title' id='title' type='text' />
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
    topics: state.users[0].topics,
  };
};

export default connect(mapStateToProps, null)(WeekChallenges);
