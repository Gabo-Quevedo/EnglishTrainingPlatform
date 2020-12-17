import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Partners.styl';

const Partners = ({ children }) => (
  <section className='partners'>
    <Link to='/partners'>
      <div className='partners-container'>
        <h1>Partners</h1>
        {children}
      </div>
    </Link>
  </section>
);

export default Partners;
