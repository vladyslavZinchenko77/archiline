import React, { FC } from 'react';

import './NextProject.scss';

const NextProject: FC = () => {
  return (
    <section className="next-proj">
      <div className="next-proj__wrap">
        <div className="next-proj__text">
          <p className="next-proj__text-text">Get in touch</p>
          <h2 className="next-proj__text-title">
            Think we would be a good fit for your next project?
          </h2>
        </div>
        <a className="next-proj__link" href="#">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default NextProject;
