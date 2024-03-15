'use client';
import { FC, useState } from 'react';

import Logo from '@/components/common/Logo';
import Link from 'next/link';

import './Header.scss';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Logo />
      <button
        type="button"
        className={isMenuOpen ? 'menu-btn-open' : 'menu-btn'}
        onClick={toggleMenu}
      >
        <div className="menu-icon"></div>
      </button>
      <nav className={'header__nav'}>
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
      <nav className={isMenuOpen ? 'header__nav-open' : 'header__nav-close'}>
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
