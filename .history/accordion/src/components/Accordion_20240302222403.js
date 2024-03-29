import React, { useState } from "react";
import "../styles/Accordion.css";
import data from "../data";

function Accordion() {
  // setting up useState
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null)
  };

  return (
    <div className="wrapper">
      {/* single selection accordion */}
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              {" "}
              {/* always remember to add key */}
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content ">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
