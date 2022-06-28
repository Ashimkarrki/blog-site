import {
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createParagraphPlugin,
  createListPlugin,
  createAlignPlugin,
  ELEMENT_PARAGRAPH,
  createBlockquotePlugin,
  createHeadingPlugin,
  ELEMENT_H1,
} from "@udecode/plate";
const plugins = [
  createParagraphPlugin(),
  createListPlugin(),
  createHeadingPlugin(),
  createBlockquotePlugin(),
  createBoldPlugin(),
  createItalicPlugin(),
  createUnderlinePlugin(),
  createAlignPlugin({
    inject: {
      props: {
        validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
      },
    },
  }),
];
export default plugins;
