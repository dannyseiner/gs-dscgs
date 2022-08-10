import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import HomePagination from "../components/HomePagination";
import axios from "axios";
import HomeTable from "../components/HomeTable";
import IReleaseHomeTable from "../interfaces/IReleaseHomeTable";
function Home() {
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageData, setPageData] = useState<IReleaseHomeTable[]>([]);
  const [pageLength, setPageLength] = useState<number>(0);
  useEffect(() => {
    loadPages();
  }, [pageCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPages = () => {
    axios
      .get(`http://localhost:3010/releases/${pageCount}`)
      .then((response) => {
        setPageData(response.data.releases);
        setPageLength(response.data.pagination.max_pages);
        console.log(pageData);
      });
  };

  return (
    <div className="fadeIn">
      <div className="home-table">
        <Row>
          <Col>
            <p className="home-table-nav">Name</p>
          </Col>
          <Col>
            <p className="home-table-nav">Price</p>
          </Col>
          <Col>
            <p className="home-table-nav">Chart</p>
          </Col>
          <Col>
            <p className="home-table-nav">Change</p>
          </Col>
        </Row>
        {pageData.map((release, index: number) => (
          <HomeTable key={index} data={release} />
        ))}
      </div>

      {/* <div
        className="bg-dark w-100 p-2 mb-4"
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      >
        <div className="home-popular ">
          <h3 className="text-center text-light m-4 mb-4 pt-2">
            Most Expensive
          </h3>
          <div className="div-cener">
            <HomePopulatBlock props={{ style: "text-light" }} />
            <HomePopulatBlock props={{ style: "text-light" }} />
            <HomePopulatBlock props={{ style: "text-light" }} />
            <HomePopulatBlock props={{ style: "text-light" }} />
            <HomePopulatBlock props={{ style: "text-light" }} />
          </div>
        </div>
      </div> */}

      <HomePagination
        pageCount={pageCount}
        setPageCount={(e: number) => setPageCount(e)}
        pageLength={pageLength}
      />
    </div>
  );
}

export default Home;
