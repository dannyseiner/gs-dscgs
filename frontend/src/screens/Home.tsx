import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import HomeBlock from "../components/HomeBlock";
import axios from "axios";
import IPageData from "../interfaces/IPageData";

function Home() {
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageData, setPageData] = useState<IPageData[]>([]);

  useEffect(() => {
    loadPages();
    console.log(pageData);
  }, []);

  const loadPages = () => {
    axios
      .get(
        `https://api.discogs.com/artists/1/releases?page=${pageCount}&per_page=10`
      )
      .then((response) => setPageData(response.data.releases));
  };

  return (
    <Container>
      {pageData.map((data) => (
        <>
          <HomeBlock data={data} />
        </>
      ))}
    </Container>
  );
}

export default Home;
