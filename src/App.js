import React from "react";
import "./styles.css";

function Summary() {
  return (
    <div className="data-container">
      <div className="data-label">Monthly revenue</div>
      <div className="data-value">$67,890.0</div>
    </div>
  );
}

function Chart() {
  return <div className="chart">Chart goes here</div>;
}

export default function App() {
  return (
    <div className="App">
      <Summary />
      <Chart />
    </div>
  );
}
