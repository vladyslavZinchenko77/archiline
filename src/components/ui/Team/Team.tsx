import React, { FC } from 'react';

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
          <li className="team__list-item"></li>
          <li className="team__list-item"></li>
          <li className="team__list-item"></li>
          <li className="team__list-item"></li>
          <li className="team__list-item"></li>
          <li className="team__list-item"></li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
