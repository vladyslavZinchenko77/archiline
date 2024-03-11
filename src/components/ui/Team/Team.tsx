import React, { FC } from 'react';

import Employee from '@/components/common/Employee';
import alex from '../../../../public/img/alex.jpg';

import './Team.scss';

const Team: FC = () => {
  return (
    <section className="team">
      <div className="team__wrap">
        <div className="team__text">
          <h2 className="general-title team__text-title">Meet our team</h2>
          <p className="general-text team__text-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis.
          </p>
        </div>
        <ul className="team__list">
          <li className="team__list-item">
            <Employee name="Alex" title="CEO" url={alex} alt="Alex" />
          </li>
          <li className="team__list-item">
            <Employee name="Nickolay" title="Owner" alt="Nickolay" />
          </li>
          <li className="team__list-item">
            <Employee
              name="Dmytro"
              alt="Dmytro"
              title="Construction engineer"
            />
          </li>
          <li className="team__list-item">
            <Employee name="Yuri" title="Architect" alt="Yuri" />
          </li>
          <li className="team__list-item">
            <Employee name="Tetiana" title="Architect" alt="Tetiana" />
          </li>
          <li className="team__list-item">
            <Employee name="Valentina" title="UI/UX Designer" alt="Valentina" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
