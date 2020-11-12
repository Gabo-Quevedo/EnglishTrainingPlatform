import React from 'react';
import { connect } from 'react-redux';

import SubSectionHeader from '../components/SubSectionHeader';

const SubSection = ({ hola }) => (
  <>
    <SubSectionHeader />
  </>

);

const mapStateToProps = (state) => {
  return {
    hola: state.hola,
    // nombre: state.nombre,
  };
};

export default connect(mapStateToProps, null)(SubSection);
