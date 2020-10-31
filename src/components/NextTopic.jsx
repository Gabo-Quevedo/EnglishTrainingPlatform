import React from 'react';
import '../assets/styles/components/NextTopic.styl';

const NextTopic = () => (
  <section className='next-topic'>
    <h1 className='next-topic--title'>Next Topic</h1>
    <h3 className='next-topic--current'>Topic Name</h3>
    <a href='' className='next-topic--button'>your Topic Poll</a>
  </section>
);

export default NextTopic;
