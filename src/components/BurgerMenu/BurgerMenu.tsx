import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './BurgerMenu.css';
import BentoCloseIcon from '../../assets/svgs/BentoClose';
import { Logo } from '../Logo/Logo';
import IconComponent from '../Icons/Icons';

interface MenuItemProps {
  item: IBurgerMenuChildValues;
  isActive: boolean;
  onClick: (item: IBurgerMenuChildValues) => void;
  getAppUrl: (appUrl?: string, link?: string) => string;
}

interface MenuChildrenProps {
  children: IBurgerMenuChildValues[];
  onSelect: (child: IBurgerMenuChildValues) => void;
  getAppUrl: (appUrl?: string, link?: string) => string;
}

interface IBurgerMenuChildValues {
  label?: string;
  link?: string;
  children?: IBurgerMenuChildValues[];
  name?: string;
  action?: () => void;
  appUrl?:
    | 'MainPortal'
    | 'QBPortal'
    | 'ResourcesPortal'
    | 'OuterDomain'
    | 'Action';
}

interface BurgerMenuProps {
  menuData: IBurgerMenuChildValues[];
  Name?: string;
  id?: string;
  LogoUrl?: string;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isActive,
  onClick,
  getAppUrl,
}) => {
  const handleMenuClick = () => {
    if (item.action) {
      item.action();
    } else {
      onClick(item);
    }
  };

  return (
    <li
      className={`list-group-item ${isActive ? 'active' : 'item-separator'}`}
      onClick={handleMenuClick}
    >
      <Link to={getAppUrl(item.appUrl, item.link) || '#'} className=''>
        {item.name}
      </Link>
      {item.children && item.children.length > 0 && (
        <div className='add-icon'>
          <span>{isActive ? '-' : '+'}</span>
        </div>
      )}
    </li>
  );
};

const MenuChildrenItems: React.FC<MenuChildrenProps> = ({
  children,
  onSelect,
  getAppUrl,
}) => (
  <ul className='list-group sub'>
    {children.map((child, idx) => (
      <li
        key={`submenu-list-item-${idx}`}
        className={`list-group-item ${
          children.length - 1 === idx ? 'item-separator' : ''
        }`}
      >
        <Link
          to={getAppUrl(child.appUrl, child.link) || '#'}
          onClick={() => onSelect(child)}
          className=''
        >
          {child.label}
        </Link>
      </li>
    ))}
  </ul>
);

const useMenuState = (initialState = null) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(initialState);

  const toggleMenu = (item: IBurgerMenuChildValues) => {
    setSelectedMenu(selectedMenu === item.name ? null : item.name || null);
  };

  return { selectedMenu, toggleMenu };
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  menuData,
  Name = '',
  id,
  LogoUrl = '',
  MainPortal = '',
  QBPortal = '',
  ResourcesPortal = '',
  OuterDomain = '',
}) => {
  const { selectedMenu, toggleMenu } = useMenuState();
  const [mobileToggle, setMobileToggle] = useState<boolean>(false);

  const getAppUrl = (appUrl?: string, link?: string) => {
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

  const toggleBentoMenu = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <div className='flex items-center lg:hidden'>
      <button
        type='button'
        className='bento-icon acc-icon'
        onClick={toggleBentoMenu}
        aria-label='Bento menu'
        aria-haspopup='true'
      >
        <IconComponent name='burgerMenu' addClass='bento-icon fill-primary' />
      </button>
      {mobileToggle ? (
        <div className='burger-menu-section'>
          <div className='put-bento-desktop'>
            <div className='bento-desk-wrap'>
              <div className='bento-content' id='bento-menu-content'>
                <div className='burger-header flex items-center gap-4'>
                  <button
                    type='button'
                    className='bento-icon acc-icon'
                    aria-label='Bento menu'
                    aria-haspopup='true'
                    onClick={() => setMobileToggle(false)}
                  >
                    <BentoCloseIcon className='bento-icon' />
                  </button>
                  <div className='client-logo flex items-center'>
                    <div className='footer-logo-blk'>
                      <div className='sm-h-5' />
                      <Logo title={Name} key={id} imageUrl={LogoUrl} />
                    </div>
                  </div>
                </div>
                <div className='menu-items'>
                  <ul className='list-group'>
                    {menuData.map((item, idx) => {
                      const isActive = selectedMenu === item.name;
                      return (
                        <React.Fragment key={`menu-list-${idx}`}>
                          <MenuItem
                            item={item}
                            isActive={isActive}
                            onClick={toggleMenu}
                            getAppUrl={getAppUrl}
                          />
                          {isActive &&
                            item.children &&
                            item.children.length > 0 && (
                              <MenuChildrenItems
                                children={item.children}
                                onSelect={toggleMenu}
                                getAppUrl={getAppUrl}
                              />
                            )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BurgerMenu;
