import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/Header.styl';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
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
          {hasUser ?
            <li><Link to='/'>{user.name}</Link></li> :
            null
          }
          {hasUser ? (
            <>
              <li><Link to='/skills'>My Skills</Link></li>
              <li><Link to='/' onClick={handleLogout}>Log Out</Link></li>
              {' '}

            </>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}

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
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
