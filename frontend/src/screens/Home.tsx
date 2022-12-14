import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import HomePagination from "../components/HomePagination";
import axios from "axios";
import HomeTable from "../components/HomeTable";
import IReleaseHomeTable from "../interfaces/IReleaseHomeTable";
import { TailSpin } from "react-loader-spinner";

const config = require("../config");
function Home() {
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageData, setPageData] = useState<IReleaseHomeTable[]>([]);
  const [pageLength, setPageLength] = useState<number>(0);
  const [filter, setFilter] = useState<String>("desc");
  useEffect(() => {
    loadPages();
  }, [pageCount]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    loadPages();
  }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPages = () => {
    axios
      .get(`${config.server_url}/releases/${pageCount}/${filter}`)
      .then((response) => {
        setPageData(response.data.releases);
        setPageLength(response.data.pagination.max_pages);
      });
  };

  return (
    <div className="fadeIn " style={{ borderRadius: 10 }}>
      <div className="home-table">
        <Row
          className="hide-mobile"
          style={pageData.length === 0 ? { display: "none" } : {}}
        >
          <Col sm={4}>
            <p className="home-table-nav">Name</p>
          </Col>
          <Col sm>
            <p
              className="home-table-nav filter-tab"
              onClick={() => setFilter(filter === "desc" ? "asc" : "desc")}
            >
              Price
            </p>
          </Col>
          <Col sm>
            <p className="home-table-nav">Chart</p>
          </Col>
          <Col sm>
            <p className="home-table-nav">Change</p>
          </Col>
        </Row>

        {pageData.length === 0 ? (
          <div className="div-center p-5">
            <TailSpin color="black" height={80} width={80} />
          </div>
        ) : (
          ""
        )}

        {pageData.map((release, index: number) => (
          <HomeTable key={index} data={release} />
        ))}
      </div>
      {pageData.length === 0 ? (
        ""
      ) : (
        <HomePagination
          pageCount={pageCount}
          setPageCount={(e: number) => setPageCount(e)}
          pageLength={
            Math.floor(pageLength) !== pageLength
              ? Math.floor(pageLength) + 1
              : Math.floor(pageLength)
          }
        />
      )}
    </div>
  );
}

export default Home;
