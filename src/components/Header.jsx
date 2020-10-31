import React from 'react';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/Header.styl';

const Header = () => (
  <header className='header'>
    <img src={TrenIcon} alt='logo-tren' />
    <div className='header--timeleft-container'>
      <h1 className='header--time-left'>
        <span>3</span>
        {' '}
        Days
        {' '}
        <span>10:33</span>
        {' '}
        Hours
      </h1>
      <p>Next Meeting</p>
    </div>
    <a className='header--button' href="/">Conduct Code</a>
  </header>
);

export default Header;
