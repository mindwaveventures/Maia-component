import React, { ReactNode, useEffect, useRef } from "react";

import { Tooltip } from "../Tooltip/Tooltip";
import Button from "../Button/Button";

import "./notification.css";
import IconComponent from "../Icons/Icons";
import useKeyboard from "../../utils/useKeyboard";
import useOutsideClick from "../../utils/useOutsideClick";

interface NotificationProps {
  dropStatus: boolean;
  openNotify: (status: boolean) => void;
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
  const notificationRef = useRef<HTMLDivElement>(null);

  // Use the custom hook
  useOutsideClick(notificationRef, () => {
    if (dropStatus) openNotify(false);
  });
  const toggleBentoMenu = () => {
    openNotify(!dropStatus);
  };
  useKeyboard(openNotify);

  return (
    <div className="notification-wrap notify_helpguide" ref={notificationRef}>
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
              onClick={toggleBentoMenu}
              addClass="icon-wrapper acc-icon"
              data-tooltip="Notification"
            >
              {totalNotifications > 0 && <div className="notify-dot" />}
              <IconComponent name="notifyBell" />
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
              onClick={toggleBentoMenu}
              addClass="icon-wrapper acc-icon"
              data-tooltip="Notification"
            >
              {totalNotifications > 0 && <div className="notify-dot" />}
              <IconComponent name="notifyBell" />
              &#8203;
            </Button>
          </Tooltip>
        )}
        {dropStatus && (
          <div className="card-notify">
            <div className="notify-head">
              <span className="font-bold">Notifications</span>{" "}
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
    </div>
  );
};
