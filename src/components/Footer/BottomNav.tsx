import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './BottomNav.css';
import useViewportWidth from '../../utils/useViewportWidth';
import useScrollControl from '../../utils/useScrollControl';

export interface BottomNavProps {
  navItems: NavItemData[];
  isMobile: boolean;
  showMenu: boolean;
}

export interface NavItemData {
  to: string;
  icon: JSX.Element;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemData> = ({ to, icon, label, isActive }) => {
  const location = useLocation();
  const active = isActive ?? location.pathname.includes(to);

  return (
    <li>
      <Link to={to} className={`bottom-nav-link ${active ? 'active' : ''}`}>
        {icon}
        {label}
      </Link>
    </li>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ navItems }) => {
  const viewportWidth = useViewportWidth();
  const showMenu = useScrollControl();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (viewportWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [viewportWidth]);
  return (
    <>
      {isMobile && (
        <nav
          role='navigation'
          className={`bottom-navbar ${!showMenu ? 'hiddenmob' : ''}`}
        >
          <ul className='bottom-nav'>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                to={item.to || '#'}
                icon={item.icon}
                label={item.label}
                isActive={item.isActive}
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default BottomNav;
