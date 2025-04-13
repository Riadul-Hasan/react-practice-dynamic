import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultsData = [
  { id: 1, name: "Alice", physics: 78, chemistry: 85, biology: 80 },
  { id: 2, name: "Bob", physics: 92, chemistry: 88, biology: 91 },
  { id: 3, name: "Charlie", physics: 67, chemistry: 73, biology: 70 },
  { id: 4, name: "Diana", physics: 85, chemistry: 79, biology: 84 },
  { id: 5, name: "Ethan", physics: 90, chemistry: 94, biology: 89 },
  { id: 6, name: "Fiona", physics: 76, chemistry: 81, biology: 77 },
  { id: 7, name: "George", physics: 88, chemistry: 86, biology: 90 },
  { id: 8, name: "Hannah", physics: 69, chemistry: 74, biology: 72 },
  { id: 9, name: "Ian", physics: 81, chemistry: 80, biology: 83 },
  { id: 10, name: "Julia", physics: 95, chemistry: 92, biology: 94 },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultsData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"chemistry"}></Line>
        <Line dataKey={"biology"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
