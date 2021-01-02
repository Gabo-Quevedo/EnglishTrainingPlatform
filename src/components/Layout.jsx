import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, user }) => (
  <div className='App'>
    <Header user={user} />
    {children}
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Layout);
