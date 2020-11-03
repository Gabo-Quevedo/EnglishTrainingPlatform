import React from 'react';
import { connect } from 'react-redux';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import Participants from '../components/Participants';
import Dynamic from '../components/Dynamic';
import '../assets/styles/index.styl';

const Home = ({ hola }) => (
  <>
    <NextTopic />
    <Dynamic />
    <WeeklyChallenge />
    <Participants />
  </>

);

const mapStateToProps = (state) => {
  return {
    hola: state.hola,
    // nombre: state.nombre,
  };
};

export default connect(mapStateToProps, null)(Home);
