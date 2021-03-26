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

class Summary extends React.Component {
  state = {
    hovering: false
  };
  mouseEnter = () => this.setState({ hovering: true });
  mouseLeave = () => this.setState({ hovering: false });
  render() {
    return (
      <div className="data-container">
        <div
          className="data-label tooltip-container"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          Monthly revenue
          {this.state.hovering ? (
            <Tooltip text="Summary tooltip" position="right" />
          ) : null}
        </div>
        <div className="data-value">$67,890.0</div>
      </div>
    );
  }
}

class Chart extends React.Component {
  state = {
    hovering: false
  };
  mouseEnter = () => this.setState({ hovering: true });
  mouseLeave = () => this.setState({ hovering: false });
  render() {
    return (
      <div
        className="chart tooltip-container"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        Chart goes here
        {this.state.hovering ? (
          <Tooltip text="Chart tooltip" position="bottom" />
        ) : null}
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <Summary />
      <Chart />
    </div>
  );
}
