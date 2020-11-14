import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NextTopic from '../components/NextTopic';
import WeeklyChallenge from '../components/WeeklyChallenge';
import Participants from '../components/Participants';
import Dynamic from '../components/Dynamic';
import DynamicItem from '../components/DynamicItem';
import PrepareLink from '../components/PrepareLink';
import Requested from '../components/Requested';
import ManualRelease from '../components/ManualRelease';
import '../assets/styles/index.styl';

const Home = ({ hola }) => (
  <>
    <Header />
    <NextTopic />
    <Dynamic>
      <DynamicItem />
    </Dynamic>
    <WeeklyChallenge />
    <Participants />
    <PrepareLink />
    <Requested />
    <ManualRelease />
  </>

);

const mapStateToProps = (state) => {
  return {
    hola: state.hola,
    // nombre: state.nombre,
  };
};

export default connect(mapStateToProps, null)(Home);
