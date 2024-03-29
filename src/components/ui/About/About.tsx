import React, { FC } from 'react';

import Employee from '@/components/common/Employee';

import './About.scss';

const About: FC = () => {
  return (
    <section className="about">
      <div className="about__wrap">
        <div className="about__title-wrap">
          <h2 className="general-title">Our firm</h2>
        </div>

        <div className="about__text-wrap">
          <p className="general-text about__text-item">
            Archiline is a leading company with over a decade of experience in
            the development of residential, commercial properties, and
            structures. Throughout this time, we have established ourselves as a
            reliable partner, providing high-quality and innovative solutions to
            our clients.
          </p>
          <p className="general-text about__text-item">
            Our team specializes in the development of projects of various
            scales - from residential complexes to commercial centers. We have a
            deep understanding of our clients' needs and effectively translate
            them into reality.
          </p>
          <p className="general-text about__text-item">
            In addition, Archiline is involved in developing marketing
            strategies for future projects, as well as providing services for
            the development of websites and mobile applications. We understand
            the importance of digital presence in the modern world and offer
            innovative solutions aimed at the success of our clients.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Employee style={{ marginTop: 24 }} name="Alex" title="CEO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
