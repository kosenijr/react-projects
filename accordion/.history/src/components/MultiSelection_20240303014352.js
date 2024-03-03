import React, { useState } from "react";
import "../styles/MultiSelection.css";
import data from "../data";

function SingleSelection() {
  // setting up useState.
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleMultiSelection = (getCurrentId) => {
    console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };

  return (
    <div className="multi-selection-wrapper">
      {/* multi selection accordion */}
      <div className="multi-selection-accordion">
        <h2 className="multi-selection-description">Multi-Selection Accordion</h2>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="multi-selection-item" key={dataItem.id} onClick={() => handleMultiSelection(dataItem.id)}>
              {/* always remember to add key */}
              <div className="multi-selection-title">
                <h3>{dataItem.question}</h3>
                <span className="multi-selection-span">{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id ? (
                <div className="multi-selection-content ">{dataItem.answer}</div>
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

export default SingleSelection;
