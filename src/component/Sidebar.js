import React, { useCallback } from "react";
import {
  RiHome7Fill,
  RiHome7Line,
  RiNotification3Fill,
  RiNotification2Line,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();
  const changeLocation = useCallback(
    (pathname, outline, fill) => {
      if (location.pathname === pathname) {
        return fill;
      } else {
        return outline;
      }
    },
    [location.pathname]
  );
  return (
    <nav className="sidebar">
      <p className="sidebar--top">logo</p>
      <IconContext.Provider value={{ className: "sidebar__icons" }}>
        <div className="sidebar--flex">
          <Link to="/">
            {changeLocation("/", <RiHome7Line />, <RiHome7Fill />)}
          </Link>
          <Link to="/notification">
            {changeLocation(
              "/notification",
              <RiNotification2Line />,
              <RiNotification3Fill />
            )}
          </Link>

          <Link to="/bookmark">
            {changeLocation("/bookmark", <BsBookmarks />, <BsBookmarksFill />)}
          </Link>
          <Link to="/input">
            <IoCreateOutline />
          </Link>
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "sidebar__icons sidebar--bottom" }}
      >
        <CgProfile />
      </IconContext.Provider>
    </nav>
  );
};

export default Sidebar;
