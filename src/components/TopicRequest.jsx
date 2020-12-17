import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/styles/components/TopicRequest.styl';

const TopicRequest = () => {
  const collapse = false;
  return (
    <div className='topicRequest'>
      <div className='topicRequest-container'>
        <button type='button'>New Topic Request</button>
        {collapse && (
          <div className='topicRequest-formBody'>
            <form action=''>
              <div className='topicRequest-form-container'>
                <label htmlFor='ch-title'>
                  Title
                  <input id='ch-title' type='text' />
                </label>
                <label htmlFor='ch-description'>
                  Description
                  <textarea id='ch-description' type='text' />
                </label>
                <input className='submit-button' type='submit' value='Send Request' />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicRequest;
