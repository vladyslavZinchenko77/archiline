import React, { FC } from 'react';
import Image from 'next/image';

import './Projects.scss';

const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="projects__wrap">
        <div className="projects__text-wraps">
          <h2 className="general-title projects__title">Featured projects</h2>
          <p className="general-text projects__text">
            Some of the latest and greatest projects from us here at
            Wishbone+Partners.
          </p>
        </div>
        <ul className="projects__list">
          <li className="projects__list-item">
            <Image
              className="projects__list-item--img"
              width={500}
              height={500}
              alt="project"
              src={'/img/proj4.jpg'}
            />
          </li>
          <li className="projects__list-item">
            <Image
              className="projects__list-item--img"
              width={500}
              height={500}
              alt="project"
              src={'/img/proj5.jpg'}
            />
          </li>
          <li className="projects__list-item">
            <Image
              className="projects__list-item--img"
              width={500}
              height={500}
              alt="project"
              src={'/img/proj6.jpg'}
            />
          </li>
        </ul>
        <div className="projects__link-wrap">
          <a className="projects__link" href="#">
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
