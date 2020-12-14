import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <div className='app-container'>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
