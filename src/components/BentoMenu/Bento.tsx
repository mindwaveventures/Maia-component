import "../BentoMenu/bento.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { MenuItemProps } from "../../types";
import IconComponent from "../Icons/Icons";

interface MenuProps {
  menuItems:MenuItemProps[]
  changeAction:(status: boolean) => void
  openTab: boolean;
}

export const Menu: React.FC<MenuProps> = ({menuItems,changeAction,openTab}) => {

  const toggleBentoMenu = () => {
    changeAction(!openTab);
  };
  const MenuItem = ({ item }: any) => {
    return (
      <li role="menuitem">
        <Link
          to={item.to}
          onClick={item.action ? item.action : toggleBentoMenu}
          className="bento-blks"
          style={{ cursor: "pointer" }}
        >
          <IconComponent name={item.label}/>
          <p>{item.label}</p>
        </Link>
      </li>
    );
  };

  return (
    <div className="put-bento-desktop">
      <div className="bento-desk-wrap">
        {openTab ? (
          <Tooltip content="Bento Close" direction="top">
            <Button
              btntype="button"
              customButton={true}
              btnCatogery="toggle"
              status={openTab}
              showLabel={false}
              text="close bento"
              ariaLabel="Close bento menu"
              aria-expanded="true"
              onClick={toggleBentoMenu}
              addClass="bento-icon acc-icon"
              data-tooltip="Bento menu"
            >
            <IconComponent name="closeIcon"/>
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="Bento menu" direction="top">
            <Button
              btnId="accessibileMenu"
              btntype="button"
              customButton={true}
              btnCatogery="toggle"
              status={openTab}
              showLabel={false}
              text="open bento"
              ariaLabel="Open bento menu"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={toggleBentoMenu}
              addClass="bento-icon acc-icon"
              data-tooltip="Bento menu"
            >
             <IconComponent name='openIcon'/>
            </Button>
          </Tooltip>
        )}
        {openTab && (
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
