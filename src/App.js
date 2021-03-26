import React from "react";
import "./styles.css";

function Tooltip({ text, position }) {
  return (
    <div
      className={position === "bottom" ? "tooltip" : "tooltip tooltip-right"}
    >
      {text}
    </div>
  );
}

function Summary() {
  return (
    <div className="data-container">
      <div className="data-label tooltip-container">
        Monthly revenue
        <Tooltip text="Summary tooltip" position="right" />
      </div>
      <div className="data-value">$67,890.0</div>
    </div>
  );
}

function Chart() {
  return (
    <div className="chart tooltip-container">
      Chart goes here
      <Tooltip text="Chart tooltip" position="bottom" />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Summary />
      <Chart />
    </div>
  );
}
