import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBlock from "../components/HomeBlock";
import Pagination from "react-bootstrap/Pagination";

import axios from "axios";
import IPageData from "../interfaces/IPageData";
function Home() {
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageData, setPageData] = useState<IPageData[]>([]);

  useEffect(() => {
    loadPages();
  }, [pageCount]);

  const loadPages = () => {
    axios
      .get(
        `https://api.discogs.com/artists/1/releases?page=${pageCount}&per_page=${
          pageCount == 1 ? 10 : 9
        }`
      )
      .then((response) => {
        setPageData(response.data.releases);
      });
  };

  return (
    <div className="fadeIn">
      <Row>
        <Col>
          {pageData.map((data, i) => (
            <HomeBlock key={i} data={data} />
          ))}
        </Col>
      </Row>

      <div className="div-center p-2">
        <Pagination>
          <Pagination.Prev
            onClick={() => setPageCount(pageCount == 1 ? 1 : pageCount - 1)}
          />

          {pageCount != 2 && pageCount != 1 ? (
            <Pagination.Item onClick={() => setPageCount(pageCount - 2)}>
              {pageCount - 2}
            </Pagination.Item>
          ) : (
            ""
          )}

          {pageCount != 1 ? (
            <Pagination.Item onClick={() => setPageCount(pageCount - 1)}>
              {pageCount - 1}
            </Pagination.Item>
          ) : (
            ""
          )}

          <Pagination.Item active>{pageCount}</Pagination.Item>

          <Pagination.Item onClick={() => setPageCount(pageCount + 1)}>
            {pageCount + 1}
          </Pagination.Item>

          <Pagination.Item onClick={() => setPageCount(pageCount + 2)}>
            {pageCount + 2}
          </Pagination.Item>

          {pageCount == 1 ? (
            <Pagination.Item onClick={() => setPageCount(pageCount + 3)}>
              {pageCount + 3}
            </Pagination.Item>
          ) : (
            ""
          )}

          {pageCount == 2 || pageCount == 1 ? (
            <Pagination.Item onClick={() => setPageCount(pageCount + 4)}>
              {pageCount + 4}
            </Pagination.Item>
          ) : (
            ""
          )}

          <Pagination.Next onClick={() => setPageCount(pageCount + 1)} />
        </Pagination>
      </div>
    </div>
  );
}

export default Home;
