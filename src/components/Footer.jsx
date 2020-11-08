import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.styl';

import LogoOrganic from '../assets/static/LogoOrganic12.svg';

const Footer = () => (
  <footer>
    <div className='footer-container'>
      <section className='footer-container--info'>
        <li><Link to='/'>Admins</Link></li>
        <li><Link to='/'>Why we create this</Link></li>
        <li><Link to='/'>Inspired by</Link></li>
      </section>
      <section className='footer-container--logo'>
        <img src={LogoOrganic} alt='' />
      </section>
    </div>
  </footer>
);

export default Footer;
