import React from 'react';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import Participants from '../components/Participants';
import Dynamic from '../components/Dynamic';
import '../assets/styles/index.styl';

const Home = () => (
  <>
    <NextTopic />
    <Dynamic />
    <WeeklyChallenge />
    <Participants />
  </>

);

export default Home;
