import React, { FC } from 'react';

import './WhatWeDo.scss';

const WhatWeDo: FC = () => {
  return (
    <section className="wedo">
      <div className="wedo__wrap">
        <p className="wedo__text">Our process</p>
        <h2 className="wedo__title">How we do what we do.</h2>
        <ul className="wedo__list">
          <li className="wedo__list-item">Commercial buildings</li>
          <li className="wedo__list-item">Residential apartment buildings</li>
          <li className="wedo__list-item">Individual houses</li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
