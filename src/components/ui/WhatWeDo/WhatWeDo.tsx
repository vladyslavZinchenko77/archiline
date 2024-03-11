import React, { FC } from 'react';

import Image from 'next/image';

import './WhatWeDo.scss';

const WhatWeDo: FC = () => {
  return (
    <section className="wedo">
      <div className="wedo__wrap">
        <p className="general-text wedo__text">Our process</p>
        <h2 className="general-title wedo__title">How we do what we do.</h2>
        <ul className="wedo__list">
          <li className="wedo__list-item">
            <Image
              width={50}
              height={50}
              src={'/svg/shop.svg'}
              alt="Commercial buildings"
            />
            <p className="wedo__list-item--text">Commercial buildings</p>
          </li>
          <li className="wedo__list-item">
            <Image
              width={50}
              height={50}
              src={'/svg/commerce.svg'}
              alt="Residential apartment buildings"
            />
            <p className="wedo__list-item--text">
              Residential apartment buildings
            </p>
          </li>
          <li className="wedo__list-item">
            <Image
              width={50}
              height={50}
              src={'/svg/house.svg'}
              alt="Residential apartment buildings"
            />
            <p className="wedo__list-item--text">Individual houses</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
