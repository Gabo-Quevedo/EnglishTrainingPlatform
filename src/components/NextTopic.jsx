import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NextTopic.styl';

const NextTopic = ({ topicName }) => {
  return (
    <section className='next-topic'>
      <div className='next-topic-container'>
        <h1 className='next-topic--title'>Next Topic</h1>
        <h3 className='next-topic--current'>{topicName}</h3>
        <Link to='/topics' className='next-topic--button'>Your Topic Poll</Link>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    topicName: state.topicName,
  };
};

export default connect(mapStateToProps, null)(NextTopic);
