import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/WeeklyChallenge.styl';

const WeeklyChallenge = () => (
  <section className='weekly-challenge'>
    <div className='weekly-challenge-container'>
      <h2 className='weekly-challenge-container--title'>
        Weekly Challenge
      </h2>
      <p className='weecky-challenge-container--desc'>
        Your own Topic about anythig you want to Share
      </p>
      <Link to='/challenges' className='weekly-challenge-container--button'>New Challenge Request</Link>
    </div>
  </section>
);

export default WeeklyChallenge;
