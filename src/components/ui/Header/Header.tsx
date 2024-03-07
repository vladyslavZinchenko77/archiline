import { FC } from 'react';

import Logo from '@/components/common/Logo';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list--item">
            <a className="nav__list-item--link" href="#">
              Projects
            </a>
          </li>
          <li className="header__nav-list--item">
            <a className="nav__list-item--link" href="#">
              About
            </a>
          </li>
          <li className="header__nav-list--item">
            <a className="nav__list-item--link" href="#">
              News
            </a>
          </li>
          <li className="header__nav-list--item">
            <a className="nav__list-item--link" href="#">
              Team
            </a>
          </li>
          <li className="header__nav-list--item">
            <a className="nav__list-item--link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
