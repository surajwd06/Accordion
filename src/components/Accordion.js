import React, { useState } from "react";
import { questions } from "./Api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);
  const [openId, setOpenId] = useState(null);

  const showfun = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  console.log(openId);

  return (
    <>
      <section className="main-div">
        <h1>React interview question</h1>
        {data.map((curEle) => {
          const { id } = curEle;
          return (
            <MyAccordion
              key={id}
              {...curEle}
              isOpen={openId === id}
              onClicks={() => showfun(id)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Accordion;
