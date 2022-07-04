import htmlGenerator from "../component/textEditor/htmlGenerator";
const debugValue = {
  parsedHtml: [],
  tags: [],
};

const blogFileReducer = (state = debugValue, action) => {
  switch (action.type) {
    case "CONVERTBLOG":
      const converted = htmlGenerator(
        action.payload.mainData,
        action.payload.title
      );
      return { ...state, parsedHtml: converted };
    case "SETTAGS":
      state.tags.push(action.payload);

      return { ...state, tags: [...state.tags] };
    case "DELETETAG":
      const newTags = state.tags.filter((s, index) => {
        return index !== action.payload;
      });
      console.log(newTags);
      return { ...state, tags: newTags };
    default:
      return state;
  }
};
export default blogFileReducer;
