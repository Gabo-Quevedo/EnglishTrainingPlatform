import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/ManualRelease.styl';

const ManualRelease = () => (
  <section className='manual-release'>
    <Link to='/'>
      <div className='manual-release-container'>
        <h1>Release Link Manually</h1>
      </div>
    </Link>
  </section>
);

export default ManualRelease;
