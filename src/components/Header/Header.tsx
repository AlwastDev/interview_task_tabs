import React, { FC } from 'react';
import { HeaderProps } from './type';
import { Link } from 'react-router-dom';
import './styles.css';

const Header: FC<HeaderProps> = ({ tabs }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <nav>
            <ul className="linkWrapper">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <Link className="link" to={tab.id}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
