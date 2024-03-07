import React, { FC } from 'react';

import Image from 'next/image';

import './Logo.scss';

const Logo: FC = () => {
  return (
    <a className="logo" href="/">
      <Image
        alt="Archiline-logo"
        width={40}
        height={40}
        src={'/svg/logo.svg'}
      />
      <h3 className="logo__text">Archiline</h3>
    </a>
  );
};

export default Logo;
