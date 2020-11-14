import React from 'react';
import '../assets/styles/components/Dynamic.styl';

const Dynamic = ({ children }) => (
  <section className='dynamic'>
    <div className='dynamic-container'>
      <div className='dynamic-container--title'>
        <h1>We got a Dynamic to Talk in our Meetings</h1>
        <p>
          Enjoy the Discussion but never fotget the
          <span> code</span>
        </p>
      </div>
      <div className='dynamic-cards-container'>
        {children}
      </div>
    </div>
  </section>
);

export default Dynamic;
