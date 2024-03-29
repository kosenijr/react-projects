import React, { useState } from "react";
import styles from "../styles/Accordion.css";
import data from "../data";

function Accordion() {
  // setting up useState
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId);
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
              // set condition to reveal the answer
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
