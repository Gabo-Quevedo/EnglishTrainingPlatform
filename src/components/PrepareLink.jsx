import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/PrepareLink.styl';

const PrepareLink = () => (
  <section className='prepare-link'>
    <Link to='/'>
      <div className='prepare-link-container'>
        <h1>Prepare Link</h1>
      </div>
    </Link>
  </section>
);

export default PrepareLink;
