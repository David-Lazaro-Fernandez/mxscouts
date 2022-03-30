import React from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import {Doughnut} from 'react-chartjs-2';
Chart.register(
  Tooltip, Title, ArcElement, Legend
)


const data = {
    labels: [
      'Sin credencial',
      'Con credencial',
    ],
    datasets: [{
      label: 'Scouts con credencial vs Scouts sin credencial',
      data: [17, 123],
      backgroundColor: [
        '#F2F7FA',
        '#2E2270',
      ],
      hoverOffset: 4
    }]
  };
const DoughnutChart = (props) => {
  return <div style={{height:'150px', position:'relative', width:'150px'}}> <Doughnut data={data}/>
  </div>;
};
export default DoughnutChart;
