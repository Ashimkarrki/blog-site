import React, { useState } from "react";
import { useSelector } from "react-redux";
import Publish from "./Toggle/Publish";
const RenderBlog = () => {
  const [toggle, setToggle] = useState(false);
  const blogState = useSelector((state) => state.blogState);
  return (
    <div className="renderedBlog">
      <button
        className="renderedBlog_button"
        onClick={() => {
          setToggle(true);
        }}
      >
        Publish
      </button>
      <div className="renderedBlog__child">{blogState.parsedHtml}</div>
      {toggle && <Publish setToggle={setToggle} />}
    </div>
  );
};

export default RenderBlog;
