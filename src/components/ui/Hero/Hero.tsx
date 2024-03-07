import React, { FC } from 'react';
import Image from 'next/image';

import './Hero.scss';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__left-text-wrap">
          <p className="general-text left__sub-title">Archiline</p>
          <h1 className="left__title">The home of beautiful architecture.</h1>
          <p className="general-text left__text">
            We are an architecture firm with a focus on beautiful but functional
            design. At its heart, we believe design is about usability and
            accessibility — these are the guiding principles for our work. Read
            more about our previous projects, our process and our team below.
          </p>

          <a className="left__link" href="#">
            Read more
          </a>
        </div>
      </div>
      <div className="hero__right">
        <Image
          className="hero__right-img"
          width={1440}
          height={1440}
          src={'/img/arch.jpg'}
          alt="arch"
        />
      </div>
    </section>
  );
};

export default Hero;
