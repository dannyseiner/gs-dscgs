import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import HomeBlock from "../components/HomeBlock";
import HomePagination from "../components/HomePagination";
import HomePopulatBlock from "../components/HomePopulatBlock";
import axios from "axios";
import IPageData from "../interfaces/IPageData";
function Home() {
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageData, setPageData] = useState<IPageData[]>([]);
  const [pageLength, setPageLength] = useState<number>(0);
  useEffect(() => {
    loadPages();
  }, [pageCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPages = () => {
    axios
      .get(
        `https://api.discogs.com/artists/1/releases?page=${pageCount}&per_page=${
          pageCount === 1 ? 11 : 9
        }`
      )
      .then((response) => {
        setPageData(response.data.releases);
        setPageLength(response.data.pagination.pages);
      });
  };

  return (
    <div className="fadeIn">
      <div className="home-popular">
        <h3 className="text-center m-4 mb-4 pt-4">Popular</h3>
        <HomePopulatBlock props={{ style: "text-dark" }} />
        <HomePopulatBlock props={{ style: "text-dark" }} />
        <HomePopulatBlock props={{ style: "text-dark" }} />
        <HomePopulatBlock props={{ style: "text-dark" }} />
        <HomePopulatBlock props={{ style: "text-dark" }} />
        <HomePopulatBlock props={{ style: "text-dark" }} />
      </div>
      <div className="bg-dark w-100 p-2 mb-4">
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
      </div>

      <Row>
        <Col>
          {pageData.map((data, i) => (
            <div key={i}>
              {data.title === "Morgon Sol" ? (
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
