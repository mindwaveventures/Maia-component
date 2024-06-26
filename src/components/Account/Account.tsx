import React, { useEffect, useState } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import Button from '../Button/Button';
import IconComponent from '../Icons/Icons';
import { IUserInfo, MenuItemProps } from '../../types';
import { Link } from 'react-router-dom';

import './Account.css';

interface AccountProps {
  proxyUsers?: any[];
  userInfo: IUserInfo | any;
  menuItems: MenuItemProps[] | any;
  openTab: boolean | null;
  changeAction: (status: boolean) => void;
}

export const Account: React.FC<AccountProps> = ({
  proxyUsers,
  userInfo,
  menuItems,
  openTab,
  changeAction,
}) => {
  const toggleBentoMenu = () => {
    changeAction(!openTab);
  };
  const MenuItem = ({ item }: any) => {
    return (
      <li role='menuitem'>
        <Link
          to={item.to}
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
    <div className='dropdown-group profile profile_helpguide'>
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
