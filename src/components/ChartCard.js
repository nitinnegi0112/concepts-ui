import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./ChartCard.css";
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
} from "recharts";
const ChartCard = ({ data, chartColor, title, amount, change }) => {
  return (
    <div className="chart-card">
      <h5>{title}</h5>
      <div className="chart-card-value">
        <h1>${amount}</h1>
        {change ? (
          <span>
            <FontAwesomeIcon
              icon={change < 0 ? faArrowDown : faArrowUp}
              size="xs"
              color={`${change < 0 ? "#ff407b " : "#2ec551"}`}
            />
            {change}%
          </span>
        ) : (
          <span style={{ color: "#5969ff " }}>N/A</span>
        )}
      </div>
      <div className="chart-card-chart">
        <ResponsiveContainer width={350} height={100}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color"x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
                <stop offset="75%" stopColor={chartColor} stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
              dataKey="value"
              stroke={chartColor}
              fill={chartColor}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              hide={true}
            />

            <YAxis
              datakey="value"  
              hide={true}
              axisLine={false}
              tickLine={false}
              tickCount={8}
            />

            <Tooltip></Tooltip>

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
