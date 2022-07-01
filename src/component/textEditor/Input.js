import React, { useState } from "react";
import { Plate, createPlugins } from "@udecode/plate";
import plugin from "./plugins";
import Toolbar from "./Toolbar";
import BallonToolbarMarks from "./BallonToolbarMarks";
import components from "./components";
import block from "./htmlGenerator";
const Input = () => {
  const plugins = createPlugins(plugin, {
    components,
  });
  const [debugValue, setDebugValue] = useState();
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
    <div className="input">
      <ul>
        <li>Logo</li>
        <li>
          <button>Submit</button>
        </li>
      </ul>
      <Toolbar />
      <input placeholder="TITLE" className="input__input" />
      <Plate
        initialValue={intialValue}
        onChange={(val) => setDebugValue(val)}
        plugins={plugins}
      >
        <BallonToolbarMarks />
      </Plate>
      <Temp>{block(debugValue ? debugValue : intialValue)}</Temp>
    </div>
  );
};
const Temp = (props) => {
  return <div>{props.children}</div>;
};
export default Input;
