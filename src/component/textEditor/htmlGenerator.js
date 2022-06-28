const block = (node) => {
  const arrayOfHtmlTag = node.map(({ type, children, ...args }, index) => {
    const markedTag = children.map((s, index) =>
      mark(s.text, index, ...Object.keys(s))
    );
    let headerTag;
    let reqData = [];
    let listData;
    switch (type) {
      case "p":
        if (Object.keys(args)[0]) {
          headerTag = (
            <p
              key={index}
              className="plate-p"
              style={{ textAlign: args.align }}
            >
              {markedTag}
            </p>
          );
        } else {
          headerTag = (
            <p className="plate-p" key={index}>
              {markedTag}
            </p>
          );
        }
        return headerTag;
      case "h1":
        if (Object.keys(args)[0]) {
          headerTag = (
            <h1
              className="plate-h1"
              key={index}
              style={{ textAlign: args.align }}
            >
              {markedTag}
            </h1>
          );
        } else {
          headerTag = (
            <h1 className="plate-h1" key={index}>
              {markedTag}
            </h1>
          );
        }
        return headerTag;
      case "blockquote":
        headerTag = (
          <blockquote className="plate-blockquote">{markedTag}</blockquote>
        );
        return headerTag;
      case "ul":
        children.forEach((f) => {
          f.children.forEach((s) => {
            s.children.forEach((t) => {
              reqData.push(t);
            });
          });
        });
        listData = reqData.map((s) => {
          return (
            <li className="plate-ul-li">{mark(s.text, ...Object.keys(s))}</li>
          );
        });
        headerTag = (
          <ul className="plate-ul" key={index}>
            {listData}
          </ul>
        );
        return headerTag;
      case "ol":
        children.forEach((f) => {
          f.children.forEach((s) => {
            s.children.forEach((t) => {
              reqData.push(t);
            });
          });
        });
        listData = reqData.map((s) => {
          return (
            <li className="plate-ol-li">{mark(s.text, ...Object.keys(s))}</li>
          );
        });
        headerTag = (
          <ol className="plate-ul" key={index}>
            {listData}
          </ol>
        );
        return headerTag;
      default:
        return "it does not enter here";
    }
  });
  return arrayOfHtmlTag;
};
const mark = (text, index, ...args) => {
  let returnValue;
  if (args.includes("underline")) {
    returnValue = <u key={index}>{text}</u>;
  }
  if (args.includes("bold")) {
    returnValue = returnValue ? (
      <b key={index}>{returnValue}</b>
    ) : (
      <b key={index}>{text}</b>
    );
  }
  if (args.includes("italic")) {
    returnValue = returnValue ? (
      <i key={index}>{returnValue}</i>
    ) : (
      <i key={index}>{text}</i>
    );
  }
  return returnValue ? returnValue : text;
};

export default block;
