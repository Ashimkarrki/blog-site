import {
  createPlateUI,
  ELEMENT_H1,
  withProps,
  StyledElement,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate";
const components = createPlateUI({
  [ELEMENT_H1]: withProps(StyledElement, {
    styles: {
      root: {
        fontSize: "1.875rem",
        fontWeight: "500",
        lineHeight: "2rem",
      },
    },
  }),
  [ELEMENT_BLOCKQUOTE]: withProps(StyledElement, {
    styles: {
      root: {
        margin: "0rem",
        color: "grey",
        borderLeft: "3px solid grey",
        paddingLeft: "1rem",
      },
    },
  }),
});
export default components;
