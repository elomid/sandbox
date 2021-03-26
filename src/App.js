import React from "react";
import "./styles.css";

class HoverProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter() {
    this.setState({ hovering: true });
  }
  mouseLeave() {
    this.setState({ hovering: false });
  }
  render() {
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.props.render(this.state.hovering)}
      </div>
    );
  }
}

function Tooltip({ text, position }) {
  return (
    <div
      className={position === "bottom" ? "tooltip" : "tooltip tooltip-right"}
    >
      {text}
    </div>
  );
}

function Summary(props) {
  return (
    <div className="data-container">
      <div className="data-label tooltip-container">
        Monthly revenue
        {props.hovering ? (
          <Tooltip text="Summary tooltip" position="right" />
        ) : null}
      </div>
      <div className="data-value">$67,890.0</div>
    </div>
  );
}

function Chart(props) {
  return (
    <div
      className="chart tooltip-container"
      style={{ background: props.color }}
    >
      Chart goes here
      {props.hovering ? (
        <Tooltip text="Chart tooltip" position="bottom" />
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <HoverProvider render={(hovering) => <Summary hovering={hovering} />} />
      <HoverProvider
        render={(hovering) => <Chart hovering={hovering} color="#f4f5f9" />}
      />
    </div>
  );
}
