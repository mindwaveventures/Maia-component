import React, { ReactNode } from 'react';

import { Tooltip } from '../Tooltip/Tooltip';
import Button from '../Button/Button';

import "./notification.css"
import IconComponent from '../Icons/Icons';

interface NotificationProps {
  dropStatus: boolean;
  openNotify: () => Promise<void>;
  goNotifications: () => void;
  totalNotifications: number;
  children: ReactNode;
}

export const NavNotification: React.FC<NotificationProps> = ({
  dropStatus,
  openNotify,
  totalNotifications,
  goNotifications,
  children,
}) => {
  return (
    <div className="notification">
      {dropStatus ? (
        <Tooltip content="Notification" direction="bottom">
          <Button
            btntype="button"
            customButton={true}
            btnCatogery="toggle"
            status={dropStatus}
            showLabel={false}
            text="close notification"
            aria-label="Close Notification"
            aria-expanded="true"
            onClick={openNotify}
            addClass="icon-wrapper acc-icon"
            data-tooltip="Notification"
          >
            {totalNotifications > 0 && <div className="notify-dot" />}
            <IconComponent name="notifyBell"/>
            &#8203;
          </Button>
        </Tooltip>
      ) : (
        <Tooltip content="Notification" direction="bottom">
          <Button
            btntype="button"
            customButton={true}
            btnCatogery="toggle"
            status={dropStatus}
            showLabel={false}
            text="open notification"
            aria-label="Open Notification"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={openNotify}
            addClass="icon-wrapper acc-icon"
            data-tooltip="Notification"
          >
            {totalNotifications > 0 && <div className="notify-dot" />}
            <IconComponent name="notifyBell"/>
            &#8203;
          </Button>
        </Tooltip>
      )}
      {dropStatus && (
        <div className="card-notify">
          <div className="notify-head">
            <span className="font-bold">Notifications</span>{' '}
            <span translate="no" className="font-semibold">
              {totalNotifications ? `( ${totalNotifications} )` : null}
            </span>
          </div>
          <div className="notify-body">{children}</div>
          <div className="text-center">
            <Button
              btntype="button"
              text="View all"
              addClass="btn  primary-btn"
              onClick={goNotifications}
            />
          </div>
        </div>
      )}
    </div>
  );
};
