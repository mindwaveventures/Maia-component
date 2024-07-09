import '../BentoMenu/bento.css';
import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import { Tooltip } from '../Tooltip/Tooltip';
import { MenuItemProps } from '../../types';
import IconComponent from '../Icons/Icons';
import useKeyboard from '../../utils/useKeyboard';
import useOutsideClick from '../../utils/useOutsideClick';

interface MenuProps {
  menuItems: MenuItemProps[];
  changeAction: (status: boolean) => void;
  openTab: boolean;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
}

export const Menu: React.FC<MenuProps> = ({
  menuItems,
  changeAction,
  openTab,
  MainPortal = '',
  QBPortal = '',
  ResourcesPortal = '',
  OuterDomain = '',
}) => {
  const getAppUrl = (appUrl: string, link: string) => {
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
    changeAction(!openTab);
  };

  const bentoRef = useRef<HTMLDivElement>(null);

  // Use the custom hook
  useOutsideClick(bentoRef, () => {
    if (openTab) changeAction(false);
  });

  useKeyboard(changeAction);

  const MenuItem = ({ item }: { item: any }) => {
    return (
      <>
        {!item.isHide && (
          <li role='menuitem'>
            <Link
              to={getAppUrl(item.appUrl, item.to) || '#'}
              onClick={item.action ? item.action : toggleBentoMenu}
              className='bento-blks'
              style={{ cursor: 'pointer' }}
            >
              {item.icon && <div>{item.icon}</div>}
              <IconComponent name={item.label} />
              <p>{item.label}</p>
            </Link>
          </li>
        )}
      </>
    );
  };

  return (
    <div className='bento_helpguide hidden lg:block' ref={bentoRef}>
      <div className='put-bento-desktop'>
        <div className='bento-desk-wrap'>
          {openTab ? (
            <Tooltip content='Bento Close' direction='top'>
              <Button
                btntype='button'
                customButton={true}
                btnCatogery='toggle'
                status={openTab}
                showLabel={false}
                text='close bento'
                ariaLabel='Close bento menu'
                aria-expanded='true'
                onClick={toggleBentoMenu}
                addClass='bento-icon acc-icon'
                data-tooltip='Bento menu'
              >
                <IconComponent name='closeIcon' />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip content='Bento menu' direction='top'>
              <Button
                btnId='accessibileMenu'
                btntype='button'
                customButton={true}
                btnCatogery='toggle'
                status={openTab}
                showLabel={false}
                text='open bento'
                ariaLabel='Open bento menu'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={toggleBentoMenu}
                addClass='bento-icon acc-icon'
                data-tooltip='Bento menu'
              >
                <IconComponent name='openIcon' />
              </Button>
            </Tooltip>
          )}
          {openTab && (
            <div className='bento-content' id='bento-menu-content'>
              <div className='menu-wrapper'>
                <ul
                  aria-labelledby='accessibileMenu'
                  role='menu'
                  className='bento-row grid-cols-2'
                >
                  {menuItems.map((item: MenuItemProps, index: any) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
