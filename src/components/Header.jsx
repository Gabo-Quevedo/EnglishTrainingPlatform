import React from 'react';
import { Link } from 'react-router-dom';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/Header.styl';

const Header = () => (
  <header className='header'>
    <div className='header--timeleft-container'>
      <img src={TrenIcon} alt='logo-tren' />
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
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={TrenIcon} alt='' />
      </div>
      <ul>
        <li><Link to='/'>Cuenta</Link></li>
        <li><Link to='/'>Cerrar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
