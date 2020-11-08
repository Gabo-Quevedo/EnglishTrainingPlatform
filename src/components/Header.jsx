import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/Header.styl';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
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
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={TrenIcon} alt='' />
          }
        </div>
        <ul>
          <li><Link to='/'>Cuenta</Link></li>
          <li><Link to='/'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
