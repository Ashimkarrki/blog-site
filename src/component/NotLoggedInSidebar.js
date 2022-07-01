import { Link } from "react-router-dom";
import React from "react";

const NotLoggedInSidebar = () => {
  return (
    <nav className="notloggedinsidebar">
      <h3 className="notloggedinsidebar--left  notloggedinsidebar__item">
        Logo
      </h3>
      <h3 className="notloggedinsidebar__item">
        <Link to="/login"> Log In</Link>
      </h3>
      <h3 className="notloggedinsidebar__item">
        <Link to="/signup"> Sign up</Link>
      </h3>
    </nav>
  );
};

export default NotLoggedInSidebar;
