import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Participants.styl';

const SubsectionItem = () => (
  <section className='ss-item'>
    <div className='ss-item-container'>
      <h2>SS - Title</h2>
      <p>
        Lorem  tenetur maiores consectetur vel laudantium nam.
      </p>
      <Link to='/'>i</Link>
    </div>
  </section>
);

export default SubsectionItem;
