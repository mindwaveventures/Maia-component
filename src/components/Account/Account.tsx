import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import IconComponent from "../Icons/Icons";
import { IUserInfo, MenuItemProps } from "../../types";
import { Link, useLocation } from "react-router-dom";

import "./Account.css";
import useKeyboard from "../../utils/useKeyboard";
import useOutsideClick from "../../utils/useOutsideClick";

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
  MainPortal = "",
  QBPortal = "",
  ResourcesPortal = "",
  OuterDomain = "",
}) => {
  const location = useLocation();
  const toggleBentoMenu = () => {
    console.log(`🔄 Toggling menu: current state ${openTab} -> ${!openTab}`);
    changeAction(!openTab);
  };

  const accountRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState(-1);
  const prevLocationRef = useRef(location.pathname);

  // Use the custom hook
  useOutsideClick(accountRef, () => {
    console.log(`👆 Outside click detected, menu open: ${openTab}`);
    if (openTab) changeAction(false);
  });

  useKeyboard(changeAction);

  // Get user display name
  const getUserDisplayName = () => {
    if (localStorage.getItem("proxyUserId")) {
      const proxyUser = proxyUsers?.find(
        (proxy) => proxy.proxyUserId === localStorage.getItem("proxyUserId")
      );
      return `${proxyUser?.proxyUserInfo?.firstName} ${proxyUser?.proxyUserInfo?.lastName}`;
    }
    return localStorage.getItem("name") || userInfo?.firstName || "User";
  };

  const getAppUrl = (appUrl: string, link: string) => {
    switch (appUrl) {
      case "MainPortal":
        return `${MainPortal}${link}`;
      case "QBPortal":
        return `${QBPortal}${link}`;
      case "ResourcesPortal":
        return `${ResourcesPortal}${link}`;
      case "OuterDomain":
        return `${OuterDomain}${link}`;
      case "Action":
        return "#";
      default:
        return link ? link : "#";
    }
  };

  // Keyboard navigation for menu items
  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (!openTab) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedMenuItemIndex((prev) =>
          prev < menuItems.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedMenuItemIndex((prev) =>
          prev > 0 ? prev - 1 : menuItems.length - 1
        );
        break;
      case "Escape":
        event.preventDefault();
        changeAction(false);
        setFocusedMenuItemIndex(-1);
        break;
      case "Home":
        event.preventDefault();
        setFocusedMenuItemIndex(0);
        break;
      case "End":
        event.preventDefault();
        setFocusedMenuItemIndex(menuItems.length - 1);
        break;
    }
  };

  // Reset focus when menu closes
  useEffect(() => {
    if (!openTab) {
      setFocusedMenuItemIndex(-1);
    }
  }, [openTab]);

  // Close menu when location changes (navigation happens)
  useEffect(() => {
    console.log(
      `📍 Location changed: ${location.pathname}, prev: ${prevLocationRef.current}, menu open: ${openTab}`
    );
    if (openTab && location.pathname !== prevLocationRef.current) {
      // Only close if the location actually changed
      console.log(`🚪 Closing menu due to location change`);
      changeAction(false);
    }
    prevLocationRef.current = location.pathname;
  }, [location.pathname, openTab]);

  const MenuItem = ({
    item,
    index,
  }: {
    item: MenuItemProps;
    index: number;
  }) => {
    const isFocused = focusedMenuItemIndex === index;

    return (
      <li role="none">
        <Link
          role="menuitem"
          aria-label={item.label}
          tabIndex={0} // all items focusable
          to={getAppUrl(item.appUrl || "", item.to)}
          onClick={(e) => {
            console.log(`🔗 Link clicked: ${item.label}`);

            if (item.action) {
              e.preventDefault(); // Only prevent if custom action
              item.action();
            }

            toggleBentoMenu();
          }}
          className="dropdown-item"
          style={{ cursor: "pointer" }}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  const userDisplayName = getUserDisplayName();

  return (
    <div
      className="dropdown-group profile profile_helpguide"
      ref={accountRef}
      role="navigation"
      aria-label="User account menu"
    >
      {openTab ? (
        <Tooltip content="Avatar" direction="bottom">
          <Button
            addClass="dropdown-toggle acc-icon"
            btnId="dropdown-toggle"
            btntype="button"
            onClick={toggleBentoMenu}
            customButton={true}
            showLabel={false}
            text="profile"
            aria-label={`Close ${userDisplayName} profile menu`}
            aria-expanded="true"
            aria-haspopup="true"
            data-toggle="dropdown"
          >
            <IconComponent name="profileIcon" aria-hidden="true" />
            <span className="sr-only">Close profile menu</span>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip content="Avatar" direction="bottom">
          <Button
            addClass="dropdown-toggle acc-icon"
            btnId="dropdown-toggle"
            btntype="button"
            customButton={true}
            showLabel={false}
            text="profile"
            onClick={toggleBentoMenu}
            data-tooltip="Profile"
            aria-label={`Open ${userDisplayName} profile menu`}
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
          >
            <IconComponent name="profileIcon" aria-hidden="true" />
            <span className="sr-only">Open profile menu</span>
          </Button>
        </Tooltip>
      )}
      {openTab && (
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          ref={menuRef}
          role="menu"
          aria-label={`${userDisplayName} profile menu`}
          onKeyDown={handleMenuKeyDown}
          aria-orientation="vertical"
        >
          <ul role="menubar">
            <li
              className="text-lg u_name"
              translate="no"
              role="menuitem"
              aria-label={`Current user: ${userDisplayName}`}
            >
              {userDisplayName}
            </li>
            {menuItems.map((item: MenuItemProps, index: number) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
          {/* Screen reader announcement for menu state */}
          <div className="sr-only" aria-live="polite">
            {openTab
              ? `Profile menu opened with ${menuItems.length} options`
              : "Profile menu closed"}
          </div>
        </div>
      )}
    </div>
  );
};
