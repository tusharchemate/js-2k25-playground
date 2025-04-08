import React, { useState } from "react";

const Accordion = () => {
  const accordionItem = [
    { title: "Menu 1", content: "this is menu 1", isToggle: false },
    { title: "Menu 2", content: "this is menu 2", isToggle: false },
    { title: "Menu 3", content: "this is menu 3", isToggle: false },
  ];

  const [accordionItems, setUpdatedList] = useState(accordionItem);

  const toggleContent = (title) => {
    setUpdatedList((prevList) =>
      prevList.map((item) =>
        item.title === title ? { ...item, isToggle: !item.isToggle } : item
      )
    );
  };

  return (
    <>
      Accordion
      <div>
        {accordionItems?.map((item) => (
          <>
            <h2 onClick={() => toggleContent(item.title)}> {item.title} + </h2>
            <p>{item.isToggle && item.content} </p>
          </>
        ))}
      </div>
    </>
  );
};

export default Accordion;
