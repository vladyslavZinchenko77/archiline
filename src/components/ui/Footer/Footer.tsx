import React, { FC } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__text">
          <h2 className="general-title footer__text-title">Archiline</h2>
          <p className="footer__text-text">
            All rights reserved Archiline, Inc.
          </p>
        </div>
        <div className="footer__socials">
          <a className="footer__socials-link" href="">
            <LinkedInIcon />
          </a>
          <a className="footer__socials-link" href="">
            <InstagramIcon />
          </a>
          <a className="footer__socials-link" href="">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
