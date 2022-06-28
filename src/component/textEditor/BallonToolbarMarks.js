import React from "react";
import {
  usePlateEditorRef,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  getPluginType,
  MarkToolbarButton,
  BalloonToolbar,
} from "@udecode/plate";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
const BallonToolbarMarks = () => {
  const editor = usePlateEditorRef();

  const arrow = false;
  const theme = "dark";
  const popperOptions = {
    placement: "top",
  };

  return (
    <BalloonToolbar popperOptions={popperOptions} theme={theme} arrow={arrow}>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FaBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FaItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FaUnderline />}
      />
    </BalloonToolbar>
  );
};

export default BallonToolbarMarks;
