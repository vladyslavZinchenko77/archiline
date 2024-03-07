import React, { FC } from 'react';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__text">
          <h2 className="footer__text-title">Archiline</h2>
          <p className="footer__text-text">
            All rights reserved Archiline, Inc.
          </p>
        </div>
        <div className="footer__socials">
          <a href="">linkedin</a>
          <a href="">instagram</a>
          <a href="">facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
