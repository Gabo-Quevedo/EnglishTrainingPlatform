import React from 'react';
import Header from '../components/Header';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import Participants from '../components/Participants';
import Dynamic from '../components/Dynamic';
import Footer from '../components/Footer';
import '../assets/styles/index.styl';

const Home = () => (
  <div className='Home'>
    <>
      <Header />
      <NextTopic />
      <Dynamic />
      <WeeklyChallenge />
      <Participants />
      <Footer />
    </>
  </div>

);

export default Home;
