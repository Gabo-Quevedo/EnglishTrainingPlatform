import React from 'react';
import train from '../assets/static/icons/train.svg';

import '../assets/styles/NotFound.styl';

const NotFound = () => {
  return (
    <div className='notFound-container'>
      <h3>Page Not Found</h3>
      <div className='notFound-container__signal'>
        <span role='img' aria-label='Signals'>🚥🚦🛑🚧</span>
        <img src={train} alt='Trencito Chocando' />
      </div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
