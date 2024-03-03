import React, { useState } from "react";
import "../styles/SingleSelection.css";
import data from "../data";

function Accordion() {
  // setting up useState
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };

  return (
    <div className="wrapper">
      {/* single selection accordion */}
      <div className="accordion">
        <h2>Single-Selection Accordion</h2>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id} onClick={() => handleSingleSelection(dataItem.id)}>
              {/* always remember to add key */}
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content ">{dataItem.jargon}</div>
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
