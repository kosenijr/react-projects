import React, { useState } from "react";
import "../styles/MultiSelection.css";
import data from "../data";

function MultiSelection() {
  // setting up useState.
  const [selected, setSelected] = useState(null);
  const [enableSelected, setEnableSelected] = useState([]);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };
const handleMultipleSelection = () => {

}

  return (
    <div className="multi-selection-wrapper">
      {/* Multi-Selection Accordion */}
      <div className="multi-selection-accordion">
        <h2 className="multi-selection-description">
          Multiple-Selection Accordion
        </h2>
        <div className="multi-buttons-div">
          <button className="multi-enable-button">Enable Multiple selection</button>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="multi-selection-item"
              key={dataItem.id}
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              {/* always remember to add key */}
              <div className="multi-selection-title">
                <h3>{dataItem.question}</h3>
                <span className="multi-selection-span">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className="multi-selection-content ">
                  {dataItem.answer}
                </div>
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

export default MultiSelection;
