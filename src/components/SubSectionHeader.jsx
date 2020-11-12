import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import TrenIcon from '../assets/static/tren-icon.svg';
import '../assets/styles/components/SubSectionHeader.styl';

const SubSectionHeader = (props) => {
  const { user, isSubSecChallenge } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('ss-header', {
    isSubSecChallenge,
  });
  return (
    <header className={headerClass}>
      <div className='ss-header--title'>
        <h1>My Weekly</h1>
        <h5>Challenges</h5>
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
          {hasUser ? <li><Link to='/' onClick={handleLogout}>Cerrar Sesión</Link></li> : (
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

export default connect(mapStateToProps, mapDispatchToProps)(SubSectionHeader);
