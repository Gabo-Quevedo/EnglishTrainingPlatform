import React from 'react';
import '../assets/styles/components/WeeklyChallenge.styl';

const WeeklyChallenge = () => (
  <section className='weekly-challenge'>
    <div className='weekly-challenge-container'>
      <h2 className='weekly-challenge--title'>
        Weeckly Challenge
      </h2>
      <p className='weecky-challenge--desc'>
        Your own Topic about anythig you want to Share
      </p>
      <a href='' className='weekly-challenge--button'>New Challenge Request</a>
    </div>
  </section>
);

export default WeeklyChallenge;
