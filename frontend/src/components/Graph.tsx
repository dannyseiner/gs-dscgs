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
import { Button, ButtonGroup } from "react-bootstrap";
const staticGraphData = require("../test/releasegraph.json");
function Graph() {
  const [activeButton, setActiveButton] = useState(1);
  const [chartData, setChartData] = useState<IReleeaseGraph[] | any[]>(
    staticGraphData[0]
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-dark text-light p-2">
          <p className="label m-0">
            date: <span className="fw-bold text-warning">{label}</span>
          </p>
          {/* <p className="intro m-0">
            Sold:{" "}
            <span className="fw-bold text-warning">{payload[0].value}</span>
          </p> */}
          <p className="desc m-0">
            Sold for:{" "}
            <span className="fw-bold text-warning">
              ${payload[0].payload.soldfor}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  const changeGraphData = (evt: number) => {
    setActiveButton(evt);
    setChartData(staticGraphData[evt - 1]);
  };

  return (
    <div>
      <div className="div-center pb-4">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant={activeButton === 1 ? "warning" : ""}
            onClick={() => changeGraphData(1)}
          >
            1W
          </Button>
          <Button
            variant={activeButton === 2 ? "warning" : ""}
            onClick={() => changeGraphData(2)}
          >
            1M
          </Button>
          <Button
            variant={activeButton === 3 ? "warning" : ""}
            onClick={() => changeGraphData(3)}
          >
            1Y
          </Button>
          <Button
            variant={activeButton === 4 ? "warning" : ""}
            onClick={() => changeGraphData(4)}
          >
            ALL
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ marginLeft: -17 }}>
        <ResponsiveContainer className={"release-graph"}>
          <LineChart
            width={600}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="sold" stroke="#FFC107" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
