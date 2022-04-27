//React Imports
import React from "react";
//Third Party Libraries
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

//Doughnut chart Data
const data = {
  labels: ["Sin credencial", "Con credencial"],
  datasets: [
    {
      label: "Scouts con credencial vs Scouts sin credencial",
      data: [17, 123],
      backgroundColor: ["#F2F7FA", "#2E2270"],
      hoverOffset: 4,
    },
  ],
};
const DoughnutChart = () => {
  //Style
  const doughnutStyle = {
    height: "150px",
    position: "relative",
    width: "150px",
  };
  
  return (
    <div style={doughnutStyle}>
      {" "}
      <Doughnut data={data} />
    </div>
  );
};
export default DoughnutChart;
