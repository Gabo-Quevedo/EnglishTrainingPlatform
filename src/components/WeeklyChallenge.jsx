import React from 'react';
import '../assets/styles/components/WeeklyChallenge.styl';
import weeklyChallenge from '../assets/static/weeklyChallenge.svg';

const WeeklyChallenge = () => (
  <section className='weekly-challenge'>
    <div className='weekly-challenge-container' style={`background-image:url(${weeklyChallenge})`} />
    <a href='' className='weekly-challenge--button'>New Challenge Request</a>
  </section>
);

export default WeeklyChallenge;
