import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Participants.styl';

const Participants = ({ children }) => (
  <section className='participants'>
    <Link to='/'>
      <div className='participants-container'>
        <h1>Participants</h1>
        {children}
      </div>
    </Link>
  </section>
);

export default Participants;
