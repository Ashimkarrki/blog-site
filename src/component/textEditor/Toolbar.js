import React from "react";
import {
  BlockToolbarButton,
  usePlateEditorRef,
  withPlateEventProvider,
  getPluginType,
  ELEMENT_H1,
  AlignToolbarButton,
  ListToolbarButton,
  ELEMENT_OL,
  ELEMENT_UL,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate";
import { FaHeading } from "react-icons/fa";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaParagraph,
} from "react-icons/fa";
const Toolbar = withPlateEventProvider(() => {
  const editor = usePlateEditorRef();

  return (
    <div className="toolbar">
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<FaHeading />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_PARAGRAPH)}
        icon={<FaParagraph />}
      />
      <AlignToolbarButton value="left" icon={<FaAlignLeft />} />
      <AlignToolbarButton value="right" icon={<FaAlignRight />} />
      <AlignToolbarButton value="center" icon={<FaAlignCenter />} />
      <AlignToolbarButton value="justify" icon={<FaAlignJustify />} />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FaListOl />}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FaListUl />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FaQuoteLeft />}
      />
    </div>
  );
});

export default Toolbar;
