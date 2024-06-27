import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuItem } from '../../types';
import './PrimaryNav.css';

export interface PrimaryNavProps {
  navItems: MenuItem[];
  userInfo?: any;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({ navItems }) => {
  const location = useLocation();
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
              <li key={index} onClick={() => item.action?.()}>
                <Link
                  to={item.link || '#'}
                  className={`pri-nav-link ${
                    item.link === location.pathname ? 'active' : ''
                  }`}
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
