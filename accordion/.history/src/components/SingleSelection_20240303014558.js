import React, { useState } from "react";
import "../styles/MultiSelection.css";
import data from "../data";

function SingleSelection() {
  // setting up useState.+++++
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };

  return (
    <div className="single-selection-wrapper">
      {/* SIngle-Selection Accordion */}
      <div className="single-selection-accordion">
        <h2 className="single-selection-description">Single-Selection Accordion</h2>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="single-selection-item" key={dataItem.id} onClick={() => handleSingleSelection(dataItem.id)}>
              {/* always remember to add key */}
              <div className="single-selection-title">
                <h3>{dataItem.question}</h3>
                <span className="single-selection-span">{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id ? (
                <div className="single-selection-content ">{dataItem.answer}</div>
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
