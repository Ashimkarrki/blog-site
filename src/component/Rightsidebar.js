import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
const Rightsidebar = () => {
  return (
    <aside className="right-side-bar">
      <div className="search__bar">
        <IconContext.Provider value={{ className: "search__bar__icon" }}>
          <BiSearchAlt />
        </IconContext.Provider>
        <input className="search" placeholder="Search" />
      </div>
      <div className="tags">
        <h4>Recommended Topics</h4>
        <div className="tags--flex">
          <h5 className="tags__items">react</h5>
          <h5 className="tags__items">css</h5>
          <h5 className="tags__items">one piece</h5>
          <h5 className="tags__items">html</h5>
        </div>
      </div>
      <div className="who-to-follow">
        <h4>Whom to follow ...</h4>
        {/* <h3></h3>
        <h3></h3>
        <h3></h3> */}
      </div>
    </aside>
  );
};

export default Rightsidebar;
