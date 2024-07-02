import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuItem } from '../../types';
import './PrimaryNav.css';

export interface PrimaryNavProps {
  navItems: MenuItem[];
  userInfo?: any;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({
  navItems,
  MainPortal = '',
  QBPortal = '',
  ResourcesPortal = '',
  OuterDomain = '',
}) => {
  const location = useLocation();
  const getAppUrl = (appUrl: string | undefined, link: string | undefined) => {
    switch (appUrl) {
      case 'MainPortal':
        return `${MainPortal}${link}`;
      case 'QBPortal':
        return `${QBPortal}${link}`;
      case 'ResourcesPortal':
        return `${ResourcesPortal}${link}`;
      case 'OuterDomain':
        return `${OuterDomain}${link}`;
      case 'Action':
        return '#';
      default:
        return link ? link : '#';
    }
  };

  return (
    <nav
      role='navigation'
      aria-label='header navigation'
      className='pri-nav-wrap merge-bento'
    >
      <ul>
        {navItems.map(
          (item, index) =>
            !item.isHide && (
              <li key={index} onClick={() => item.action?.()}>
                <Link
                  to={getAppUrl(item.appUrl, item.link) || '#'}
                  className={`pri-nav-link ${
                    item.link === location.pathname ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
