import React from 'react';
import '../assets/styles/components/NextTopic.styl';

const NextTopic = () => (
  <section className='next-topic'>
    <div className='next-topic-container'>
      <h1 className='next-topic--title'>Next Topic</h1>
      <h3 className='next-topic--current'>Topic Name</h3>
      <a hidden href='' className='next-topic--button'>Your Topic Poll</a>
    </div>
  </section>
);

export default NextTopic;
