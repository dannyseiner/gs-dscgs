import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBlock from "../components/HomeBlock";
import HomePagination from "../components/HomePagination";

import axios from "axios";
import IPageData from "../interfaces/IPageData";
function Home() {
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageData, setPageData] = useState<IPageData[]>([]);
  const [pageLength, setPageLength] = useState<number>(0);
  useEffect(() => {
    loadPages();
  }, [pageCount]);

  const loadPages = () => {
    axios
      .get(
        `https://api.discogs.com/artists/1/releases?page=${pageCount}&per_page=${
          pageCount == 1 ? 11 : 9
        }`
      )
      .then((response) => {
        setPageData(response.data.releases);
        setPageLength(response.data.pagination.pages);
      });
  };

  return (
    <div className="fadeIn">
      <Row>
        <Col>
          {pageData.map((data, i) => (
            <div key={i}>
              {data.title == "Morgon Sol" ? (
                ""
              ) : (
                <HomeBlock key={i} data={data} />
              )}
            </div>
          ))}
        </Col>
      </Row>

      <HomePagination
        pageCount={pageCount}
        setPageCount={(e: number) => setPageCount(e)}
        pageLength={pageLength}
      />
    </div>
  );
}

export default Home;
