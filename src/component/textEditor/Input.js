import React, { useState } from "react";
import { Plate, createPlugins } from "@udecode/plate";
import plugin from "./plugins";
import Toolbar from "./Toolbar";
import { convertBlog } from "../../action/blogFileAction";
import BallonToolbarMarks from "./BallonToolbarMarks";
import components from "./components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Input = () => {
  const dispatch = useDispatch();
  const plugins = createPlugins(plugin, {
    components,
  });
  const [debugValue, setDebugValue] = useState();
  console.log(debugValue);
  const [title, setTitle] = useState("");
  const intialValue = [
    {
      type: "p",
      children: [
        {
          text: "This is editable plain text with react and history plugins, just like a <textarea>!",
        },
      ],
    },
  ];

  return (
    <form>
      <div className="input">
        <ul className="submit__buttons">
          <li>Logo</li>
          <li>
            <button
              type="submit"
              className="submit__buttons--button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  convertBlog(debugValue ? debugValue : intialValue, title)
                );
              }}
            >
              <Link to="/renderedblog">Render</Link>
            </button>
          </li>
        </ul>
        <Toolbar />
        <input
          placeholder="TITLE"
          className="input__input"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Plate
          initialValue={intialValue}
          onChange={(val) => setDebugValue(val)}
          plugins={plugins}
        >
          <BallonToolbarMarks />
        </Plate>
      </div>
    </form>
  );
};

export default Input;
