import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataChartValues = props.dataCharts.map((dataChart) => dataChart.value);
  const Maximum = Math.max(...dataChartValues);
  return (
    <div className="chart">
      {props.dataCharts.map((dataChart) => (
        <ChartBar
        key = {dataChart.label}
          value={dataChart.value}
          maxValue={Maximum}
          label={dataChart.label}
        />
      ))}
    </div>
  );
};

export default Chart;
