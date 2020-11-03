import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NextTopic.styl';

const NextTopic = () => (
  <section className='next-topic'>
    <div className='next-topic-container'>
      <h1 className='next-topic--title'>Next Topic</h1>
      <h3 className='next-topic--current'>Topic Name</h3>
      <Link to='/' className='next-topic--button'>Your Topic Poll</Link>
    </div>
  </section>
);

export default NextTopic;
