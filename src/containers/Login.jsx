import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import goolgeIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.styl';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: 'Sandra',
    lastName: 'Rojas',
    country: 'Colombia',
    gender: 'female',
    enable: 'true',
    profile: ['user', 'admin', 'sudoAdmin'],
    skills: [
      {
        'title': 'listening',
        'id': 1,
        'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      },
      {
        'title': 'reading',
        'id': 2,
        'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      },
      {
        'title': 'writting',
        'id': 3,
        'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      },
      {
        'title': 'speaking',
        'id': 4,
        'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
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
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
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
