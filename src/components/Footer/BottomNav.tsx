import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './BottomNav.css';
import useViewportWidth from '../../utils/useViewportWidth';
import useScrollControl from '../../utils/useScrollControl';
import IconComponent from '../Icons/Icons';
import { MenuItem } from '../../types';

export interface BottomNavProps {
  navItems: MenuItem[];
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
}

interface MenuItemProps {
  item: MenuItem;
  getAppUrl: (appUrl?: string, link?: string) => string;
}

const NavItem: React.FC<MenuItemProps> = ({ item, getAppUrl }) => {
  const location = useLocation();
  const active = location.pathname.includes(item.link || '#');

  return (
    <li onClick={() => item.action?.()}>
      <Link
        to={getAppUrl(item.appUrl, item.link)}
        className={`bottom-nav-link ${active ? 'active' : ''}`}
      >
        {item.icon ? (
          <div>{item.icon}</div>
        ) : (
          <IconComponent name={item.label} />
        )}
        {item.label}
      </Link>
    </li>
  );
};

export const BottomNav: React.FC<BottomNavProps> = ({
  navItems,
  MainPortal = '',
  QBPortal = '',
  ResourcesPortal = '',
  OuterDomain = '',
}) => {
  const viewportWidth = useViewportWidth();
  const showMenu = useScrollControl();

  const [isMobile, setIsMobile] = useState(viewportWidth <= 1023);

  useEffect(() => {
    setIsMobile(viewportWidth <= 1023);
  }, [viewportWidth]);

  const getAppUrl = (appUrl: string = '', link: string = ''): string => {
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
        return link || '#';
    }
  };

  return (
    <>
      {isMobile && (
        <nav
          role='navigation'
          className={`bottom-navbar ${!showMenu ? 'hiddenmob' : ''}`}
        >
          <ul className='bottom-nav'>
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} getAppUrl={getAppUrl} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default BottomNav;
