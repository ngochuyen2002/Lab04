import React from "react";
import Item from "react2/components/item";

const React2 = () => {
  const list = [
    { title: "title 1", content: "content 1" },
    { title: "title 2", content: "content 2" },
    { title: "title 3", content: "content 3" },
  ];
  return (
    <>
      <Item title="title 1" content={"content" + 1} />
      <Item title="title 2" content={"content" + 2} />
      <Item title="title 3" content={"content" + 3} />

      <br />
      <hr />
      <br />

      {list.map((item, i) => {
        return <Item title={item.title} content={item.content} key={i} />;
      })}
    </>
  );
};

export default React2;