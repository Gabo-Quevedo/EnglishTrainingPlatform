import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import goolgeIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.styl';

const Login = (props) => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const loginData = {
      email: formData.get('email'),
      name: formData.get('name'),
      lastName: 'Rojas',
      country: 'Colombia',
      gender: ['Male', 'female'],
      enable: 'true',
      profile: ['user', 'admin', 'sudoAdmin'],
      skills: [
        {
          'id': 1,
          'title': 'listening',
          'level': [{ 'A1': false, 'A2': false, 'B1': true, 'B2': false, 'C1': false, 'C2': false }],
        },
        {
          'id': 2,
          'title': 'reading',
          'level': [{ 'A1': false, 'A2': true, 'B1': false, 'B2': false, 'C1': false, 'C2': false }],
        },
        {
          'id': 3,
          'title': 'writting',
          'level': [{ 'A1': true, 'A2': false, 'B1': false, 'B2': false, 'C1': false, 'C2': false }],
        },
        {
          'id': 4,
          'title': 'speaking',
          'level': [{ 'A1': false, 'A2': false, 'B1': false, 'B2': false, 'C1': true, 'C2': false }],
        },
      ],
      'topics': [
        {
          'id': 1,
          'title': 'Games',
          'description': 'Games description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
        {
          'id': 2,
          'title': 'Dance',
          'description': 'Dance description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
        {
          'id': 3,
          'title': 'Work',
          'description': 'Work description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
      ],
      'challenges': [
        {
          'id': 1,
          'title': 'My Family',
          'minutes': 8,
          'description': 'My Family description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
        {
          'id': 2,
          'title': 'My Food',
          'minutes': 7,
          'description': 'My Food description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
        {
          'id': 3,
          'title': 'My Hobbies',
          'minutes': 5,
          'description': 'My Hobbies s description',
          'situation': {
            'enable': 'true',
            'request': {
              'inQue': 'true',
              'accepted': 'false',
              'rejected': 'false',
              'deleted': 'false',
              'done': 'false',
            },
          },
        },
      ],
    };
    props.loginRequest(loginData);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form ref={form} className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
            />
            <button type='submit' className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label id='first_checkbox' htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                {' '}
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={goolgeIcon} alt='google-icon' />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitter-icon' />
              {' '}
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>

  );
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
