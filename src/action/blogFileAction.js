const convertBlog = (mainData, title) => {
  return {
    type: "CONVERTBLOG",
    payload: { mainData, title },
  };
};
const setTags = (tags) => {
  return {
    type: "SETTAGS",
    payload: tags,
  };
};
const deleteTag = (id) => {
  return {
    type: "DELETETAG",
    payload: id,
  };
};
export { convertBlog, setTags, deleteTag };
