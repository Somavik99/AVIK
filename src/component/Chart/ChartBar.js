import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let bar_fillHeight = "0%";

  if (props.maxValue > 0) {
    bar_fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: bar_fillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
