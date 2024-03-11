import React from 'react';

import Image from 'next/image';
import './Customers.scss';

const Customers = () => {
  return (
    <section className="customers">
      <div className="customers__wrap">
        <div className="customers__left">
          <p className="customers__left-text">prior clients</p>
          <h2 className="general-title customers__left-title">
            Happy customers.
          </h2>
          <p className="customers__left-text">
            Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>
        <div className="customers__right">
          <ul className="customers__right-list">
            <li className="customers__right-list--item">
              <Image
                src={'/svg/comp1.svg'}
                width={128}
                height={30}
                alt="company logo"
              />
            </li>
            <li className="customers__right-list--item">
              <Image
                src={'/svg/comp2.svg'}
                width={128}
                height={30}
                alt="company logo"
              />
            </li>
            <li className="customers__right-list--item">
              <Image
                src={'/svg/comp3.svg'}
                width={128}
                height={30}
                alt="company logo"
              />
            </li>
            <li className="customers__right-list--item">
              <Image
                src={'/svg/comp4.svg'}
                width={128}
                height={30}
                alt="company logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Customers;
