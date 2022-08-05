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
  const [chartData, setChartData] = useState<IReleeaseGraph[]>(staticGraphData);

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
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
