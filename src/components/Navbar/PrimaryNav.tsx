import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from '../../types';
import './PrimaryNav.css';

export interface PrimaryNavProps {
  navItems: MenuItem[];
  userInfo?: any;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({ navItems }) => {
  return (
    <nav
      role='navigation'
      aria-label='header navigation'
      className='pri-nav-wrap merge-bento'
    >
      <ul>
        {navItems.map((item, index) => (
          <>
            {!item.isHide && (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`pri-nav-link ${item.isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
