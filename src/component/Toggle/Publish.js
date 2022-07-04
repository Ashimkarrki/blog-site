import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { setTags, deleteTag } from "../../action/blogFileAction";
import { IconContext } from "react-icons";
const Publish = ({ setToggle }) => {
  const blogState = useSelector((state) => state.blogState);
  const dispatch = useDispatch();
  const [tag, setTag] = useState("#");
  return (
    <div
      className="publish"
      onClick={(e) => {
        setToggle(false);
      }}
    >
      <div
        className="publish__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="tags">
          {blogState.tags.map((s, index) => {
            return (
              <span className="tags__items tags__items--relative" key={index}>
                {s}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteTag(index));
                    console.log("dispatch wallah button xalyo");
                  }}
                  className="tags__items--relative--buttons"
                >
                  <IconContext.Provider
                    value={{ className: "tags__items--delete" }}
                  >
                    <AiOutlineClose />
                  </IconContext.Provider>
                </button>
              </span>
            );
          })}
        </div>
        {blogState.tags.length <= 5 && (
          <form className="publish__bottom">
            <input
              className="create__tags"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              maxLength={10}
            />
            <button
              className="publish__bottom--button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (tag.length > 1) {
                  console.log("entered bcoz is greater than 1");
                  if (tag.startsWith("#")) {
                    dispatch(setTags(tag));
                    setTag("#");
                  } else {
                    dispatch(setTags("#" + tag));
                    setTag("#");
                  }
                }
              }}
            >
              submit
            </button>
          </form>
        )}
        <button className="publish__tag">Publish</button>
      </div>
    </div>
  );
};

export default Publish;
