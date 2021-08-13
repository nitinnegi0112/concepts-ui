import React from "react";
import "./DashboardBody.css";
import ChartCard from "./ChartCard";
import PieChartCard from "./PieChartCard";
import BarChartCard from "./BarChartCard";
import Table from "./Table";
const DashboardBody = () => {
  const data = [
    {
      name: "A",
      value: 1000,
    },
    {
      name: "B",
      value: 2500,
    },
    {
      name: "C",
      value: 1000,
    },
    {
      name: "D",
      value: 500,
    },
  ];
  return (
    <div className="dashboard-body">
      <h2 className="dashboard-body-heading">E-commerce Dashboard Template </h2>

      <ul className="breadcrum">
        <li className="breadcrum-item">
          <a href="" className="breadcrum-link">
            Dashboard{" "}
          </a>
        </li>
        <li className="breadcrum-item ">
          <a href="" className="breadcrum-link active-link">
            E-Commerce Dashboard Template
          </a>
        </li>
      </ul>
      <div className="chart-row">
        <ChartCard
          data={data}
          chartColor="#6610f2"
          title="Total Revenue"
          amount={12099}
          change={-2.0}
        />
        <ChartCard
          data={data}
          chartColor="#e83e8c"
          title="Affiliate Revenue"
          amount={124569}
          change={5.0}
        />
        <ChartCard
          data={data}
          chartColor="#17a2b8"
          title="Refunds"
          amount={45099}
          change=""
        />
        <ChartCard
          data={data}
          chartColor="#ffc107"
          title="Avg.Revenue Per User"
          amount={23459}
          change={14.0}
        />
      </div>
      <Table></Table>
      <div className="chart-row">
        <PieChartCard></PieChartCard>
        <BarChartCard></BarChartCard>
      </div>
    </div>
  );
};

export default DashboardBody;
