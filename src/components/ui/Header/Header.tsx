import { FC } from 'react';

import Logo from '@/components/common/Logo';
import Link from 'next/link';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list--item">
            <Link className="nav__list-item--link" href="/projects">
              Projects
            </Link>
          </li>
          <li className="header__nav-list--item">
            <Link className="nav__list-item--link" href="/about">
              About
            </Link>
          </li>

          <li className="header__nav-list--item">
            <Link className="nav__list-item--link" href="/team">
              Team
            </Link>
          </li>
          <li className="header__nav-list--item">
            <Link className="nav__list-item--link" href="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
