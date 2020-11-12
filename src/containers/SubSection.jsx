import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';
import SubsectionItem from '../components/SubsectionItem';

const SubSection = ({ hola }) => (
  <>
    <SubSectionHeader isSubSecChallenge />
    <SubsectionItem />
  </>

);

const mapStateToProps = (state) => {
  return {
    hola: state.hola,
    // nombre: state.nombre,
  };
};

export default connect(mapStateToProps, null)(SubSection);
