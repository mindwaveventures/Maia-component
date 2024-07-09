import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import Button from '../Button/Button';
import IconComponent from '../Icons/Icons';
import { IUserInfo, MenuItemProps } from '../../types';
import { Link } from 'react-router-dom';

import './Account.css';
import useKeyboard from '../../utils/useKeyboard';
import useOutsideClick from '../../utils/useOutsideClick';

interface AccountProps {
  proxyUsers?: any[];
  userInfo: IUserInfo | any;
  menuItems: MenuItemProps[] | any;
  openTab: boolean | null;
  changeAction: (status: boolean) => void;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
}

export const Account: React.FC<AccountProps> = ({
  proxyUsers,
  userInfo,
  menuItems,
  openTab,
  changeAction,
  MainPortal = '',
  QBPortal = '',
  ResourcesPortal = '',
  OuterDomain = '',
}) => {
  const toggleBentoMenu = () => {
    changeAction(!openTab);
  };

  const accountRef = useRef<HTMLDivElement>(null);

  // Use the custom hook
  useOutsideClick(accountRef, () => {
    if (openTab) changeAction(false);
  });

  useKeyboard(changeAction);

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

  const MenuItem = ({ item }: any) => {
    return (
      <li role='menuitem'>
        <Link
          to={getAppUrl(item.appUrl, item.to) || '#'}
          onClick={item.action ? item.action : toggleBentoMenu}
          className='dropdown-item'
          style={{ cursor: 'pointer' }}
        >
          <p>{item.label}</p>
        </Link>
      </li>
    );
  };

  return (
    <div className='dropdown-group profile profile_helpguide' ref={accountRef}>
      {openTab ? (
        <Tooltip content='Avatar' direction='bottom'>
          <Button
            addClass='dropdown-toggle acc-icon'
            btnId='dropdown-toggle'
            btntype='button'
            onClick={toggleBentoMenu}
            customButton={true}
            showLabel={false}
            text='profile'
            aria-label='Close profile'
            aria-expanded='true'
            data-toggle='dropdown'
          >
            <IconComponent name='profileIcon' />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip content='Avatar' direction='bottom'>
          <Button
            addClass='dropdown-toggle acc-icon'
            btnId='dropdown-toggle'
            btntype='button'
            customButton={true}
            showLabel={false}
            text='profile'
            onClick={toggleBentoMenu}
            data-tooltip='Profile'
            aria-label='Open profile'
            aria-haspopup='true'
            aria-expanded='false'
            data-toggle='dropdown'
          >
            <IconComponent name='profileIcon' />
          </Button>
        </Tooltip>
      )}
      {openTab && (
        <div className='dropdown-menu' id='dropdown-menu'>
          <ul>
            <li className='u_name text-lg' translate='no'>
              {' '}
              {localStorage.getItem('proxyUserId')
                ? `${
                    proxyUsers?.find(
                      (proxy) =>
                        proxy.proxyUserId ===
                        localStorage.getItem('proxyUserId')
                    )?.proxyUserInfo?.firstName
                  } ${
                    proxyUsers?.find(
                      (proxy) =>
                        proxy.proxyUserId ===
                        localStorage.getItem('proxyUserId')
                    )?.proxyUserInfo?.lastName
                  }`
                : localStorage.getItem('name')
                ? localStorage.getItem('name')
                : userInfo.firstName}
            </li>
            {menuItems.map((item: MenuItemProps, index: any) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
