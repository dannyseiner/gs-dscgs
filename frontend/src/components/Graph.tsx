import React, { useState } from "react";
import IReleeaseGraph from "../interfaces/IReleaseGraph";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const staticGraphData = require("../test/releasegraph.json");
function Graph() {
  const [chartData, setChartData] = useState<IReleeaseGraph[] | any[]>(
    staticGraphData
  );
  let tooltip: any;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-dark p-2">
          <p className="label">{label}</p>
          <p className="intro">Sold: {payload[0].value}</p>
          <p className="desc m-0">Sold for: ${payload[0].payload.soldfor}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer className={"release-graph"}>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sold" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
