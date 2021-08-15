import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({
  isAuth,
  path,
  exact,
  name,
  isPrivate,
  restricted,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivate && !restricted && isAuth && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivate && restricted && !isAuth && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
