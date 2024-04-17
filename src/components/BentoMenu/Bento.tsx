import "../BentoMenu/bento.css";
import React from "react";

import { Link } from "react-router-dom";

import { Tooltip } from "../Tooltip/Tooltip";
import { MenuItemProps } from "../../types";

interface BentoMenuProps {
  openStatus: boolean;
  openChangeAction: (status: boolean) => void;
  menuItems: MenuItemProps[];
}

export const BentoMenu: React.FC<BentoMenuProps> = ({
  openStatus,
  openChangeAction,
  menuItems,
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
            <button
              aria-expanded="true"
              aria-label="Close bento menu"
              onClick={toggleBentoMenu}
            >
              <svg
                role="img"
                aria-labelledby="title"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <desc>Close bento</desc>
                <path
                  id="Icon_material-close"
                  data-name="Icon material-close"
                  d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
                  transform="translate(-7.5 -7.5)"
                  fill="currentColor"
                />
              </svg>
            </button>
          </Tooltip>
        ) : (
          <Tooltip content="Bento menu" direction="top">
            <button
              type="button"
              aria-label="Open bento menu"
              aria-haspopup="true"
              className="bento-icon acc-icon"
              data-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleBentoMenu}
              data-tooltip="Bento menu"
              id="accessibileMenu"
            >
              <svg
                role="img"
                aria-labelledby="title"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <desc>Open bento menu</desc>
                <rect
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="38"
                  height="38"
                  fill="none"
                />
                <path
                  id="bentoMenuPath"
                  data-name="bentoMenuPath"
                  d="M22.6,27.342a.834.834,0,0,1-.832-.832V22.6a.834.834,0,0,1,.832-.833h3.91a.833.833,0,0,1,.829.833v3.909a.832.832,0,0,1-.832.832Zm-11.1,0a.8.8,0,0,1-.759-.832V22.6a.8.8,0,0,1,.759-.833h4.057a.8.8,0,0,1,.759.833v3.909a.8.8,0,0,1-.759.832Zm-10.722,0A.808.808,0,0,1,0,26.51V22.6a.809.809,0,0,1,.783-.833h4.01a.809.809,0,0,1,.783.833v3.909a.809.809,0,0,1-.783.83ZM22.6,16.32a.8.8,0,0,1-.832-.759V11.5a.8.8,0,0,1,.832-.759h3.91a.8.8,0,0,1,.832.759V15.56a.8.8,0,0,1-.832.759Zm-11.095,0a.759.759,0,0,1-.759-.757V11.5a.759.759,0,0,1,.759-.759h4.057a.76.76,0,0,1,.759.759V15.56a.759.759,0,0,1-.759.759Zm-10.722,0A.772.772,0,0,1,0,15.564V11.5a.771.771,0,0,1,.783-.759h4.01a.771.771,0,0,1,.783.759V15.56a.771.771,0,0,1-.783.759ZM22.6,5.575a.809.809,0,0,1-.832-.783V.783A.809.809,0,0,1,22.6,0h3.91a.808.808,0,0,1,.829.783v4.01a.808.808,0,0,1-.832.783Zm-11.095,0a.771.771,0,0,1-.759-.783V.783A.771.771,0,0,1,11.5,0h4.057a.771.771,0,0,1,.759.783v4.01a.771.771,0,0,1-.759.783Zm-10.722,0A.782.782,0,0,1,0,4.8V.783A.782.782,0,0,1,.781,0h4.01a.782.782,0,0,1,.783.781v4.01a.782.782,0,0,1-.781.783H.787Z"
                  transform="translate(5.329 5.329)"
                  stroke="rgba(0,0,0,0)"
                  stroke-miterlimit="10"
                  stroke-width="1"
                  fill="currentColor"
                />
              </svg>
            </button>
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
