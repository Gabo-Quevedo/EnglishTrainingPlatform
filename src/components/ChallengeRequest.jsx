import React from 'react';

const ChallengeRequest = () => {
  return (
    <div className='challengeRequest'>
      <div className='challengeRequest-container'>
        <button onClick={toogleCollapse} type='button'>New Challenge Request</button>
        {isCollapse && (
          <div className='challengeRequest-formBody'>
            <form action=''>
              <div className='challengeRequest-form-container'>
                <label htmlFor='ch-title'>
                  Title
                  <input id='ch-title' type='text' />
                </label>
                <label htmlFor='ch-duration'>
                  Estimated Minutes Duration
                  <select name='ch-duration' id='ch-duration'>
                    <option value='0'>Select</option>
                    <option value='7'>7</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='17'>17</option>
                    <option value=''>Special Ocasion</option>
                  </select>
                </label>
                <label htmlFor='ch-description'>
                  Description
                  <textarea id='ch-description' type='text' />
                </label>
                <input className='submit-button' onClick={handleSubmit} type='submit' value='Send Request' />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeRequest;
