import React from "react";
import {
  RiHome7Fill,
  RiHome7Line,
  RiNotification3Fill,
  RiNotification2Line,
} from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { IconContext } from "react-icons";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { IoCreateOutline, IoCreateSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <p className="sidebar--top">logo</p>
      <IconContext.Provider value={{ className: "sidebar__icons" }}>
        <div className="sidebar--flex">
          <RiHome7Line />
          <RiNotification2Line />
          <BsBookmarks />
          <IoCreateOutline />
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
