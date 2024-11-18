import React from "react";
// import { LineChart } from "apexcharts";
// import { Line } from "react-chartjs-2./Line";
// import { Bar } from "react-chartjs-2./Bar";
// import { BarChart } from "apexcharts";
import ApexCharts from "apexcharts";

export const LineChart = () => {
  const data = {
    labels: [
      "May,2024",
      "June,2024",
      "July,2024",
      "August,2024",
      "September,2024",
      "October,2024",
      "November,2024",
    ],
    datasets: [
      {
        label: "No.of Job Seekers",
        data: [0, 1],
        fill: false,
        borderColor: "orange",
      },
    ],
  };
  return <Line data={data} />;
};

export const BarChart = () => {
  const data = {
    labels: [
      "Nepal",
      "Algeria",
      "UAE",
      "Andora",
      "Botswana",
      "Central Africa Republicn",
      "Egypt",
      "Albania",
      "Guatimala",
      "Guiena",
      "Hungary",
    ],
    datasets: [
      {
        label: "No.of Agencies",
        data: [10, 2, 3, 4, 5, 6],
        backgroundColor: "teal",
      },
    ],
  };
  return <Bar data={data} />;
};
