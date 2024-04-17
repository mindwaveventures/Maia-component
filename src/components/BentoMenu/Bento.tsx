import "../BentoMenu/bento.css";
import React from "react";

import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { MenuItemProps } from "../../types";

interface MenuProps {
  openStatus: boolean;
  openChangeAction: (status: boolean) => void;
  menuItems: MenuItemProps[];
  closeIcon: JSX.Element;
  openIcon: JSX.Element;
}

export const Menu: React.FC<MenuProps> = ({
  openStatus,
  openChangeAction,
  menuItems,
  closeIcon,
  openIcon,
}) => {
  const toggleBentoMenu = () => {
    openChangeAction(!openStatus);
  };
  const MenuItem = ({ item }: any) => (
    <li role="menuitem">
      <Link
        to={item.to}
        onClick={item.action}
        className="bento-blks"
        style={{ cursor: "pointer" }}
      >
        {item.icon}
        <p>{item.label}</p>
      </Link>
    </li>
  );
  return (
    <div className="put-bento-desktop">
      <div className="bento-desk-wrap">
        {openStatus ? (
          <Tooltip content="Bento Close" direction="top">
            <Button
              btntype="button"
              customButton={true}
              btnCatogery="toggle"
              status={openStatus}
              showLabel={false}
              text="close bento"
              ariaLabel="Close bento menu"
              aria-expanded="true"
              onClick={toggleBentoMenu}
              addClass="bento-icon acc-icon"
              data-tooltip="Bento menu"
            >
              {closeIcon}
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="Bento menu" direction="top">
            <Button
              btnId="accessibileMenu"
              btntype="button"
              customButton={true}
              btnCatogery="toggle"
              status={openStatus}
              showLabel={false}
              text="open bento"
              ariaLabel="Open bento menu"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={toggleBentoMenu}
              addClass="bento-icon acc-icon"
              data-tooltip="Bento menu"
            >
              {openIcon}
            </Button>
          </Tooltip>
        )}
        {openStatus && (
          <div className="bento-content" id="bento-menu-content">
            <div className="menu-wrapper">
              <ul
                aria-labelledby="accessibileMenu"
                role="menu"
                className="bento-row grid-cols-2"
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
  );
};
