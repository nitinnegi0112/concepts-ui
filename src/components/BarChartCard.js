import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./BarChartCard.css";
const BarChartCard = () => {
  const data = [
    {
      name: "Q1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Q2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Q3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Q4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="barchart-card">
      <h5>Product Sales</h5>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barSize={40}
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />

          <Bar dataKey="pv" stackId="a" fill="#5969ff" />
          <Bar dataKey="uv" stackId="a" fill="#ff407b" />
          <Bar dataKey="uv" stackId="a" fill="#25d5f2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
