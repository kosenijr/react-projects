import React, { useState } from "react";
import styles from "../styles/Accordion.css";
import data from "../data";

function Accordion() {
  // setting up useState
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion">{
      }</div>
    </div>
  );
}

export default Accordion;
