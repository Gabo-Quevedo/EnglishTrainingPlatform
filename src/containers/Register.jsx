import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.styl';

const Register = (props) => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const registerData = {
      email: formData.get('email'),
      name: formData.get('name'),
      password: formData.get('password'),
    };
    props.registerRequest(registerData);
    props.history.push('/');
  };

  return (
    <>
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
            />
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
            <button type='submit' className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
