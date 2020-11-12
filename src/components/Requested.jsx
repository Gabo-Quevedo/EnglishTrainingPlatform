import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Requested.styl';

const Requested = () => (
  <section className='requested'>
    <div className='requested-challenges-container'>
      <Link className='requested-challenges--link' to='/'>
        <h1>Requested Challenges</h1>
      </Link>
    </div>
    <div className='requested-topics-container'>
      <Link className='requested-topics--link' to='/'>
        <h1>Requested Topics</h1>
      </Link>
    </div>
  </section>
);

export default Requested;
