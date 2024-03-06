import React, { useState } from "react";
import "../styles/MultiSelection.css";
import data from "../data";
import { computeHeadingLevel } from "@testing-library/react";

function MultiSelection() {
  // setting up useState.
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    // console.log(selected, getCurrentId);
    // setSelected(getCurrentId === selected ? null : getCurrentId); // keep add condition for closure
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };
  const handleMultiSelection = (getCurrentId) => {
    // copy prospective muliple elements into array and store
    const copyMultiple = [...multiple];
    console.log(copyMultiple.indexOf(getCurrentId)); // returns -1
    // condition
    copyMultiple.indexOf(getCurrentId) === -1 ? copyMultiple.push(getCurrentId) : copyMultiple.splice(copyMultiple.indexOf(getCurrentId), 1);
    // set state to new array
    setMultiple(copyMultiple);
    })
  };

  return (
    <div className="multi-selection-wrapper">
      {/* Multi-Selection Accordion */}
      <div className="multi-selection-accordion">
        <h2 className="multi-selection-description">
          Multiple-Selection Accordion
        </h2>
        <button
          className="multi-enable-button"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Disable Multi-Selection"
            : "Enable Multi-Selection"}
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="multi-selection-item"
              key={dataItem.id}
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
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