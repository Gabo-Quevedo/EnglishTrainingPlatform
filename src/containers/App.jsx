import React from 'react';
import Header from '../components/Header';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import '../assets/styles/index.styl';

const App = () => (
  <div className='App'>
    <>
      <Header />
      <NextTopic />
      <WeeklyChallenge />
    </>
  </div>

);

export default App;
