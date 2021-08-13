import React from "react";
import "./PieChartCard.css";
import { PieChart, Pie, Cell } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const PieChartCard = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#5969ff", "#ff407b ", "#25d5f2"];
  return (
    <div className="piechart-card">
      <h5 className="piechart-card-heading">Product Category</h5>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="piechart-text">
        <div>
          <FontAwesomeIcon
            icon={faSquare}
            size="xs"
            color={COLORS[0]}
          ></FontAwesomeIcon>
          <p>Man</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSquare}
            size="xs"
            color={COLORS[1]}
          ></FontAwesomeIcon>
          <p>Woman</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSquare}
            size="xs"
            color={COLORS[2]}
          ></FontAwesomeIcon>
          <p>Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
