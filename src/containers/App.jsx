import React from 'react';
import Header from '../components/Header';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import Participants from '../components/Participants';
import MeetingDynamic from '../components/MeetingDynamic';
import Footer from '../components/Footer';
import '../assets/styles/index.styl';

const App = () => (
  <div className='App'>
    <>
      <Header />
      <NextTopic />
      <WeeklyChallenge />
      <Participants />
      <MeetingDynamic />
      <Footer />
    </>
  </div>

);

export default App;
