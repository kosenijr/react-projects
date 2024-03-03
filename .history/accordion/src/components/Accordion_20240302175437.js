import React, { useState } from "react";
import styles from "../styles/Accordion.css";
import data from "../data";

function Accordion() {
  // setting up useState
  const [selected, setSelected] = useState(null);
  // setting up handling
  const handleSingleSelection = (getCurrentId) => {
    console.log(hey);
  }
  return (
    <div className="wrapper">

      {/* single selection accordion */}
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => <div className="item">
            <div className="title" onClick="() => handleSingleSelection(data.id)">
            <h3>{dataItem.question}</h3>
            <span>+</span>
            </div>
          </ div>)
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
