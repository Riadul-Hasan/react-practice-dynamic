import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataPromise = use(marksPromise);
  const marksData = marksDataPromise.data;

  //   Data procesing for  the chart..plain objects
  const marksChartData = marksData.map((stuData) => {
    const Student = {
      id: stuData.id,
      name: stuData.name,
      physics: stuData.marks.physics,
      chemistry: stuData.marks.chemistry,
      biology: stuData.marks.biology,
    };
    const avg = (Student.physics + Student.chemistry + Student.biology) / 3;
    Student.avg = avg;
    return Student;
  });
  console.log(marksChartData);
  return (
    <div>
      <BarChart width={500} height={400} data={marksChartData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"avg"} fill="yellow"></Bar>
        <Bar dataKey={"chemistry"} fill="green"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
