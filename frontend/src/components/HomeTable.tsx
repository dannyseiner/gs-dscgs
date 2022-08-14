import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ArrowDownRight, ArrowUpRight } from "react-bootstrap-icons";
import { LineChart, Line, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";
const HomeTable = ({ data }: any) => {
  const navigate = useNavigate();

  const generateDataFroGraph = () => {
    let tmp = [];
    for (let i = 0; i < Math.floor(Math.random() * 7) + 3; i++) {
      tmp.push({
        name: `ind ${i}`,
        price: Math.floor(Math.random() * 300) + 1,
      });
    }
    return tmp;
  };

  const graph_data: any[] = generateDataFroGraph();

  const RedirectToRelease = () => {
    navigate(`/release/${data.release_id}`);
  };
  return (
    <div
      className="home-table-container mt-3 fadeIn bg-light"
      onClick={() => RedirectToRelease()}
    >
      <Row style={{ alignItems: "center" }}>
        <Col sm={4} className=" align-self-center">
          <p className="home-table-title">{data.title}</p>
          <p className="home-table-label">{data.label}</p>
        </Col>
        <Col sm>
          {/* ORIGINAL PRICE */}
          {/* <p className="home-table-price">{data.price}</p> */}
          {/* CONVERTED AND FORMATED PRICE */}
          <p className="home-table-price">
            {data.price_usd.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </Col>
        <Col>
          <div className="home-table-graph-container">
            <LineChart width={100} height={50} data={graph_data}>
              <Line
                type="monotone"
                dataKey="price"
                // stroke={"#" + Math.floor(Math.random() * 16777215).toString(16)} RANDOM COLOR
                stroke={"#FFC107"}
                strokeWidth={2}
              />
              <Tooltip formatter={(label: any) => label} />
            </LineChart>
          </div>
        </Col>
        <Col>
          {Math.random() < 0.5 ? (
            <div className="home-table-stats text-success">
              <ArrowUpRight size={20} style={{ marginRight: 5 }} />
              <p className="home-table-stats-value">
                {(Math.random() * 100).toFixed(2)}
              </p>
            </div>
          ) : (
            <div className="home-table-stats text-danger">
              <ArrowDownRight size={20} style={{ marginRight: 5 }} />
              <p className="home-table-stats-value">
                {(Math.random() * 100).toFixed(2)}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HomeTable;
