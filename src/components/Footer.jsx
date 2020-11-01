import React from 'react';
import '../assets/styles/components/Footer.styl';

import LogoOrganic from '../assets/static/LogoOrganic12.svg';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <section className='footer-container--info'>
        <li><a href=''>Admins</a></li>
        <li><a href=''>Why we create this</a></li>
        <li><a href=''>Inspired by</a></li>
      </section>
      <section className='footer-container--logo'>
        <img src={LogoOrganic} alt='' />
      </section>
    </div>
  </footer>
);

export default Footer;
